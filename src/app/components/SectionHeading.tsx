import React from "react";

interface Props {
  title: string;
}

const SectionHeading = ({ title }: Props) => {
  return (
    <div className="lg:w-3/4 text-left block mx-auto text-sm tracking-widest font-bold text-slate-200/70 border-b border-dashed border-white/70 mb-7 lg:mb-10">
      {title}
    </div>
  );
};

export default SectionHeading;
