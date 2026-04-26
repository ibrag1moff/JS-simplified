"use client";

import { ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { useIsAdminPage } from "@/hooks/useIsAdminPage";

export default function ConditionalAppLayout({ children }: { children: ReactNode }) {
  const isAdminPage = useIsAdminPage();

  useEffect(() => {
    if (isAdminPage) {
      document.body.classList.add("studio-page");
      return () => {
        document.body.classList.remove("studio-page");
      };
    }

    document.body.classList.remove("studio-page");
  }, [isAdminPage]);

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen md:overflow-hidden p-0 md:p-4 gap-0 md:gap-4">
      <Sidebar />
      <main className="w-full min-w-0 md:h-[calc(100vh-32px)] overflow-x-hidden overflow-y-visible md:overflow-y-auto">
        <div className="w-full flex justify-center mx-auto relative">
          <div className="w-full md:max-w-6xl mt-20 md:mt-0 p-5 md:p-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
