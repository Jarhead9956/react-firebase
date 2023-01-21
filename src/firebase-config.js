import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhw_ACnKgh50HKz-hwAjChY_IoIKw7HD0",
    authDomain: "educationdb-97121.firebaseapp.com",
    databaseURL: "https://educationdb-97121.firebaseio.com",
    projectId: "educationdb-97121",
    storageBucket: "educationdb-97121.appspot.com",
    messagingSenderId: "658582972682",
    appId: "1:658582972682:web:e6d28b092535ef2c50b2f3",
    measurementId: "G-XRBQLLMEML"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);