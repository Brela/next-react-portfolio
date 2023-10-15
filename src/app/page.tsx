import React from "react";
import ProjectContainer from "./containers/ProjectContainer";
// import OrderlyScreenshot from "../../public/projectOrderly.png";
// import NodeIcon from "../../public/nodejs.png";
// import PostgresIcon from "../../public/postgre.png";

// Sample tech icons for Orderly
const orderlyTechIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "/nodejs.png", // Assuming nodejs.png is in public/img/
  "/postgre.png",
];

// Sample tech icons for Background Pixels
const bgPixelsTechIcons = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
];

export default function Home() {
  return (
    <main className="pt-4 pb-10 px-5 flex flex-col items-center w-full">
      <div className=" w-full mb-16">
        <h1 className="text-4xl mb-1">Clayton Breland</h1>
        <h2 className="text-slate-200 text-lg ">Full Stack Software Engineer</h2>
      </div>
      <section className="w-full">
        {/*        <div className="w-full text-left text-xl text-slate-200 border-b border-white/0 mb-12 mt-16 px-20">
            Projects:
          </div> */}
        <div className="flex flex-col items-center mx-auto gap-20 w-[80vw] lg:w-[70vw]">
          <ProjectContainer
            title="Orderly"
            subTitle="Inventory Tracking & Automation"
            description="Automatically creates orders at custom reorder points."
            liveSiteHref="https://orderlyapp.netlify.app/"
            githubRepoHref="https://github.com/DallasSoftwareDevelopersTeamC/orderly"
            screenshot={"/projects/orderly.png"}
            techIcons={orderlyTechIcons}
            // underMaintenance={true}
          />
          <ProjectContainer
            title="Background Pixels"
            subTitle="Generate a Pixelated Background"
            description="Automatically creates orders at custom reorder points."
            liveSiteHref="https://background-pixels.netlify.app/"
            githubRepoHref="https://github.com/Brela/background-pixels"
            screenshot={"/projects/background-pixels.png"} // You may want to change this to the actual screenshot for Background Pixels
            techIcons={bgPixelsTechIcons}
          />
        </div>
      </section>
    </main>
  );
}
