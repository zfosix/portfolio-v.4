// context/DarkModeContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(null); 

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode)); 
  };

  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedMode !== null) {
      setIsDarkMode(savedMode); 
    }
  }, []);

  if (isDarkMode === null) {
    return null; 
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}