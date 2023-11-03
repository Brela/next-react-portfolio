import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from "next/font/google";
import Footer from "./components/Footer";

const mainFont = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clayton Breland's Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body
        // className={`${mainFont.className}   bg-background-1 text-slate-50  items-center p-4`}
        className={`${mainFont.className} tracking-widest bg-zinc-900 text-slate-50  items-center p-4`}
      >
        {children}
        <div className=" w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
