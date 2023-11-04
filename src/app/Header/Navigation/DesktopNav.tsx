import React from "react";
import Link from "next/link";

interface Props {
  links: { slug: string; title: string }[];
  isActive: (path: string) => boolean;
}

const DesktopNav = ({ links, isActive }: Props) => {
  return (
    <nav className="absolute top-5 right-12 flex justify-between gap-7 mb-0 tracking-normal">
      {links.map((link) => (
        <Link
          href={link.slug}
          key={link.slug}
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
  );
};

export default DesktopNav;
