"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type PopupContextType = {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

const popupContext = createContext({} as PopupContextType);

export const usePopup = () => useContext(popupContext);

export default function PopupProvider({ children }: { children: ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);

  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    window.addEventListener("click", () => setIsPopupOpen(false));
  });

  return (
    <popupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </popupContext.Provider>
  );
}
