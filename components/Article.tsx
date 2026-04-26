import { ReactNode } from "react";

interface ArticleProps {
  title?: string;
  children: ReactNode;
}

export default function Article({ title, children }: ArticleProps) {
  return (
    <div className="flex flex-col gap-5 glass-card rounded-2xl p-5 md:p-6">
      {title && <h3 className="text-primary tracking-wide">{title}</h3>}
      {children}
    </div>
  );
}
