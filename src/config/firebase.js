// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCcr6R8tvdmhkCr9-LF10bkZqyc16i5nU",
  authDomain: "smarthomeproductsapp.firebaseapp.com",
  projectId: "smarthomeproductsapp",
  storageBucket: "smarthomeproductsapp.appspot.com",
  messagingSenderId: "186398906445",
  appId: "1:186398906445:web:ccf275c75cc4244228a404",
  measurementId: "G-9XLNELVLC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}


// var admin = require("firebase-admin");

// var serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// const db = admin.firestore();

// export {db}