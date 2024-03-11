// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7UfIH5SqXWarlsU9JFoGBlIWpWHicKWU",
  authDomain: "smo-react-ch.firebaseapp.com",
  projectId: "smo-react-ch",
  storageBucket: "smo-react-ch.appspot.com",
  messagingSenderId: "1073153434991",
  appId: "1:1073153434991:web:972136b45cf0ad10c9f49a"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db