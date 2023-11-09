"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

const AboutMeImageWrapper = ({ src, width, alt, height, caption }: Props) => {
  return (
    <>
      <div className="md:float-right">
        <div className="relative mb-10 md:ml-10">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-md"
            placeholder="blur"
          />
          <div
            style={{ width: width }}
            className="absolute bottom-0 rounded-b-md text-cyan-200 font-bold text-[15px] text-center bg-gray-700"
          >
            {caption}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeImageWrapper;
