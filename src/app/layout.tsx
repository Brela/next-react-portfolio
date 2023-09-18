import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from "next/font/google";

const mainFont = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clayton Breland Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} bg-background-1 text-slate-100 container flex flex-col items-center p-4`}
      >
        {children}
      </body>
    </html>
  );
}
