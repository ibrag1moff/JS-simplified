"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import PopupProvider from "@/context/popupContext";
import Popup from "@/components/Popup";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <CookiesProvider>
          <PopupProvider>
            <Popup />
            {children}
          </PopupProvider>
        </CookiesProvider>
      </ThemeProvider>
    </Provider>
  );
}
