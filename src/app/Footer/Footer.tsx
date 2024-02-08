import React from "react";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Divider from "./Divider";

const Footer = () => {
  return (
    <section
      className=" mt-[200px]  flex flex-col gap-5 text-sm items-center py-5 border-t border-gray-600 text-white lg:px-12 bg-zinc-800"
      //   style={{ boxShadow: "0px 0px 2px white" }}
    >
      <div className="-sm">
        <p>This site was built from scratch using</p>
        <p className="text-md">
          NEXT.js <Divider /> ReactJS <Divider /> Tailwind
        </p>
      </div>
      <div className="border border-gray-600 w-[50%] "></div>
      <section className="flex gap-5 items-center">
        <p>Contact Me:</p>
        <a
          href="https://www.linkedin.com/in/clayton-breland"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-cyan-300 w-8 h-8 text-1xl hover:text-accent-2 hover:text-3xl transition-transform duration-200 ease-in-out hover:scale-125"
          />
        </a>
        {/* <Divider /> */}
        <p className="text-cyan-300 font-semibold  hover:text-accent-2 hover:text-md transition-transform duration-200 ease-in-out hover:scale-105">
          <a href="mailto:Claybreland1@gmail.com">Claybreland1@gmail.com</a>
        </p>
      </section>
      <div className="border border-gray-600 w-[50%] "></div>
      <p className="">Thanks for visiting!</p>
    </section>
  );
};

export default Footer;
