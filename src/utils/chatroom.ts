import { Timestamp } from "firebase/firestore";

// Interface untuk objek dengan toDate method
interface WithToDate {
  toDate: () => Date;
}

// Interface untuk objek Firebase timestamp
interface FirebaseTimestamp {
  seconds: number;
  nanoseconds: number;
}

// Format timestamp helper function
export const formatTimestamp = (timestamp: Timestamp | unknown) => {
  if (!timestamp) return "";
  
  try {
    // Jika timestamp adalah Timestamp dari Firestore
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      return new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(date);
    }
    
    // Jika timestamp adalah objek dengan properti seconds & nanoseconds
    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      "seconds" in timestamp &&
      "nanoseconds" in timestamp
    ) {
      const firebaseTimestamp = timestamp as FirebaseTimestamp;
      const date = new Date(firebaseTimestamp.seconds * 1000 + firebaseTimestamp.nanoseconds / 1000000);
      return new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(date);
    }
    
    // Timestamp sudah berupa Date
    if (timestamp instanceof Date) {
      return new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(timestamp);
    }
    
    // Jika timestamp adalah string
    if (typeof timestamp === "string") {
      const date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        return new Intl.DateTimeFormat("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          day: "2-digit",
          month: "short",
        }).format(date);
      }
    }
    
    // Jika timestamp adalah number
    if (typeof timestamp === "number") {
      const date = new Date(timestamp);
      return new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        day: "2-digit",
        month: "short",
      }).format(date);
    }
    
    // Jika timestamp adalah objek dengan metode toDate()
    if (
      typeof timestamp === "object" &&
      timestamp !== null &&
      typeof (timestamp as { toDate?: () => Date }).toDate === "function"
    ) {
      try {
        const withToDate = timestamp as WithToDate;
        const date = withToDate.toDate();
        return new Intl.DateTimeFormat("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          day: "2-digit",
          month: "short",
        }).format(date);
      } catch (err) {
        console.error("Error calling toDate():", err);
      }
    }
    
    console.warn("Format timestamp tidak dikenali:", timestamp);
    return "";
  } catch (error) {
    console.error("Error saat memformat timestamp:", error);
    return "";
  }
};