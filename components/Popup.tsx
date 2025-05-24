"use client";
import { usePopup } from "@/context/popupContext";
import { useAuth } from "@/hooks/useAuth";
import { notifyError, notifySuccess } from "@/utils/notifications";

export default function Popup() {
  const { isPopupOpen } = usePopup();

  const { handleGoogleLogin } = useAuth();

  const handleLogin = async () => {
    try {
      await handleGoogleLogin();
      notifySuccess("You have been logged in!");
    } catch (e) {
      notifyError();
      console.error(e);
    }
  };

  return (
    <div
      className={
        isPopupOpen
          ? "flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 bg-body/50 px-4 z-20"
          : "hidden"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center text-center gap-4 w-[342px] bg-body border border-primary shadow-custom shadow-primary/50 rounded-xl p-4"
      >
        <h1 className="text-2xl font-semibold ">Welcome!</h1>
        <p className="max-w-full !text-[15px] font-medium">
          <span className="italic !text-white">Fun fact: </span> you can login
          more than once, it is completely
          <span className="text-primary ml-1">idempotent</span> 😄
        </p>
        <button
          onClick={handleGoogleLogin}
          className="bg-primary rounded-xl py-2 px-8 font-medium  cursor-pointer"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
