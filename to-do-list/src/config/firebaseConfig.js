
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB7ht3rFTpxPI_oJ1qdNN4RvRRKgisokY",
  authDomain: "nottodolist-2257c.firebaseapp.com",
  projectId: "nottodolist-2257c",
  storageBucket: "nottodolist-2257c.appspot.com",
  messagingSenderId: "370255250339",
  appId: "1:370255250339:web:454a43137cab4cff855016",
  measurementId: "G-LPXPDJ0RSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
