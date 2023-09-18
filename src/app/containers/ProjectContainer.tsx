import React from "react";
import Image from "next/image";
import orderlyScreenshot from "../../../public/Screenshot 2023-09-16 at 3.24.16 PM.png";
// import css3Icon from "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg";

export default function ProjectContainer() {
  return (
    <section>
      <article
        className="rounded-md h-[500px] flex flex-col items-center p-4"
        style={{
          boxShadow: "1px 2px 10px white",
        }}
      >
        <h3 className="pb-3 title text-2xl font-semibold text-center">
          Orderly
        </h3>
        <figure>
          <Image
            src={orderlyScreenshot}
            alt="Orderly Screenshot"
            width="400"
            height="300"
          />
        </figure>
        <h4 className="text-accent-green">Inventory Tracking & Automation</h4>
        <p>Automatically creates orders at custom reorder points.</p>
        <div className="visit-buttons">
          <a
            href="https://orderlyapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="link-to-project1">Live Site</button>
          </a>
          <a
            href="https://github.com/DallasSoftwareDevelopersTeamC/orderly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="link-to-project1">GitHub Repo</button>
          </a>
        </div>
        <div className="tech-icons">
          <div>
            <Image
              src={"https://skillicons.dev/icons?i=react"}
              alt="Orderly Screenshot"
              width="20"
              height="20"
            />
          </div>
          {/*  <div>
            <Image src={orderlyScreenshot} alt="Orderly Screenshot" />
            <img src={css3Icon} alt="css3" />
          </div>
          <div>
            <Image src={orderlyScreenshot} alt="Orderly Screenshot" />
            <img src={nodejsIcon} alt="nodejs" />
          </div>
          <div>
            <Image src={orderlyScreenshot} alt="Orderly Screenshot" />
            <img src={postgreIcon} alt="postgre" />
          </div> */}
        </div>

        {/* Uncomment this if you want the overlay to show */}
        {/* 
      <div className="overlay">
        <p>Currently down for maintenance</p>
      </div> 
      */}
      </article>
    </section>
  );
}
