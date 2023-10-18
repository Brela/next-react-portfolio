import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Description from "./Description";
import Tooltip from "@/app/components/Tooltip";

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
    <section className="relative">
      <article
        className="rounded-md min-h-[500px] flex flex-col gap-3 items-center py-3 px-5 lg:px-12"
        style={{ boxShadow: "0px 0px 5px white" }}
      >
        {/* ----------------------- title & subtitle ---------------------------------------------------- */}
        <div>
          <h3 className=" text-xl font-semibold text-center">{title}</h3>
          <h4 className="text-accent-green">{subTitle}</h4>
        </div>

        {/* ----------------------- image ---------------------------------------------------- */}
        <figure className="py-2">
          <Image src={screenshot} alt={`${title} Screenshot`} width="400" height="300" className="" />
        </figure>

        {/* ----------------------- description ---------------------------------------------------- */}
        <div className="text-left">
          <Description description={description} />
        </div>

        {/* ----------------------- details ---------------------------------------------------- */}
        <div className="flex flex-grow justify-center w-full mt-3 lg:border text-slate-200 border-white/5 lg:bg-white/5 p-5 px-10">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="text-left text-sm w-1/3">Completed:</td>
                <td className="text-left  text-slate-100 ">{completionDate}</td>
              </tr>
              <tr>
                <td className="text-left text-sm w-1/3 pt-2">Time Span:</td>
                <td className="text-left text-slate-100 ">{timeSpan}</td>
              </tr>

              <tr>
                <td className="text-left text-sm w-1/3 pt-2">Complexity:</td>
                <td className="text-left">
                  <div className="flex">
                    {Array.from({ length: 10 }, (_, i) => {
                      const colorClasses = [
                        "bg-green-50",
                        "bg-green-100",
                        "bg-green-200",
                        "bg-green-300",
                        "bg-green-400",
                        "bg-green-500",
                        "bg-green-600",
                        "bg-green-700",
                        "bg-green-8300",
                        "bg-green-900",
                      ];
                      const color = i < complexity ? colorClasses[i] : "bg-gray-700";
                      return <div key={i} className={`w-4 h-4 border ${color}`}></div>;
                    })}
                  </div>
                </td>
              </tr>

              {/* <tr>
                <td className="text-left align-text-top w-1/2">Features:</td>
                <td className="text-left">
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>- {feature}</li>
                    ))}
                  </ul>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>

        {/* ----------------------- links ---------------------------------------------------- */}
        <div className="flex gap-8 w-full justify-center px-12 pt-7 rounded-sm">
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
          {/* <span>|</span> */}
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
        {/* ----------------------- tech stack ---------------------------------------------------- */}

        {/* <td className="text-left w-1/3 pt-2">Stack:</td> */}
        <div className="text-left text-slate-200 text-sm py-4">
          <div className="tech-icons flex flex-wrap gap-4">
            {techStack.map((stack, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <Tooltip content={stack.name}>
                  <Image src={stack.icon} alt={`${title} tech-icon`} width="30" height="30" />
                </Tooltip>
              </div>
            ))}
          </div>
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
