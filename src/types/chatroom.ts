// types.ts
import { Timestamp } from "firebase/firestore";

export interface Message {
  id: string;
  username: string;
  message: string;
  photo: string;
  timestamp: Timestamp;
  userId: string;
}

export interface User {
  name: string;
  email: string;
  photo: string;
  uid: string;
}