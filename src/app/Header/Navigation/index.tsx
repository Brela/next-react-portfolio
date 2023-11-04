// components/Navigation.js
import { usePathname } from "next/navigation";
import useWindowSize from "@/lib/hooks/use-window-size";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const { windowSize } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(true); // default to desktop

  // This effect sets the correct navigation mode based on the window size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100);
    };

    // Set the initial value based on the current window size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { slug: "/", title: "Projects" },
    { slug: "/resources", title: "Resources" },
    { slug: "/about-me", title: "About Me" },
  ];

  // Return desktop or mobile navigation based on the isDesktop state
  return isDesktop ? (
    <DesktopNav isActive={isActive} links={links} />
  ) : (
    <MobileNav isActive={isActive} links={links} />
  );
};

export default Navigation;
