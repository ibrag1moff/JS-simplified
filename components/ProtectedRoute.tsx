"use client";
import { useAppSelector } from "@/hooks/redux";
import ProtectedRouteWidget from "@/widgets/ProtectedRouteWidget";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  if (!isLoggedIn) {
    return <ProtectedRouteWidget />;
  }

  return <>{children}</>;
}
