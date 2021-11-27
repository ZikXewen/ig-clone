import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDa6XtDGmOxeVAzEFoEWLkK6zrwR1iClpM",
  authDomain: "ig-clone-zikxewen.firebaseapp.com",
  projectId: "ig-clone-zikxewen",
  storageBucket: "ig-clone-zikxewen.appspot.com",
  messagingSenderId: "539914250239",
  appId: "1:539914250239:web:b65927816f425a639769ca",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
