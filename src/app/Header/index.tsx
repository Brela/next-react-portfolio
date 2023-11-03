// components/Navigation.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [selected, setSelected] = useState("projects");
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <div className="w-full pt-5">
        <h1
          style={{ fontFamily: "Roboto Mono" }}
          className="text-3xl text-gray-300 mb-0"
        >
          Clayton Breland
        </h1>
        <h2
          style={{ fontFamily: "Roboto Mono" }}
          className="text-gray-400 text-sm "
        >
          Software Engineer
        </h2>
      </div>

      <nav className="absolute top-5 right-12 flex justify-between gap-7 mb-0 tracking-normal">
        <Link
          href="/"
          className={`hover:text-white transition-colors duration-300 ${
            isActive("/") ? "custom-underline text-white" : "text-gray-400"
          }`}
        >
          Projects
        </Link>
        <Link
          href="/about-me"
          className={`hover:text-white transition-colors duration-300 ${
            isActive("/about-me")
              ? "custom-underline text-white"
              : "text-gray-400"
          }`}
        >
          About Me
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
