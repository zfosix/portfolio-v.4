import { ReactNode } from "react";
import { ComponentType } from "react";

export type MenuItemType = {
  title: string;
  href: string;
  icon: ComponentType<{ className?: string }>; // This should be a React component, not a string
  isShow?: boolean;
  isExternal: boolean;
  eventName?: string;
};

export interface DesktopMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  menuItems: MenuItemType[];
  pathname: string;
  prefetchNextPages?: () => void;
}

export interface MobileMenuProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  menuItems: MenuItemType[];
  pathname: string;
  prefetchNextPages?: () => void;
}

export interface SocialMedia {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  classContainer: string;
  classText: string;
  classLink: string;
  classIcon: string;
}