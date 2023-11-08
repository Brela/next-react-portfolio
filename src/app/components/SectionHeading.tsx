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
        "lg:w-3/4 text-left block mx-auto text-sm tracking-widest font-bold text-slate-200/70 border-b border-dashed border-white/70 mb-7 lg:mb-12",
        className
      )}
    >
      {title}
    </div>
  );
};

export default SectionHeading;
