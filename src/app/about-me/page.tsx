import Image from "next/image";
import React from "react";
import statesVisited from "../../../public/statesVisited.png";
import commandCenter from "../../../public/commandCenter.png";
import meUSAF from "../../../public/meUSAF.png";
import meNow from "../../../public/meNow.png";
import meteorSite from "../../../public/meteorSite.png";
import Tooltip from "../shared/Tooltip";
import AudioPlayer from "../components/AudioPlayer";
import SectionHeading from "../components/SectionHeading";

export default function AboutMe() {
  return (
    <div className="pt-10 pb-20 px-10">
      <section className="pt-4 md:w-[50vw] text-start flex flex-col gap-20 mx-auto">
        <div className="flex gap-5">
          {/* <div className="relative "> */}
          <Image
            src={commandCenter}
            alt="my work station"
            width={300}
            className="rounded-md"
          />
          {/* <div className="absolute bottom-0 text-accent-green font-bold text-[12px] text-center bg-gray-500 w-full">
              My Command Center
            </div>
          </div> */}

          <p>
            {` Hello! I'm Clayton Breland, a React Web Developer with a passion for
        crafting visually appealing and highly functional websites and web apps. I have a
        strong foundation in semantic HTML, CSS, JavaScript, React, Node.js,
        working with SQL and NoSQL databases, hosting, and web development best
        practices.`}
          </p>
        </div>
        <div className="flex gap-5 text-right">
          <p>
            {`Coming from a background as an Aircraft Technician in the Air Force, I
        am well-equipped to excel in fast-paced environments and consistently
        deliver high-quality work within deadlines.`}
          </p>
          <Image src={meUSAF} alt="states visited" width={300} />
        </div>
        <div className="flex gap-5">
          <Image
            src={meteorSite}
            alt="states visited"
            height={200}
            width={500}
          />
          <p>
            {` Aside from coding, I enjoy travelling, playing soccer, and making music.
        My wife and I have perfected the art of travelling with 3 kids
        throughout the states. I've been to a few countries, namely the UAE,
        Germany, and the Bahamas, as well as `}
            <Tooltip
              content={
                <div className="relative">
                  <Image src={statesVisited} alt="states visited" width={400} />{" "}
                  <span className="absolute bottom-3 left-5 ">{`States I've been to are green :)`}</span>
                </div>
              }
            >
              <span className="custom-underline">32 states</span>
            </Tooltip>
            .
          </p>
        </div>
      </section>
      <section className="mt-10">
        <SectionHeading title="Breland Music Samples:" />
        <div className="w-full flex justify-center">
          <AudioPlayer
            name="One Productive Badger"
            mp3Url="/sounds/one/coolHoneyBadger.mp3"
            imageUrl="/sounds/one/cover.jpg"
          />
        </div>
      </section>
    </div>
  );
}
