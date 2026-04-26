"use client";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs";
import { useEffect } from "react";

const CodeDisplay = ({ code }: { code: string }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  return (
    <div className="px-3 py-1 glass-card rounded-2xl my-8 border-primary/35 dark:border-primary/30">
      <pre className="text-white overflow-x-auto !bg-transparent">
        <code className="language-js">{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
