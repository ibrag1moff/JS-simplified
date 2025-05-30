"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import PopupProvider from "@/context/popupContext";
import Popup from "@/components/Popup";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/widgets/AuthProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <CookiesProvider>
          <AuthProvider>
            <PopupProvider>
              <ToastContainer />
              <Popup />
              {children}
            </PopupProvider>
          </AuthProvider>
        </CookiesProvider>
      </ThemeProvider>
    </Provider>
  );
}
