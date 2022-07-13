import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * @author Ross Morrison <ross@rosscode.dev>
 */

const firebaseConfig = {
  apiKey: "AIzaSyDsH8AaBWinCTxHAlyQbc6HRyzkqXsMTiE",
  authDomain: "homepage-6f16d.firebaseapp.com",
  projectId: "homepage-6f16d",
  storageBucket: "homepage-6f16d.appspot.com",
  messagingSenderId: "1086698928389",
  appId: "1:1086698928389:web:522fbea54a865b68541f6c",
  measurementId: "G-818W94M7R0",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
