import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from "next/font/google";
import Footer from "./components/Footer";

const mainFont = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clayton Breland's Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="relative">
      <body className={`${mainFont.className}   bg-background-1 text-slate-50  items-center p-4`}>
        {children}
      </body>
      <div className=" w-full">
        <Footer />
      </div>
    </html>
  );
}
