import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface Props {
  title: string;
  subTitle: string;
  description: string;
  liveSiteHref: string;
  githubRepoHref: string;
  screenshot: string;
  techIcons: string[];
  underMaintenance?: boolean;
}

export default function ProjectContainer({
  title,
  subTitle,
  description,
  liveSiteHref,
  githubRepoHref,
  screenshot,
  techIcons,
  underMaintenance,
}: Props) {
  return (
    <section className="relative">
      <article
        className="rounded-md min-h-[500px] flex flex-col gap-3 items-center py-3 px-5 lg:px-20"
        style={{ boxShadow: "1px 1px 10px white" }}
      >
        {/* ----------------------- title & subtitle ---------------------------------------------------- */}
        <div>
          <h3 className=" text-xl font-semibold text-center">{title}</h3>
          <h4 className="text-accent-green">{subTitle}</h4>
        </div>

        {/* ----------------------- image ---------------------------------------------------- */}
        <figure className="py-2">
          <Image src={screenshot} alt={`${title} Screenshot`} width="533" height="400" />
        </figure>

        {/* ----------------------- details ---------------------------------------------------- */}
        <p>{description}</p>

        {/* ----------------------- links ---------------------------------------------------- */}
        <div className="flex gap-4 w-full justify-center px-12 pt-7 rounded-sm">
          <a
            className="underline basis-1/3 rounded-sm text-sm font-semibold py-1 hover:bg-white/30 border border-white/30"
            // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
            href={liveSiteHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button disabled={underMaintenance} className="tracking-widest">
              Live Site
            </button>
          </a>
          <span>|</span>
          <a
            className="underline basis-1/3 rounded-sm text-sm font-bold  py-1 hover:bg-white/30 border border-white/30"
            // style={{ boxShadow: "1px 1px 10px rgba(220, 222, 224, .8)" }}
            href={githubRepoHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button disabled={underMaintenance} className="tracking-widest">
              GitHub Repo
            </button>
          </a>
        </div>

        {/* ----------------------- icons ---------------------------------------------------- */}
        <div className="tech-icons flex gap-7 my-5">
          {techIcons.map((icon, index) => (
            <div key={index}>
              <Image src={icon} alt={`${title} tech-icon`} width="30" height="30" />
            </div>
          ))}
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
