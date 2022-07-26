
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmRAheePQHRd-dUdf6lmxqmcjhSw7PkrA",
  authDomain: "menus-mexico-44ac7.firebaseapp.com",
  projectId: "menus-mexico-44ac7",
  storageBucket: "menus-mexico-44ac7.appspot.com",
  messagingSenderId: "809997554049",
  appId: "1:809997554049:web:e3919e75891f8428cf9880"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)