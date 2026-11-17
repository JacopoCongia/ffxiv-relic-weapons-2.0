import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDarNiKI_oYPbwa8j0hpMu9kitjTNw_hL8",
  authDomain: "ffxiv-relic-weapons.firebaseapp.com",
  projectId: "ffxiv-relic-weapons",
  storageBucket: "ffxiv-relic-weapons.appspot.com",
  messagingSenderId: "487059897588",
  appId: "1:487059897588:web:4b29c3a681da1c5af4f2a1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export async function addUserToDb(user) {
  // adds the user to the db when they sign up for a new account with the uid as the document id.
  // merge: true so logging in again doesn't wipe other fields on an existing user document
  await setDoc(
    doc(db, "users", user.uid),
    {
      email: user.email
    },
    { merge: true }
  );
}

export async function addToDb(weapons, currentUser) {
  await setDoc(doc(db, "users", currentUser.uid, "data", "ownedWeapons"), {
    ownedWeapons: weapons
  });
}

export async function getWeapons(currentUser) {
  // Returns the user's saved weapons, or [] if nothing has been saved yet (e.g. a new user)
  const snapshot = await getDoc(
    doc(db, "users", currentUser.uid, "data", "ownedWeapons")
  );

  if (!snapshot.exists()) return [];
  return snapshot.data().ownedWeapons ?? [];
}

export async function deleteUserData(user) {
  // Deleting a document doesn't delete its subcollections, so remove both explicitly.
  // Must run while the user is still signed in, otherwise security rules reject it.
  await deleteDoc(doc(db, "users", user.uid, "data", "ownedWeapons"));
  await deleteDoc(doc(db, "users", user.uid));
}
