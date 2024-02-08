import React from "react";

import type { StaticImageData } from "next/image";
import Description from "./Description";
import Tooltip from "@/app/shared/Tooltip";
import ImageWrapper from "../ImageWrapper";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  className?: string;
  liveSiteHref?: string;
  githubRepoHref?: string;
  screenshot: string;
  techStack?: { name: string; icon: string | StaticImageData }[];
  currentlyDown?: boolean;
  inProgress?: boolean;
  imageSizeFactor?: number;
}

export default function ProjectContainer({
  title,
  subTitle,
  description,
  className,
  liveSiteHref,
  githubRepoHref,
  screenshot,
  currentlyDown,
  inProgress,

  imageSizeFactor,
}: Props) {
  return (
    <section
      className={twMerge(
        "p-4 lg:p-0 max-w-[600px] h-full rounded-md relative",
        className,
      )}
    >
      <article
        className=" rounded-md flex flex-col h-full gap-3 items-center py-5 lg:px-12  bg-cyan-600/10"
        style={{ boxShadow: "0px 0px 4px white" }}
      >
        {/* ----------------------- title & subtitle ---------------------------------------------------- */}
        <div className="px-5">
          <h3 className=" text-xl font-semibold text-center pb-1">{title}</h3>
          <h4 className="text-accent-green px-5 text-sm">{subTitle}</h4>
        </div>

        {/* ----------------------- image ---------------------------------------------------- */}
        <section className="relative">
          <ImageWrapper
            screenshot={screenshot}
            title={title}
            sizeFactor={imageSizeFactor}
          />
          {/* Under maintenance overlay */}
          {(currentlyDown || inProgress) && (
            <div
              className={twMerge(
                "absolute inset-0 flex items-center justify-center rounded-sm bg-gray-900 bg-opacity-50 z-10",
              )}
            >
              <p
                className={twMerge(
                  "text-white font-semibold w-full",
                  inProgress ? " hazard-background" : "",
                )}
              >
                {currentlyDown ? "Currently Down" : "Coming Soon"}
              </p>
            </div>
          )}
        </section>

        {/* ----------------------- description ---------------------------------------------------- */}
        <div className="text-left text-sm lg:text-md tracking-wide px-5 lg:px-0">
          <Description description={description} />
        </div>

        {/* ----------------------- links ---------------------------------------------------- */}
        <div className="flex gap-8 justify-center px-4 lg:px-12 pt-4 pb-3 rounded-sm">
          {!currentlyDown && liveSiteHref && (
            <a
              className="underline whitespace-nowrap xl:basis-1/3 rounded-sm text-sm font-medium py-1  hover:text-cyan-200 hover:border-accent-green"
              // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
              href={liveSiteHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                disabled={currentlyDown}
                className="tracking-wide custom-underline"
              >
                Live Site
              </button>
            </a>
          )}
          {githubRepoHref && (
            <a
              className="underline whitespace-nowrap lg:basis-1/3 rounded-sm text-sm font-medium  py-1  hover:text-cyan-200 hover:border-accent-green"
              // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
              href={githubRepoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                // disabled={currentlyDown}
                className="tracking-wide custom-underline"
              >
                GitHub Repo
              </button>
            </a>
          )}
        </div>
      </article>
    </section>
  );
}
