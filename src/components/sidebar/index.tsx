"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import DesktopMenu from "@/components/sidebar/DesktopMenu";
import MobileMenu from "@/components/sidebar/MobileMenu";
import { usePathname } from "next/navigation";
import MobileProfileItem from "@/components/sidebar/MobileProfileItem";
import { MENU_ITEMS } from "@/data/resume";

interface SidebarProps {
  isLoading: boolean;
}

export default function Sidebar({ isLoading }: SidebarProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="sticky top-0 z-10 flex flex-col"></div>;
  }

  return (
    <div
      className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8"
      suppressHydrationWarning={true}
    >
      {/* Mobile Profile Section - Hanya tampil di mobile dan tidak loading */}
      {!isLoading && (
        <div className="md:hidden">
          <MobileProfileItem
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
        </div>
      )}

      {/* Desktop Menu - Hanya tampil di desktop */}
      <div className="hidden md:block">
        <DesktopMenu
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          menuItems={MENU_ITEMS}
          pathname={pathname}
        />
      </div>

      {/* Mobile Menu - Hanya tampil di mobile */}
      <div className="md:hidden">
        <MobileMenu
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
          menuItems={MENU_ITEMS}
          pathname={pathname}
          prefetchNextPages={() => {}}
        />
      </div>
    </div>
  );
}