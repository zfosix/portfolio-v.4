"use client";

import { Poppins } from "next/font/google";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "../styles/globals.css";
import AppContent from "@/components/AppContent";
import Favicon from "@/components/Favicon";
import { useCallback, useEffect, useState } from "react";
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

const LOADING_DURATION = 3000;
const DEFAULT_TITLE = "Zian's Code";

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

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = getPageTitle(pathname);
    }
  }, [pathname, getPageTitle]);

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
      <head>
        <title>{getPageTitle(pathname)}</title>
        <Favicon />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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