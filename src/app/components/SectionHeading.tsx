import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className }: Props) => {
  return (
    <div
      className={twMerge(
        "w-[90%] lg:w-3/4 text-left block mx-auto text-sm tracking-widest font-bold text-slate-50/60 border-b border-dashed border-white/70 mb-7 lg:mb-12",
        className
      )}
    >
      {title}
    </div>
  );
};

export default SectionHeading;
