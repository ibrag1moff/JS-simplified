import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRouteWidget() {
  const { handleGithubLogin, handleGoogleLogin } = useAuth();

  return (
    <div className="flex flex-col gap-8 justify-center text-center px-8">
      <h1 className="text-4xl font-semibold text-primary tracking-[2px]">
        Access Restricted
      </h1>
      <p className="!text-[16px] font-[400]">
        To continue, you need to log in to your account. Logging in will allow
        you to access additional content, save your progress, and get
        personalized recommendations. If you don’t have an account yet, signing
        up is quick and easy. Please log in or register now to unlock all the
        features and continue your learning journey.
      </p>
      <div className="flex flex-col justify-center items-center gap-4 w-full h-[150px] border rounded-2xl border-primary">
        <button
          onClick={handleGoogleLogin}
          className="bg-primary !text-white w-max rounded-xl py-2 px-8 font-medium text-sm  cursor-pointer"
        >
          Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="bg-primary !text-white w-max rounded-xl py-2 px-8 font-medium text-sm cursor-pointer"
        >
          Login with Github
        </button>
      </div>
    </div>
  );
}
