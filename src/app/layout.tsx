"use client";

import { Poppins } from "next/font/google";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "../styles/globals.css";
import AppContent from "@/components/AppContent";
import Favicon from "@/components/Favicon";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

type PagePath = keyof typeof PAGE_TITLES;

const LOADING_DURATION = 3000;
const DEFAULT_TITLE = "Zian's Code";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize with false to match SSR
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    // Mark as mounted first
    setMounted(true);
    
    // Then set loading states
    if (mounted) {
      setIsLoading(true);
      setIsInitialLoad(true);
      
      document.title = PAGE_TITLES[pathname as PagePath] || DEFAULT_TITLE;
      
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, LOADING_DURATION);
      
      return () => clearTimeout(timeout);
    }
  }, [pathname, mounted]);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Favicon />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning={true}>
        <DarkModeProvider>
          <AppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
            {children}
          </AppContent>
        </DarkModeProvider>
      </body>
    </html>
  );
}