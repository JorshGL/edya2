import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYkiBEmDzA98-wahJETL_d0tXQK2m7ovo",
  authDomain: "bd2-b3a55.firebaseapp.com",
  projectId: "bd2-b3a55",
  storageBucket: "bd2-b3a55.appspot.com",
  messagingSenderId: "954577486054",
  appId: "1:954577486054:web:9f7b16d05346b5fb2efb27",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, firebaseStorage };
