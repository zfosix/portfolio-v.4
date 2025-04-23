"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const darkModePreference = localStorage.getItem("darkMode");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(
      darkModePreference !== null ? JSON.parse(darkModePreference) : prefersDarkMode
    );
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-neutral-950"); 
      document.body.classList.remove("bg-white"); 
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("bg-white"); 
      document.body.classList.remove("bg-neutral-950");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};