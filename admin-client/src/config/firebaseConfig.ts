import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBokB9hGDfWCbPajZKbqVDLm3WqEzD_Jbc",
  authDomain: "reality-drive-dev.firebaseapp.com",
  projectId: "reality-drive-dev",
  storageBucket: "reality-drive-dev.appspot.com",
  messagingSenderId: "66685062785",
  appId: "1:66685062785:web:0d39f39474ebd4e0acc780",
  measurementId: "G-VS26BX20JJ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const fireabseAuthentication = getAuth(firebaseApp);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
