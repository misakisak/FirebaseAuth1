// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzthk-GONr74LNbRIBswKl9O4jWNAevOc",
    authDomain: "fir-auth-c4ecb.firebaseapp.com",
    projectId: "fir-auth-c4ecb",
    storageBucket: "fir-auth-c4ecb.appspot.com",
    messagingSenderId: "720443880611",
    appId: "1:720443880611:web:732d0e959d3d8c39b23b16"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };