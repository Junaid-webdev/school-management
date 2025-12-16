// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDywKr7pPcr2aqhc_uuL-v5oujaaSVlsTg",
  authDomain: "react-project-d84bd.firebaseapp.com",
  projectId: "react-project-d84bd",
  storageBucket: "react-project-d84bd.firebasestorage.app",
  messagingSenderId: "521395069178",
  appId: "1:521395069178:web:07be65357bc7726a93a943",
  measurementId: "G-SWVDS939LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);