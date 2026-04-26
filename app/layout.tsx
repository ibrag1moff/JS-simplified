import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ConditionalAppLayout from "@/components/ConditionalAppLayout";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "JavaScript Simplified",
  description: "The Practical Guide for Real-World Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.className} antialiased`}>
        <Providers>
          <ConditionalAppLayout>{children}</ConditionalAppLayout>
        </Providers>
      </body>
    </html>
  );
}
