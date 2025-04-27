import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "next-themes";

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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={`${rubik.className} antialiased`}>
          <div className="flex">
            <Sidebar />
            <div className="w-full overflow-x-auto">
              <div className="sm:h-screen overflow-auto">
                <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh-50px)] overflow-y-auto relative">
                  <div className="w-full md:max-w-6xl mt-20">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
