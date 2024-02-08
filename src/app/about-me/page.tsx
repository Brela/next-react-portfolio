"use client";
import Image from "next/image";
import React, { useState } from "react";
import statesVisited from "../../../public/statesVisited.png";
import workStation1 from "../../../public/workStation1.png";
import workStation2 from "../../../public/workStation2.jpg";
import meWithJammer from "../../../public/meWithJammer.jpeg";
import usafTechSchool from "../../../public/usafTechSchool.png";
import meteorSite from "../../../public/meteorSite.png";
import Tooltip from "../shared/Tooltip";
import AudioPlayer from "../components/AudioPlayer";
import SectionHeading from "../components/SectionHeading";
import useWindowSize from "@/lib/hooks/use-window-size";
import { twMerge } from "tailwind-merge";
import AboutMeImageWrapper from "./ImageWrapper";

export default function AboutMe() {
  const { isMobile, windowSize } = useWindowSize();
  const [loading, setLoading] = useState(true);

  const getImageWidth = () => {
    // Provide a default width if windowSize is undefined or width is not set
    const defaultWidth = 200;
    if (!windowSize || typeof windowSize.width !== "number") {
      return defaultWidth;
    }
    return windowSize.width < 768
      ? 300
      : windowSize.width < 1000
      ? 200
      : windowSize.width >= 1000
      ? 300
      : defaultWidth;
  };

  return (
    <div className="pt-5 px-10">
      <section className="pt-4 md:w-[50vw] xl:w-[45vw] max-w-[700px] text-start flex flex-col gap-16 mx-auto">
        <div className="flex flex-col gap-7 items-center">
          <p className="text-sm lg:text-base">
            {`     Hello, thanks for stopping by! I'm Clayton Breland, a developer with a passion for
            crafting visually appealing and highly functional web
            applications. I have a strong foundation in semantic HTML, CSS, JavaScript,
            React, Node.js, working with SQL and NoSQL databases, hosting, and
            web development best practices.`}
          </p>
          <section className="w-full flex gap-10">
            <AboutMeImageWrapper
              className="w-full lg:w-1/2"
              priority={true}
              src={workStation1}
              alt="my work station"
              caption="Work Station 1"
            />
            <AboutMeImageWrapper
              className="w-full lg:w-1/2"
              priority={true}
              src={workStation2}
              alt="my work station"
              caption="Work Station 2"
            />
          </section>
        </div>
        <div className="">
          <div className="flex flex-col items-center gap-10">
            <p className="text-sm lg:text-base">
              {`     I served in the Air Force as an Aircraft Systems Technician and learned how to thrive in fast-paced environments and enjoy
            consistently delivering high-quality work within deadlines.`}
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <AboutMeImageWrapper
                className="w-full lg:w-1/2"
                src={meWithJammer}
                alt="Clayton Breland in the Air Force with a bomb forklift called a jammer"
                caption={`Me in the USAF - on the right`}
              />

              <AboutMeImageWrapper
                className="w-full lg:w-1/2"
                src={usafTechSchool}
                alt="Clayton Breland in Air Force tech school"
                caption={`In front of an F-15 - center`}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center gap-10">
            <p className="text-sm lg:text-base">
              {`     Aside from coding, in my free time I enjoy going to tech-related meetups and travelling. So far,  I've been to
            UAE, Germany, and 32 states.`}
              {/*  <Tooltip
                content={
                  <div className="relative">
                    <Image
                      src={statesVisited}
                      alt="states visited"
                      width={400}
                      height={300}
                    />
                    <span className="absolute bottom-3 left-5">{`States I've been to are green :)`}</span>
                  </div>
                }
              >
                <span className="custom-underline">32 states</span>
              </Tooltip>{" "}
              <span>{`< Hover Me`}</span> */}
            </p>
            <div className="relative">
              <Image
                src={statesVisited}
                alt="states visited"
                width={400}
                height={300}
              />
              <span className="absolute bottom-3 left-5">{`States I've been to are green :)`}</span>
            </div>
            <div className="w-[70%]">
              <AboutMeImageWrapper
                className="w-[70%]"
                src={meteorSite}
                alt="meteor site"
                caption={`With the fam at Meteor Crater, NM`}
              />
            </div>
          </div>
        </div>
      </section>

      {/*  <section className="mt-20">
        <SectionHeading title="Breland Music Samples:" />
        <div className="w-full flex justify-center">
          <AudioPlayer
            name="One Productive Badger"
            mp3Url="/sounds/one/coolHoneyBadger.mp3"
            imageUrl="/sounds/one/cover.jpg"
          />
        </div>
      </section> */}
    </div>
  );
}
