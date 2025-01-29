"use client";

import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext({
  isDarkMode: false, // Nilai default untuk mencegah undefined
  toggleDarkMode: () => {}, // Placeholder function
});

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default ke false agar tidak null

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Cek apakah ada nilai tersimpan di localStorage
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        setIsDarkMode(JSON.parse(savedMode));
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
