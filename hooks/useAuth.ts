import { usePopup } from "@/context/popupContext";
import { firebaseAuth } from "@/lib/firebase";
import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useCookies } from "react-cookie";
import { notifyError, notifySuccess } from "@/utils/notifications";
import { fetchUser, logout } from "@/store/slices/userSlice";
import { useAppDispatch } from "./redux";
import { useState } from "react";

const providers = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
};

type Provider = keyof typeof providers;

export const useAuth = () => {
  const [, setCookie, removeCookie] = useCookies(["user_token"]);
  const { closePopup } = usePopup();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleLogin = async (provider: Provider) => {
    setIsLoading(true);
    try {
      const { user } = await signInWithPopup(firebaseAuth, providers[provider]);
      const firebaseToken = await user.getIdToken();

      if (firebaseToken) {
        setCookie("user_token", firebaseToken, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });

        await dispatch(fetchUser());

        closePopup();
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          token: firebaseToken,
        },
        {
          withCredentials: true,
        }
      );

      notifySuccess("You have been logged in!");
    } catch (e: any) {
      console.error("Error logging in", e);
      notifyError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const currentUser = firebaseAuth.currentUser;
      if (!currentUser) {
        notifyError("No user is currently logged in.");
        return;
      }
      const token = await currentUser.getIdToken();

      await firebaseAuth.signOut();

      removeCookie("user_token", { path: "/" });
      dispatch(logout());

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
        {
          token,
        },
        {
          withCredentials: true,
        }
      );

      closePopup();

      notifySuccess("You have been logged out!");
    } catch (e: any) {
      console.error("Error logging out", e);
      notifyError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleGoogleLogin: () => handleLogin("google"),
    handleGithubLogin: () => handleLogin("github"),
    handleLogout,
  };
};
