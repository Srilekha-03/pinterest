// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ29VBavzHfa0WL8D-OqDRwJTZQ6F1NeQ",
  authDomain: "pinterest-5f4ad.firebaseapp.com",
  projectId: "pinterest-5f4ad",
  storageBucket: "pinterest-5f4ad.firebasestorage.app",
  messagingSenderId: "370851086799",
  appId: "1:370851086799:web:733a2d7bd3080d81c912ba",
  measurementId: "G-V72T2VTER2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;