import { ReactNode } from "react";

interface ArticleProps {
  title?: string;
  children: ReactNode;
}

export default function Article({ title, children }: ArticleProps) {
  return (
    <div className="flex flex-col gap-5">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
