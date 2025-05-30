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

const providers = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
};

type Provider = keyof typeof providers;

export const useAuth = () => {
  const [, setCookie, removeCookie] = useCookies(["user_token"]);
  const { closePopup } = usePopup();

  const dispatch = useAppDispatch();

  const handleLogin = async (provider: Provider) => {
    try {
      const { user } = await signInWithPopup(firebaseAuth, providers[provider]);
      const firebaseToken = await user.getIdToken();

      if (firebaseToken) {
        setCookie("user_token", firebaseToken, { path: "/" });

        const resultAction = await dispatch(fetchUser());

        if (fetchUser.fulfilled.match(resultAction)) {
          const userData = resultAction.payload;
          console.log("User data fetched:", userData);
        }

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
    } catch (e) {
      console.error("Error logging in", e);
      notifyError();
    }
  };

  const handleLogout = async () => {
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
    } catch (e) {
      console.error("Error logging out", e);
      notifyError();
    }
  };

  return {
    handleGoogleLogin: () => handleLogin("google"),
    handleGithubLogin: () => handleLogin("github"),
    handleLogout,
  };
};
