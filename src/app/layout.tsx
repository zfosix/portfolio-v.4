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

type PagePath = keyof typeof PAGE_TITLES;

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

  const getPageTitle = useCallback((path: string): string => {
    return PAGE_TITLES[path as PagePath] || DEFAULT_TITLE;
  }, []);

  useEffect(() => {
    document.title = getPageTitle(pathname ?? "/");
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), LOADING_DURATION);
    setIsInitialLoad(false);
    return () => clearTimeout(timeout);
  }, [pathname, getPageTitle]);

  return (
    <html lang="en">
      <head><title>{getPageTitle(pathname ?? "/")}</title><Favicon /><meta name="format-detection" content="telephone=no, date=no, email=no, address=no" /></head>
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