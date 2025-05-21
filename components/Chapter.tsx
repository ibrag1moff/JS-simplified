import { ReactNode } from "react";

interface ChapterProps {
  children: ReactNode;
}

export default function Chapter({ children }: ChapterProps) {
  return <div className="flex flex-col gap-24 px-5 pb-20">{children}</div>;
}
