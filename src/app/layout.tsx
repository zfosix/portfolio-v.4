"use client"; 

import { Poppins } from "next/font/google";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import Favicon from "@/components/Favicon";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ParticleStars from "@/components/ParticleStars";
import ChatRoomButton from "@/components/ChatRoomButton"; 

const ClientOnlyAppContent = dynamic(() => import("@/components/AppContent"), {
  ssr: false,
  loading: () => <div className="min-h-screen"></div>, 
});

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
const DEFAULT_TITLE = "Zian's Code | Personal Website";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [showChatRoomButton, setShowChatRoomButton] = useState(false);
  const pathname = usePathname() || "/";

  useEffect(() => {
    setIsLoading(true);
    setIsInitialLoad(true);

    // Update judul halaman berdasarkan pathname
    document.title = PAGE_TITLES[pathname as PagePath] || DEFAULT_TITLE;

    // Simulasikan loading selama LOADING_DURATION
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setIsInitialLoad(false);
    }, LOADING_DURATION);

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    // Setelah loading selesai, tampilkan tombol chat room
    if (!isLoading) {
      setShowChatRoomButton(true);
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <head>
        <Favicon />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Komponen ParticleStars */}
        <ParticleStars />

        {/* Provider untuk Dark Mode */}
        <DarkModeProvider>
          {/* Render tombol chat room hanya jika showChatRoomButton bernilai true */}
          {showChatRoomButton && <ChatRoomButton />}

          {/* Render AppContent hanya di sisi klien */}
          <ClientOnlyAppContent isLoading={isLoading} isInitialLoad={isInitialLoad}>
            {children}
          </ClientOnlyAppContent>
        </DarkModeProvider>
      </body>
    </html>
  );
}