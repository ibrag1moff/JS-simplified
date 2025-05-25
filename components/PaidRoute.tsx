"use client";
import { useAppSelector } from "@/hooks/redux";
import { ReactNode } from "react";

interface PaidRouteProps {
  children: ReactNode;
}

export default function PaidRoute({ children }: PaidRouteProps) {
  const { isLoggedIn, user } = useAppSelector((state) => state.user);

  if (user?.role === "FREE") {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-center text-red-500">
          Access Denied: This content is for paid users only.
        </h1>
      </div>
    );
  } else {
    if (!isLoggedIn) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-xl font-bold text-center text-red-500">
            Please log in to access this content.
          </h1>
        </div>
      );
    }
  }

  return <>{children}</>;
}
