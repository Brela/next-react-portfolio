import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <section
      className="flex flex-col gap-1 text-md items-center py-5 border-t border-gray-600 text-white lg:px-12 bg-slate-900/10 lg:bg-slate-600/20"
      //   style={{ boxShadow: "0px 0px 2px white" }}
    >
      <Socials />
      <p>This site was designed and built by me.</p>
      <p>NextJS, React, Tailwind</p>
    </section>
  );
};

export default Footer;
