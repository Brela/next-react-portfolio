// this is the PROJECTS page

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

export default function Projects() {
  return (
    <main className="pt-4 px-2 lg:px-5 flex flex-col items-center w-full gap-10 lg:gap-16">
      <section className="w-full">
        <SectionHeading title="Featured:" />
        <div className="flex flex-col items-center mx-auto gap-10 lg:gap-16 w-full">
          <ProjectContainer
            title="Dashboard Editor"
            subTitle="Customize Your App's Dashboard"
            description="Add widgets, move them around to your liking, then save the dashboard. Also,  check out the seamless guest login - with one click a guest account is created and the user is logged in so they can try out the editor and save dashboards."
            liveSiteHref="https://dasheditor.netlify.app/"
            githubRepoHref="https://github.com/Brela/dashboard-editor"
            screenshot={"/projects/dashboard-editor.png"}
            className=""
          />
        </div>
      </section>

      <section className="w-full">
        <SectionHeading title="In Progress:" />
        <div className="flex flex-col items-center mx-auto gap-10 lg:gap-16 w-full">
          <ProjectContainer
            title="Limitless Developers Dallas"
            subTitle="A Hub for Local Meetups"
            description="This website will list all of the tech meetups in the local Dallas area. The problem I've had with Meetup.com is that many meetups are hard to find unless you search for specific keywords like AWS, Docker, UX Design, etc. Utilizing the meetup.com API, this searches for events with the most common tech keywords to get all of these meetups in one place and will list things like the date, the amount of people going, and a link to the event on Meetup.com. "
            // liveSiteHref="https://inv-copilot.netlify.app/"
            // githubRepoHref="https://github.com/Brela/inventory-copilot?tab=readme-ov-file"
            screenshot={"/projects/lddallas.png"}
            className=""
            inProgress={true}
          />
        </div>
      </section>

      <section className="w-full mx-auto">
        <SectionHeading title="Other Projects:" className="" />
        <div className=" max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-7 mx-auto">
          <SecondaryProjectContainer
            className="col-span-1"
            title="Background Pixels"
            subTitle="Generate a Pixelated Background"
            liveSiteHref="https://background-pixels.netlify.app/"
            githubRepoHref="https://github.com/Brela/background-pixels"
            screenshot={"/projects/background-pixels.png"}
          />
          <SecondaryProjectContainer
            className="col-span-1"
            title="Soccer Worldwide"
            subTitle="Player Stats for Top 3 Leagues"
            liveSiteHref="https://soccer-worldwide.netlify.app/"
            githubRepoHref="https://github.com/Brela/football-soccer-worldwide"
            screenshot={"/projects/soccer-worldwide.png"}
          />
        </div>
        <div className=" max-w-[600px] mt-12 grid grid-cols-1 gap-10 lg:gap-7 mx-auto">
          <SecondaryProjectContainer
            className=""
            title="Coding Challenges"
            subTitle="Tracking My Progress"
            liveSiteHref="https://brela-codewars.netlify.app/"
            githubRepoHref="https://github.com/Brela/codewars-showcase"
            screenshot={"/projects/javascript-portfolio.png"}
            description="This site was made with plain JS, CSS, HTML during my first year of coding. The HTML file is embarrisingly large, but the UI has potential. So, I might convert this to React and use it as the foundation of a blog page on a site that I am building currently"
          />
        </div>
      </section>
      <section className="w-full mx-auto flex flex-col items-center">
        <SectionHeading title="Past Projects:" />
        <div className=" max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10  lg:gap-[100px] mx-auto">
          <ProjectContainer
            title="Inventory Copilot"
            subTitle="Inventory Tracking & Automation"
            description="This app automates inventory management by triggering orders when stock levels reach user-defined reorder points. To demonstrate its capabilities,
              the app includes a feature that depletes stock to mimic real-world usage.
            Orders can be automatically 'delivered' or manually checked off which replenishes stock levels.
"
            liveSiteHref="https://inv-copilot.netlify.app/"
            githubRepoHref="https://github.com/Brela/inventory-copilot?tab=readme-ov-file"
            screenshot={"/projects/inv-copilot.png"}
            className="max-w-[500px] col-span-1"
            currentlyDown={true}
          />
          <ProjectContainer
            title="Mission Study Cards"
            subTitle="Flashcards with ChatGPT Assistant"
            description="Create decks & add flashcards to decks. 
            Send your ChatGPT prompt to the front of the flashcard and its response to the back. 
            This is a work in progress."
            liveSiteHref="https://missiongpt.netlify.app/"
            githubRepoHref="https://github.com/Brela/mission-cards"
            screenshot={"/projects/mission-cards.png"}
            className="max-w-[500px] col-span-1"
            currentlyDown={true}
          />
        </div>
      </section>
    </main>
  );
}
