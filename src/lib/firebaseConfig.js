"use client";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, limit } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Auth functions
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success("Successfully logged in!");
    return result;
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Failed to login. Please try again.");
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully");
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Failed to logout. Please try again.");
    throw error;
  }
};

// Firestore functions
const getMessages = (callback) => {
  const messagesQuery = query(
    collection(db, "messages"), 
    orderBy("timestamp", "desc"),
    limit(100)
  );
  
  return onSnapshot(messagesQuery, (snapshot) => {
    const messages = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
    callback(messages);
  });
};

const sendMessage = async (userName, message, photo) => {
  if (!message.trim()) return;
  
  try {
    await addDoc(collection(db, "messages"), {
      username: userName,
      message: message.trim(),
      photo: photo,
      timestamp: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message. Please try again.");
    throw error;
  }
};

export { 
  db, 
  auth, 
  loginWithGoogle, 
  logout, 
  getMessages, 
  sendMessage 
};