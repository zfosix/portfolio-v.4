// utils.ts
import { Timestamp } from "firebase/firestore";

// Format timestamp helper function
export const formatTimestamp = (timestamp: Timestamp) => {
  if (!timestamp) return "";
  const date = timestamp.toDate();
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    day: "2-digit",
    month: "short",
  }).format(date);
};