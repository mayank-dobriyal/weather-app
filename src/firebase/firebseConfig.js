// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn26c0Rys1-VubpvONOwiPJa_aFkZwbJI",
  authDomain: "weather-place-363212.firebaseapp.com",
  projectId: "weather-place-363212",
  storageBucket: "weather-place-363212.appspot.com",
  messagingSenderId: "897577735202",
  appId: "1:897577735202:web:0e6359bf89da8476e5667b",
  measurementId: "G-C264GFFQCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);