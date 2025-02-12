import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

// Konfigurasi Firebase dari .env
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fungsi Login dan Logout
const loginWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

// Fungsi untuk mengambil pesan secara real-time
const getMessages = (callback) => {
  const messagesQuery = query(collection(db, "messages"), orderBy("timestamp", "asc"));
  return onSnapshot(messagesQuery, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    callback(messages);
  });
};

// Fungsi untuk mengirim pesan
const sendMessage = async (userName, message) => {
  if (!message.trim()) return;
  await addDoc(collection(db, "messages"), {
    name: userName,
    text: message,
    timestamp: new Date(),
  });
};

const ChatroomPage = () => {
  const [user] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Ambil pesan dari Firestore secara real-time
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = getMessages((fetchedMessages) => {
      setMessages(fetchedMessages);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Fungsi untuk mengirim pesan
  const handleSendMessage = async () => {
    if (!user || !newMessage.trim()) return;
    await sendMessage(user.name, newMessage);
    setNewMessage("");
  };

  return (
    <div className="chatroom-container">
      {!user ? (
        <button onClick={loginWithGoogle}>Login with Google</button>
      ) : (
        <div>
          <button onClick={logout}>Logout</button>
          <div className="messages">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              messages.map((msg) => (
                <p key={msg.id}><strong>{msg.name}:</strong> {msg.text}</p>
              ))
            )}
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default ChatroomPage;
export { db, auth, loginWithGoogle, logout, getMessages, sendMessage };
