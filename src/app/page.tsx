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
      <div className=" w-full mb-10 lg:mb-14">
        <h1 className="text-4xl mb-1">Clayton Breland</h1>
        <h2 className="text-slate-200 text-lg ">Full Stack Software Engineer</h2>
      </div>
      <section className="w-full">
        <div className="lg:w-3/4 text-left block mx-auto text-sm tracking-widest font-bold text-slate-200/70 border-b border-dashed border-white/70 mb-7 lg:mb-16">
          Recent Projects:
        </div>
        <div className="flex flex-col items-center mx-auto gap-20 w-[80vw] lg:w-1/2 lg:min-w-1/2">
          <ProjectContainer
            title="Orderly"
            subTitle="Inventory Tracking & Automation"
            description="The Orderly web app automates inventory management by triggering orders when stock levels reach user-defined reorder points,
             factoring in additional triggers at percentages of the reorder points for delivery times. To demonstrate its capabilities,
              the app includes a simulation feature that artificially depletes stock to mimic real-world usage. 
            Orders can be automatically 'delivered' or manually checked off which replenishes stock levels. 
"
            liveSiteHref="https://orderlyapp.netlify.app/"
            githubRepoHref="https://github.com/DallasSoftwareDevelopersTeamC/orderly"
            screenshot={"/projects/orderly.png"}
            techIcons={orderlyTechIcons}
            completionDate="04-03-2023"
            timeSpan="2 months"
            features={[]}
            complexity={7}
            // underMaintenance={true}
          />
          <ProjectContainer
            title="Background Pixels"
            subTitle="Generate a Pixelated Background"
            description="Add any colors you like to the Color Array and create an intriguing piece of art with the click of a button; powered by vanilla JavaScript. Planning on implementing a feature to download as png."
            liveSiteHref="https://background-pixels.netlify.app/"
            githubRepoHref="https://github.com/Brela/background-pixels"
            screenshot={"/projects/background-pixels.png"}
            techIcons={bgPixelsTechIcons}
            completionDate="12-20-2022"
            timeSpan="10 days"
            features={["Making a fitting mobile friendly layout."]}
            complexity={2}
          />
        </div>
      </section>
    </main>
  );
}
