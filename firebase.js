import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
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
  // adds the user to the db when they sign up for a new account with the uid as the document id
  await setDoc(doc(db, "users", user.uid), {
    email: user.email
  });
}

export async function addToDb(weapons, currentUser) {
  await setDoc(doc(db, "users", currentUser.uid, "data", "ownedWeapons"), {
    ownedWeapons: weapons
  });
}

export async function getWeapons(currentUser) {
  const snapshot = await getDocs(
    collection(db, "users", currentUser.uid, "data")
  );

  if (snapshot) {
    const weaponsFromDb = snapshot.docs.map((doc) => {
      return doc.data();
    });
    return weaponsFromDb[0].ownedWeapons;
  }
}
