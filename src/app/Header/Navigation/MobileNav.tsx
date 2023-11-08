"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import useClickOutside from "@/lib/hooks/use-click-outside"; // Update the path as necessary

interface Props {
  links: { slug: string; title: string }[];
  isActive: (path: string) => boolean;
}

const MobileNav: React.FC<Props> = ({ links, isActive }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside<HTMLDivElement>(menuRef, () => isOpen && setIsOpen(false));

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="absolute top-7 left-5" ref={menuRef}>
      <div className="flex items-center justify-between">
        <button onClick={toggleMenu} className="flex flex-col space-y-1.5">
          <span className="block w-7 h-[3px] bg-gray-200"></span>
          <span className="block w-7 h-[3px] bg-gray-200"></span>
          <span className="block w-7 h-[3px] bg-gray-200"></span>
        </button>
      </div>

      <div
        style={{ maxHeight: isOpen ? "33vh" : "0" }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out bg-slate-600   mt-4  rounded-md"
      >
        <nav className="flex flex-col gap-4 py-5 px-8">
          {links.map((link) => (
            <Link
              href={link.slug}
              key={link.slug}
              onClick={() => setIsOpen(false)}
              className={`hover:text-white transition-colors duration-300 ${
                isActive(link.slug)
                  ? "custom-underline text-white"
                  : "text-gray-400"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default MobileNav;
