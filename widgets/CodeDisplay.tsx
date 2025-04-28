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
    <div className="px-2 bg-primary/10 border border-primary shadow-custom shadow-primary rounded-lg my-8">
      <pre className="text-white overflow-x-auto !bg-transparent">
        <code className="language-js">{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
