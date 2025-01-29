"use client";

import { Poppins } from "next/font/google";
import { DarkModeProvider, useDarkMode } from "@/context/DarkModeContext";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/sidebar/menu";
import { motion, AnimatePresence } from "framer-motion";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();

  const getPageTitle = (path: string) => {
    switch (path) {
      case "/about":
        return "About | Zian's Code";
      case "/blog":
        return "Blog | Zian's Code";
      case "/chatroom":
        return "ChatRoom | Zian's Code";
      case "/contact":
        return "Contact | Zian's Code";
      case "/dashboard":
        return "Dashboard | Zian's Code";
      case "/projects":
        return "Projects | Zian's Code";
      case "/roadmap":
        return "Roadmap | Zian's Code";
      default:
        return "Zian's Code";
    }
  };

  useEffect(() => {
    document.title = getPageTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.title = getPageTitle(pathname);
        const favicon = document.querySelector(
          "link[rel*='icon']"
        ) as HTMLLinkElement;
        if (favicon) {
          favicon.href = "/f.png";
        }
      } else {
        document.title = "Come Back To Portfolio";
        const favicon = document.querySelector(
          "link[rel*='icon']"
        ) as HTMLLinkElement;
        if (favicon) {
          favicon.href = "/favhand.png";
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <DarkModeProvider>
          <AppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
            {children}
          </AppContent>
        </DarkModeProvider>
      </body>
    </html>
  );
}

function AppContent({
  isLoading,
  isInitialLoad,
  children,
}: {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}) {
  const { isDarkMode } = useDarkMode();

  const backgroundColor = isDarkMode ? "#0B0A0A" : "#FFFFFF";

  return (
    <>
      {/* Loading Spinner */}
      <AnimatePresence>
        {!isInitialLoad && isLoading && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: backgroundColor,
              zIndex: 1000,
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: "flex", backgroundColor: backgroundColor }}>
        <div style={{ zIndex: 1001, position: "relative" }}>
          <Sidebar />
        </div>
        <motion.div
          style={{
            flex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
