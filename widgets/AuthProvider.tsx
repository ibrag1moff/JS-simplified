import { useAppDispatch } from "@/hooks/redux";
import { firebaseAuth } from "@/lib/firebase";
import { fetchUser, logout } from "@/store/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { RotateLoader } from "react-spinners";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [, setCookie, removeCookie] = useCookies(["user_token"]);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        dispatch(fetchUser());
        setCookie("user_token", token, { path: "/" });
      } else {
        dispatch(logout());
        removeCookie("user_token");
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <RotateLoader color="#7979fe" />
      </div>
    );

  return <>{children}</>;
};
