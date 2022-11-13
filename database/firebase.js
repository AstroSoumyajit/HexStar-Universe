// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, getApp, getApps } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "hexstar.firebaseapp.com",
  projectId: "hexstar",
  storageBucket: "hexstar.appspot.com",
  messagingSenderId: "759264414408",
  appId: "1:759264414408:web:1e5ceeade6cd5cfd0f73fd",
  measurementId: "G-EZXNZE728G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const storage = getStorage()

export {app, db, storage}
