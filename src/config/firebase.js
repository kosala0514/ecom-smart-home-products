import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
