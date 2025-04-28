"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import PopupProvider from "@/context/popupContext";
import Popup from "@/components/Popup";
import { CookiesProvider } from "react-cookie";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <CookiesProvider>
          <PopupProvider>
            <Popup />
            {children}
          </PopupProvider>
        </CookiesProvider>
      </ThemeProvider>
    </>
  );
}
