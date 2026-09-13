// =========================================================
// AVANSCORE — CONFIGURATION FIREBASE
// Analysez. Anticipez. Décidez.
// =========================================================

const firebaseConfig = {
    apiKey: "AIzaSyByMWbwi0bzpFFYJ83QAiozHRhuzd5LbYQ",
    authDomain: "avanscore-503bb.firebaseapp.com",
    projectId: "avanscore-503bb",
    storageBucket: "avanscore-503bb.firebasestorage.app",
    messagingSenderId: "205261980502",
    appId: "1:205261980502:web:5b085e7a9dd2d0da4a8cf7",
    measurementId: "G-PHNXK3HX7C"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);

// Initialisation de Google Analytics
const analytics = firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();