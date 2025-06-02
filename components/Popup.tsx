"use client";
import { usePopup } from "@/context/popupContext";
import { useAuth } from "@/hooks/useAuth";
import { useAppSelector } from "@/hooks/redux";
import { CustomLoading } from "@/widgets/CustomLoading";

export default function Popup() {
  const { isPopupOpen } = usePopup();

  const { handleGoogleLogin, handleGithubLogin, handleLogout, isLoading } =
    useAuth();
  const { user } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <CustomLoading />;
  }

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
        {user ? (
          <div className="flex flex-col gap-3">
            <h1 className="text-xl !text-white font-semibold ">
              Hey, <span>{user.name}!</span>
            </h1>
            <p className="!text-sm">
              You’re all set! Dive in and continue your JavaScript journey
              anytime. 🙈
            </p>
            <button
              onClick={handleLogout}
              className="bg-primary !text-white rounded-xl py-2 px-8 font-medium  cursor-pointer"
            >
              Log out
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl !text-white font-semibold ">Welcome 🚀</h1>
            <p className="max-w-full !text-white !text-[15px] font-medium">
              Sign up to get the JavaScript Simplified book and level up your JS
              skills.
            </p>
            <button
              onClick={handleGoogleLogin}
              className="bg-primary !text-white rounded-xl py-2 px-8 font-medium  cursor-pointer"
            >
              Login with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="bg-primary !text-white rounded-xl py-2 px-8 font-medium  cursor-pointer"
            >
              Login with Github
            </button>
          </>
        )}
      </div>
    </div>
  );
}
