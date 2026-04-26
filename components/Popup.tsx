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
          ? "flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 bg-slate-900/45 backdrop-blur-sm px-4 z-20"
          : "hidden"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center text-center gap-4 w-[342px] glass-card border-primary/50 dark:border-primary/35 rounded-2xl p-5"
      >
        {user ? (
          <div className="flex flex-col gap-3">
            <h1 className="text-xl !text-slate-900 dark:!text-white font-semibold">
              Hey, <span>{user.name}!</span>
            </h1>
            <p className="!text-sm !text-slate-700 dark:!text-slate-200">
              You’re all set! Dive in and continue your JavaScript journey
              anytime. 🙈
            </p>
            <button
              onClick={handleLogout}
              className="bg-primary/90 hover:bg-primary !text-white rounded-xl py-2 px-8 font-medium cursor-pointer transition-colors"
            >
              Log out
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl !text-slate-900 dark:!text-white font-semibold">Welcome 🚀</h1>
            <p className="max-w-full !text-slate-700 dark:!text-slate-200 !text-[15px] font-medium">
              Sign up to get the JavaScript Simplified book and level up your JS
              skills.
            </p>
            <button
              onClick={handleGoogleLogin}
              className="bg-primary/90 hover:bg-primary !text-white rounded-xl py-2 px-8 font-medium cursor-pointer transition-colors"
            >
              Login with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="bg-primary/90 hover:bg-primary !text-white rounded-xl py-2 px-8 font-medium cursor-pointer transition-colors"
            >
              Login with Github
            </button>
          </>
        )}
      </div>
    </div>
  );
}
