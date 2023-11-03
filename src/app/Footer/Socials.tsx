import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <section className="flex justify-center items-center gap-8 mx-auto">
      <div className="w-full">
        <a
          href="https://www.linkedin.com/in/clayton-breland"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white w-8 h-8 text-1xl hover:text-accent-2 hover:text-3xl transition-transform duration-200 ease-in-out hover:scale-125"
          />
        </a>
      </div>
      <div className="w-full">
        <a href="https://github.com/Brela" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white w-8 h-8 text-1xl hover:text-accent-2 hover:text-3xl transition-transform duration-200 ease-in-out hover:scale-125"
          />
        </a>
      </div>
      {/*   <div className="w-full">
        <a
          href="https://twitter.com/ClayBreland"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-white w-8 h-8 text-1xl hover:text-accent-2 hover:text-3xl transition-transform duration-200 ease-in-out hover:scale-125"
          />
        </a>
      </div> */}
    </section>
  );
};

export default Socials;
