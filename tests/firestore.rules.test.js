// Tests for firestore.rules, run against the local Firestore emulator.
// Run with `npm run test:rules` (needs Java for the emulator).
//
// Each test tries one action as a specific user and checks that the rules
// allow it (assertSucceeds) or deny it (assertFails). The "app" tests mirror
// exactly what firebase.js does, so a rule change that would break the live
// site fails here first.
import { readFileSync } from "node:fs";
import { afterAll, beforeAll, beforeEach, describe, test } from "vitest";
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

const ALICE = { uid: "alice", email: "alice@example.com" };
const BOB = { uid: "bob", email: "bob@example.com" };

// Shaped like the entries weaponsData.jsx saves
const weapon = (i) => ({
  id: `phantom_test_${i}`,
  name: `Phantom Test ${i}`,
  category: "eclipticum",
  shield: null,
});
const weapons = (count) => Array.from({ length: count }, (_, i) => weapon(i));

let testEnv;

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({
    // "demo-" projects only exist in the emulator, so no Firebase login is needed
    projectId: "demo-ffxiv-relics",
    firestore: { rules: readFileSync("firestore.rules", "utf8") },
  });
});

afterAll(async () => {
  await testEnv?.cleanup();
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

// A Firestore client signed in as `user`. Pass email: null for a GitHub
// account with a hidden email (the token then has no email claim).
function dbAs(user) {
  const token = user.email ? { email: user.email } : {};
  return testEnv.authenticatedContext(user.uid, token).firestore();
}

function dbSignedOut() {
  return testEnv.unauthenticatedContext().firestore();
}

// Write test data directly, bypassing the rules
async function seed(path, data) {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), path), data);
  });
}

describe("what the app does (must keep working)", () => {
  test("login: creates the user document with merge", async () => {
    await assertSucceeds(
      setDoc(
        doc(dbAs(ALICE), "users/alice"),
        { email: ALICE.email },
        { merge: true },
      ),
    );
  });

  test("login again: merges into an existing user document", async () => {
    await seed("users/alice", { email: ALICE.email });
    await assertSucceeds(
      setDoc(
        doc(dbAs(ALICE), "users/alice"),
        { email: ALICE.email },
        { merge: true },
      ),
    );
  });

  test("login with GitHub and a hidden email: saves email as null", async () => {
    const githubUser = { uid: "carol", email: null };
    await assertSucceeds(
      setDoc(
        doc(dbAs(githubUser), "users/carol"),
        { email: null },
        { merge: true },
      ),
    );
  });

  test("load progress for a new user (document doesn't exist yet)", async () => {
    await assertSucceeds(
      getDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons")),
    );
  });

  test("load saved progress", async () => {
    await seed("users/alice/data/ownedWeapons", { ownedWeapons: weapons(3) });
    await assertSucceeds(
      getDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons")),
    );
  });

  test("save progress", async () => {
    await assertSucceeds(
      setDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons"), {
        ownedWeapons: weapons(25),
      }),
    );
  });

  test("save progress after unchecking everything (empty list)", async () => {
    await assertSucceeds(
      setDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons"), {
        ownedWeapons: [],
      }),
    );
  });

  test("save progress at the size limit (1000 entries)", async () => {
    await assertSucceeds(
      setDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons"), {
        ownedWeapons: weapons(1000),
      }),
    );
  });

  test("delete account: deletes both documents", async () => {
    await seed("users/alice", { email: ALICE.email });
    await seed("users/alice/data/ownedWeapons", { ownedWeapons: weapons(3) });
    const db = dbAs(ALICE);
    await assertSucceeds(deleteDoc(doc(db, "users/alice/data/ownedWeapons")));
    await assertSucceeds(deleteDoc(doc(db, "users/alice")));
  });
});

describe("signed-out visitors", () => {
  test("can't read a user document", async () => {
    await seed("users/alice", { email: ALICE.email });
    await assertFails(getDoc(doc(dbSignedOut(), "users/alice")));
  });

  test("can't read progress", async () => {
    await seed("users/alice/data/ownedWeapons", { ownedWeapons: weapons(3) });
    await assertFails(
      getDoc(doc(dbSignedOut(), "users/alice/data/ownedWeapons")),
    );
  });

  test("can't write anything", async () => {
    const db = dbSignedOut();
    await assertFails(setDoc(doc(db, "users/alice"), { email: null }));
    await assertFails(
      setDoc(doc(db, "users/alice/data/ownedWeapons"), { ownedWeapons: [] }),
    );
  });
});

describe("other users", () => {
  beforeEach(async () => {
    await seed("users/alice", { email: ALICE.email });
    await seed("users/alice/data/ownedWeapons", { ownedWeapons: weapons(3) });
  });

  test("can't read someone else's user document", async () => {
    await assertFails(getDoc(doc(dbAs(BOB), "users/alice")));
  });

  test("can't read someone else's progress", async () => {
    await assertFails(getDoc(doc(dbAs(BOB), "users/alice/data/ownedWeapons")));
  });

  test("can't overwrite someone else's documents", async () => {
    const db = dbAs(BOB);
    await assertFails(setDoc(doc(db, "users/alice"), { email: BOB.email }));
    await assertFails(
      setDoc(doc(db, "users/alice/data/ownedWeapons"), { ownedWeapons: [] }),
    );
  });

  test("can't delete someone else's documents", async () => {
    const db = dbAs(BOB);
    await assertFails(deleteDoc(doc(db, "users/alice/data/ownedWeapons")));
    await assertFails(deleteDoc(doc(db, "users/alice")));
  });

  test("can't list all users (e.g. to collect emails)", async () => {
    await assertFails(getDocs(collection(dbAs(BOB), "users")));
  });
});

describe("a user's own documents: only the expected shape", () => {
  test("user document: can't add extra fields", async () => {
    await assertFails(
      setDoc(doc(dbAs(ALICE), "users/alice"), {
        email: ALICE.email,
        isAdmin: true,
      }),
    );
  });

  test("user document: email must match the signed-in account", async () => {
    await assertFails(
      setDoc(doc(dbAs(ALICE), "users/alice"), {
        email: "someone-else@example.com",
      }),
    );
  });

  test("user document: can't store an email when the account has none", async () => {
    const githubUser = { uid: "carol", email: null };
    await assertFails(
      setDoc(doc(dbAs(githubUser), "users/carol"), {
        email: "made-up@example.com",
      }),
    );
  });

  test("user document: merge fails if the stored doc has other fields", async () => {
    // Documents why old user docs must only contain `email` before deploying
    await seed("users/alice", { email: ALICE.email, legacyField: 1 });
    await assertFails(
      setDoc(
        doc(dbAs(ALICE), "users/alice"),
        { email: ALICE.email },
        { merge: true },
      ),
    );
  });

  test("progress: can't add extra fields", async () => {
    await assertFails(
      setDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons"), {
        ownedWeapons: [],
        junk: "x".repeat(1000),
      }),
    );
  });

  test("progress: ownedWeapons must be a list", async () => {
    await assertFails(
      setDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons"), {
        ownedWeapons: "not a list",
      }),
    );
  });

  test("progress: can't go over 1000 entries", async () => {
    await assertFails(
      setDoc(doc(dbAs(ALICE), "users/alice/data/ownedWeapons"), {
        ownedWeapons: weapons(1001),
      }),
    );
  });

  test("can't create other documents under data/", async () => {
    await assertFails(
      setDoc(doc(dbAs(ALICE), "users/alice/data/somethingElse"), { a: 1 }),
    );
  });

  test("can't create new subcollections under the user", async () => {
    await assertFails(setDoc(doc(dbAs(ALICE), "users/alice/junk/1"), { a: 1 }));
  });

  test("can't write to any other top-level collection", async () => {
    await assertFails(setDoc(doc(dbAs(ALICE), "storage/file1"), { a: 1 }));
  });

  test("can't list their own data/ subcollection", async () => {
    await assertFails(getDocs(collection(dbAs(ALICE), "users/alice/data")));
  });
});
