// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcxK5U9BlqjNZ7ddNNNB9Vfi93vsdjseg",
  authDomain: "bazar-1c.firebaseapp.com",
  projectId: "bazar-1c",
  storageBucket: "bazar-1c.appspot.com",
  messagingSenderId: "362421472820",
  appId: "1:362421472820:web:d3fd7a0e1d0f79f2ed0461",
  measurementId: "G-VY0CC0FW8K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);