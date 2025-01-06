// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Don't share config in public
const firebaseConfig = {
    apiKey: "AIzaSyClb_-CLStO--sT78679QInGDaP8S05VkA",
    authDomain: "email-password-auth-9027f.firebaseapp.com",
    projectId: "email-password-auth-9027f",
    storageBucket: "email-password-auth-9027f.firebasestorage.app",
    messagingSenderId: "621542450111",
    appId: "1:621542450111:web:3ffcb58e7aac891b27b70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;