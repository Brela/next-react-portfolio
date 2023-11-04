// components/Navigation.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

const Header = () => {
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

      <Navigation />
    </>
  );
};

export default Header;
