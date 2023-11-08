import React from "react";

import type { StaticImageData } from "next/image";
import Description from "./Description";
import Tooltip from "@/app/shared/Tooltip";
import ImageWrapper from "../ImageWrapper";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  liveSiteHref: string;
  githubRepoHref: string;
  screenshot: string;
  techStack: { name: string; icon: string | StaticImageData }[];
  underMaintenance?: boolean;
  completionDate: string;
  timeSpan: string;
  features?: string[];
  complexity: number;
}

export default function ProjectContainer({
  title,
  subTitle,
  description,
  liveSiteHref,
  githubRepoHref,
  screenshot,
  techStack,
  underMaintenance,
  completionDate,
  timeSpan,
  features,
  complexity,
}: Props) {
 
  return (
    <section className="p-4 lg:p-0 md:w-1/2 max-w-[600px]">
      <article
        className=" rounded-md flex flex-col gap-3 items-center py-5 lg:px-12  bg-cyan-600/10"
        style={{ boxShadow: "0px 0px 4px white" }}
      >
        {/* ----------------------- title & subtitle ---------------------------------------------------- */}
        <div className="px-5">
          <h3 className=" text-xl font-semibold text-center pb-1">{title}</h3>
          <h4 className="text-accent-green px-5 text-sm">{subTitle}</h4>
        </div>

        {/* ----------------------- image ---------------------------------------------------- */}
        <ImageWrapper screenshot={screenshot} title={title} />
        {/* ----------------------- description ---------------------------------------------------- */}
        <div className="text-left text-xs lg:text-sm tracking-wide px-5 lg:px-0">
          <Description description={description} />
        </div>

        {/* ----------------------- links ---------------------------------------------------- */}
        <div className="flex gap-8 justify-center px-4 lg:px-12 pt-4 pb-3 rounded-sm">
          <a
            className="underline whitespace-nowrap xl:basis-1/3 rounded-sm text-sm font-medium py-1  hover:text-cyan-200 hover:border-accent-green"
            // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
            href={liveSiteHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              disabled={underMaintenance}
              className="tracking-wide custom-underline"
            >
              Live Site
            </button>
          </a>
          {/* <span>|</span> */}
          <a
            className="underline whitespace-nowrap lg:basis-1/3 rounded-sm text-sm font-medium  py-1  hover:text-cyan-200 hover:border-accent-green"
            // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
            href={githubRepoHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              disabled={underMaintenance}
              className="tracking-wide custom-underline"
            >
              GitHub Repo
            </button>
          </a>
        </div>
      </article>
      {/* Under maintenance overlay */}
      {underMaintenance && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-10">
          <p className="text-white">Currently down for maintenance</p>
        </div>
      )}
    </section>
  );
}
