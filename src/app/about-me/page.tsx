"use client";
import Image from "next/image";
import React, { useState } from "react";
import statesVisited from "../../../public/statesVisited.png";
import commandCenter from "../../../public/commandCenter.png";
import meWithJammer from "../../../public/meWithJammer.jpeg";
import meteorSite from "../../../public/meteorSite.png";
import Tooltip from "../shared/Tooltip";
import AudioPlayer from "../components/AudioPlayer";
import SectionHeading from "../components/SectionHeading";
import useWindowSize from "@/lib/hooks/use-window-size";
import { twMerge } from "tailwind-merge";

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
    <div className="pt-10 pb-20 px-10">
      <section className="pt-4 md:w-[50vw] xl:w-[45vw] max-w-[700px] text-start flex flex-col gap-20 mx-auto">
        <div className="">
          <div className="md:float-right">
            <div className="relative mb-10 md:ml-10">
              <Image
                src={commandCenter}
                alt="my work station"
                width={getImageWidth()}
                height={isMobile ? 91 : 180}
                className="rounded-md"
              />
              <div
                style={{ width: getImageWidth() }}
                className="absolute bottom-0 rounded-b-md text-cyan-200 font-bold text-[15px] text-center bg-gray-700"
              >
                Current Command Center
              </div>
            </div>
          </div>

          <p>
            {`Hello! I'm Clayton Breland, a Software Engineer with a passion for
            crafting visually appealing and highly functional web
            applications. I have a strong foundation in semantic HTML, CSS, JavaScript,
            React, Node.js, working with SQL and NoSQL databases, hosting, and
            web development best practices.`}
          </p>
        </div>
        <div className="">
          <div className="md:float-right">
            <div className="relative mb-10 md:ml-10 ">
              <Image
                src={meWithJammer}
                alt="Clayton Breland in the Air Force with a bomb forklift called a jammer"
                width={getImageWidth()}
                height={isMobile ? 91 : 180}
                className="rounded-md"
              />
              <div
                style={{ width: getImageWidth() }}
                className="absolute bottom-0 rounded-b-md text-cyan-200 font-bold text-[15px] text-center bg-gray-700"
              >
                {` In the USAF - I'm on the right`}
              </div>
            </div>
          </div>

          <p>
            {`  Coming from a background as an Aircraft Technician in the Air Force,
            I am well-equipped to excel in fast-paced environments and
            consistently deliver high-quality work within deadlines.`}
          </p>
        </div>

        <div className="">
          <div className="md:float-right">
            <div className="relative mb-10 md:ml-10">
              <Image
                src={meteorSite}
                alt="meteor site"
                width={getImageWidth()}
                height={isMobile ? 91 : 180}
                className="rounded-md"
              />
              <div
                style={{ width: getImageWidth() }}
                className="absolute bottom-0 rounded-b-md text-cyan-200 font-bold text-[15px] text-center bg-gray-700"
              >
                {`With the Fam at Meteor Crater`}
              </div>
            </div>
          </div>

          <p>
            {`  Aside from coding, I enjoy travelling, playing soccer, and making
            music. My wife and I have perfected the art of travelling with 3
            kids throughout the states. I've been to a few countries, namely the
            UAE, Germany, and the Bahamas, as well as`}
            <Tooltip
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
            </Tooltip>
            .
          </p>
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
