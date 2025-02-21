"use client";

import { Poppins } from "next/font/google";
import { DarkModeProvider, useDarkMode } from "@/context/DarkModeContext";
import "../styles/globals.css";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/sidebar/menu";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Head from 'next/head'; 

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const PAGE_TITLES = {
  "/about": "About | Zian's Code",
  "/blog": "Blog | Zian's Code",
  "/chatroom": "ChatRoom | Zian's Code",
  "/contact": "Contact | Zian's Code",
  "/dashboard": "Dashboard | Zian's Code",
  "/projects": "Projects | Zian's Code",
  "/roadmap": "Roadmap | Zian's Code",
} as const;

const LOADING_DURATION = 3000;
const DEFAULT_TITLE = "Zian's Code";
const DEFAULT_FAVICON = "/icon_title.png"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  const getPageTitle = useCallback((path: string) => {
    return PAGE_TITLES[path as keyof typeof PAGE_TITLES] || DEFAULT_TITLE;
  }, []);

  const updateFavicon = useCallback((href: string) => {
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = href;
    }
  }, []);

  useEffect(() => {
    document.title = getPageTitle(pathname);
  }, [pathname, getPageTitle]);

  useEffect(() => {
    updateFavicon(DEFAULT_FAVICON);
  }, [pathname, updateFavicon]);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DURATION);
    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <DarkModeProvider>
          <Head>
            <link rel="icon" href="/icon_title.png" /> 
          </Head>
          <AppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
            {children}
          </AppContent>
        </DarkModeProvider>
      </body>
    </html>
  );
}

interface AppContentProps {
  isLoading: boolean;
  isInitialLoad: boolean;
  children: React.ReactNode;
}

function AppContent({ isLoading, isInitialLoad, children }: AppContentProps) {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode ? "#0B0A0A" : "#FFFFFF";

  return (
    <>
      <AnimatePresence>
        {!isInitialLoad && isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000]"
            style={{ backgroundColor }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      <ParticleBackground />

      <div className="flex" style={{ backgroundColor }}>
        <div className="relative z-[1001]">
          <Sidebar />
        </div>
        <motion.div
          className="flex-1"
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