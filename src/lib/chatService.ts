import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, DocumentData, QuerySnapshot } from "firebase/firestore";

// Referensi ke koleksi "messages" di Firestore
const messagesRef = collection(db, "messages");

// Interface untuk pesan
interface Message {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
}

/**
 * Mengirim pesan ke Firestore.
 * @param username - Nama pengguna yang mengirim pesan.
 * @param message - Isi pesan yang akan dikirim.
 */
export const sendMessage = async (username: string, message: string): Promise<void> => {
  if (!message.trim()) return; // Jangan kirim pesan kosong

  try {
    await addDoc(messagesRef, {
      username,
      message,
      timestamp: serverTimestamp(), // Timestamp dari server
    });
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message");
  }
};

/**
 * Mendapatkan pesan dari Firestore secara real-time.
 * @param callback - Fungsi yang akan dipanggil setiap kali ada perubahan pada pesan.
 * @returns Fungsi unsubscribe untuk menghentikan listener.
 */
export const getMessages = (callback: (messages: Message[]) => void): (() => void) => {
  // Query untuk mendapatkan pesan yang diurutkan berdasarkan timestamp (ascending)
  const q = query(messagesRef, orderBy("timestamp", "asc"));

  // Menggunakan onSnapshot untuk mendengarkan perubahan real-time
  return onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id, // ID dokumen
      ...doc.data(), // Data pesan (username, message, timestamp)
    })) as Message[]; // Type assertion ke tipe Message

    callback(messages); // Panggil callback dengan data pesan
  });
};