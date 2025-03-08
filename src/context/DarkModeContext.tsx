"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Create context with default values that match initial SSR rendering
const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false, // Must match the default background color in AppContent
  toggleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // Start with false for SSR to match the className in the error trace
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Track mounting state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state
    setMounted(true);

    // Get user preference from localStorage
    const darkModePreference = localStorage.getItem("darkMode");
    
    // Check system preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set dark mode based on stored preference or system preference
    setIsDarkMode(
      darkModePreference !== null ? JSON.parse(darkModePreference) : prefersDarkMode
    );
  }, []);

  // Apply dark mode class to document only after mounting
  useEffect(() => {
    if (!mounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // We can use the mounted state to provide a simpler context value during SSR
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};