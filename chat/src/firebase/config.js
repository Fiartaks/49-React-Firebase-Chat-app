import { initializeApp } from "firebase/app";

//!import edilecek
import { getAuth, GoogleAuthProvider } from 'firebase/auth' ;
import {getFirestore} from 'firebase/firestore'

//console.log(import.meta.env.VITE_API_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-6aaf3.firebaseapp.com",
  projectId: "chat-app-6aaf3",
  storageBucket: "chat-app-6aaf3.firebasestorage.app",
  messagingSenderId: "996237678081",
  appId: "1:996237678081:web:3073094194ec719875d200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//!kimlik dogrulama boluimunu uygulayama cagiriyoz

export const auth = getAuth(app);

//!google saglayiciin kurulumu

export const provider = new GoogleAuthProvider();


//!Veritabinin referansini al
  
export const db = getFirestore(app);