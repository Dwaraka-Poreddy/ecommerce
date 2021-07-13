import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";
// import "firebase/database";
// import "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoua5SZAb9jEDOGTO4UxK0IG6wDzTjLh8",
  authDomain: "ecommerce-be581.firebaseapp.com",
  projectId: "ecommerce-be581",
  storageBucket: "ecommerce-be581.appspot.com",
  messagingSenderId: "760745616722",
  appId: "1:760745616722:web:0ad8bb364017a14174068b",
  measurementId: "G-4Z0B8R5R6Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
