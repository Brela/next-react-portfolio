import React from "react";
import ProjectContainer from "./components/ProjectContainer";
import SectionHeading from "./components/SectionHeading";
import AudioPlayer from "./components/AudioPlayer";
import SecondaryProjectContainer from "./components/SecondaryProjectContainer";
import { Roboto_Mono } from "next/font/google";
// import OrderlyScreenshot from "../../public/projectOrderly.png";
// import NodeIcon from "../../public/nodejs.png";
// import PostgresIcon from "../../public/postgre.png";

// Sample tech icons for Orderly
const orderlyTechStack = [
  {
    name: "ReactJS - It's Awesome",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "TailwindCSS - Styling made Easy",
    icon: "/tailwind.png",
  },
  {
    name: "NodeJS - Saved the world from Java",
    icon: "/nodejs.png",
  },
  {
    name: "PostgreSQL - The Elephant Never Forgets",
    icon: "/postgre.png",
  },
];

// Sample tech icons for Background Pixels
const bgPixelsTechStack = [
  {
    name: "HTML - Building Blocks of the Web",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "JavaScript - The Internet Runs on JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
];

export default function Home() {
  return (
    <main className="pt-4 pb-10 px-5 flex flex-col items-center w-full">
      <div className=" w-full mb-10 lg:mb-2">
        <h1 style={{ fontFamily: "Roboto Mono" }} className="text-4xl mb-1">
          Clayton Breland
        </h1>
        <h2
          style={{ fontFamily: "Roboto Mono" }}
          className="text-slate-200 text-lg "
        >
          Full Stack Software Engineer
        </h2>
      </div>
      <section className="w-full">
        <SectionHeading title=" Recent Projects:" />
        <div className="flex flex-col items-center mx-auto gap-16 w-full">
          <ProjectContainer
            title="Orderly"
            subTitle="Inventory Tracking & Automation"
            description="Orderly automates inventory management by triggering orders when stock levels reach user-defined reorder points,
             factoring in additional triggers at percentages of the reorder points for delivery times. To demonstrate its capabilities,
              the app includes a simulation feature that artificially depletes stock to mimic real-world usage.
            Orders can be automatically 'delivered' or manually checked off which replenishes stock levels.
"
            liveSiteHref="https://orderlyapp.netlify.app/"
            githubRepoHref="https://github.com/DallasSoftwareDevelopersTeamC/orderly"
            screenshot={"/projects/orderly.png"}
            techStack={orderlyTechStack}
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
            techStack={bgPixelsTechStack}
            completionDate="12-20-2022"
            timeSpan="10 days"
            features={["Making a fitting mobile friendly layout."]}
            complexity={2}
          />
        </div>
      </section>
      <section className="w-full mt-16">
        <SectionHeading title="Other Projects:" />
        <div className=" max-w-[1200px] grid grid-cols-1  md:grid-cols-2 gap-7 mx-auto">
          <SecondaryProjectContainer
            className="col-span-1"
            title="Soccer Stars"
            subTitle="Player Stats for Top 3 Teams"
            // description="View the real-time top scorers in soccer ( AKA football ) from the 3 most popular leagues in the world. Sometimes the simplest sites are the best ones."
            liveSiteHref="https://soccer-worldwide.netlify.app/"
            githubRepoHref="https://github.com/Brela/football-soccer-worldwide"
            // screenshot={"/projects/orderly.png"}
            // techStack={orderlyTechStack}
            completionDate="04-03-2023"
            timeSpan="2 months"
            features={[]}
            complexity={7}
            // underMaintenance={true}
          />
          <SecondaryProjectContainer
            className="col-span-1"
            title="Background Pixels"
            subTitle="Generate a Pixelated Background"
            // description="Create an intriguing piece of art with the click of a button; powered by vanilla JavaScript."
            liveSiteHref="https://background-pixels.netlify.app/"
            githubRepoHref="https://github.com/Brela/background-pixels"
            screenshot={"/projects/background-pixels.png"}
            techStack={bgPixelsTechStack}
            completionDate="12-20-2022"
            timeSpan="10 days"
            features={["Making a fitting mobile friendly layout."]}
            complexity={2}
          />
        </div>
      </section>
      <section className="w-full mt-16">
        <SectionHeading title="Breland Music Samples:" />
        <div className="w-full flex justify-center">
          <AudioPlayer
            name="One Productive Badger"
            mp3Url="/sounds/one/coolHoneyBadger.mp3"
            imageUrl="/sounds/one/cover.jpg"
          />
        </div>
      </section>
    </main>
  );
}
