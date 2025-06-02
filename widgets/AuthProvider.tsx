import { useAppDispatch } from "@/hooks/redux";
import { firebaseAuth } from "@/lib/firebase";
import { fetchUser, logout } from "@/store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { CustomLoading } from "./CustomLoading";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [, setCookie, removeCookie] = useCookies(["user_token"]);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        dispatch(fetchUser());
        setCookie("user_token", token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
      } else {
        dispatch(logout());
        removeCookie("user_token");
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) return <CustomLoading />;

  return <>{children}</>;
};
