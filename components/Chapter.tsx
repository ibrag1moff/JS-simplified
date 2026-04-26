import { ReactNode } from "react";

interface ChapterProps {
  children: ReactNode;
}

export default function Chapter({ children }: ChapterProps) {
  return <div className="flex flex-col gap-16 md:gap-20 px-2 md:px-4 pb-12 md:pb-16">{children}</div>;
}
