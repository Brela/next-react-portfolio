import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <section
      className="mt-[200px] flex flex-col gap-5 text-md items-center py-5 border-t border-gray-600 text-white lg:px-12 bg-slate-900/10 lg:bg-slate-600/20"
      //   style={{ boxShadow: "0px 0px 2px white" }}
    >
      <Socials />
      <div>
        <p>This site was designed and built by me.</p>
        <p className="text-sm mt-2">NextJS, React, Tailwind</p>
      </div>
      <p className="text-cyan-100">
        <a href="mailto:Claybreland1@gmail.com">Claybreland1@gmail.com</a>
      </p>
      <p className="">Thanks for visiting!</p>
    </section>
  );
};

export default Footer;
