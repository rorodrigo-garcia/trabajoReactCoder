// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp5trFS938jshCvIqZk3DfHiLKxk9Qfs0",
  authDomain: "practicareact-c0389.firebaseapp.com",
  projectId: "practicareact-c0389",
  storageBucket: "practicareact-c0389.appspot.com",
  messagingSenderId: "562601093645",
  appId: "1:562601093645:web:6c3c5374bd731d313a0344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)