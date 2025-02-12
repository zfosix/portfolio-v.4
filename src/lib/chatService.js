import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

const messagesRef = collection(db, "messages");


export const sendMessage = async (username, message) => {
  if (!message.trim()) return;
  try {
    await addDoc(messagesRef, {
      username,
      message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export const getMessages = (callback) => {
  const q = query(messagesRef, orderBy("timestamp", "asc")); 
  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(messages);
  });
};
