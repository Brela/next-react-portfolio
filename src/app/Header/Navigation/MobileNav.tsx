"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import useClickOutside from "@/lib/hooks/use-click-outside"; // Update the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    <section className="absolute top-7 left-5 z-30" ref={menuRef}>
      <button>
        <FontAwesomeIcon
          icon={faBars}
          className="text-gray-300 w-7 h-7 absolute left-2 top-1"
          onClick={toggleMenu}
        />
      </button>

      <div
        style={{ maxHeight: isOpen ? "33vh" : "0" }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out bg-zinc-700   mt-4  rounded-md"
      >
        <nav className="flex flex-col gap-4 py-5 px-8">
          {links.map((link) => (
            <Link
              href={link.slug}
              key={link.slug}
              onClick={() => setIsOpen(false)}
              className={`hover:text-white transition-colors duration-300 ${
                isActive(link.slug)
                  ? "custom-underline text-white font-bold"
                  : "text-gray-300"
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
