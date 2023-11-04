import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from "next/font/google";
import Footer from "./Footer/Footer";
import Navigation from "./Header";

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
    <html lang="en" style={{ overflowX: "hidden", overflowY: "scroll" }}>
      {/* Make sure the body is flex and takes up at least the full height of the viewport */}
      <body
        className={`${mainFont.className} tracking-widest bg-zinc-900 text-slate-50 min-h-screen flex flex-col justify-between`}
      >
        <Navigation />
        <main className="">{children}</main>
        {/* Ensure footer is not wrapped in a div with w-full unless it's needed for other styling purposes */}
        <Footer />
      </body>
    </html>
  );
}
