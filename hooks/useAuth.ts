import { usePopup } from "@/context/popupContext";
import { firebaseAuth } from "@/lib/firebase";
import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { useCookies } from "react-cookie";

const providers = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider()
};

type Provider = keyof typeof providers;

export const useAuth = () => {
  const [, setCookie] = useCookies(["firebaseToken", "refreshToken"]);
  const { closePopup } = usePopup();

  const handleLogin = async (provider: Provider) => {
    try {
      const { user } = await signInWithPopup(firebaseAuth, providers[provider]);
      const firebaseToken = await user.getIdToken();

      if (firebaseToken) {
        setCookie("firebaseToken", firebaseToken, { path: "/" });
        setCookie("refreshToken", user.refreshToken, { path: "/" });

        closePopup();
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          token: firebaseToken
        },
        {
          withCredentials: true
        }
      );
    } catch (e) {
      console.error("Error logging in", e);
    }
  };

  return {
    handleGoogleLogin: () => handleLogin("google"),
    handleGithubLogin: () => handleLogin("github")
  };
};
