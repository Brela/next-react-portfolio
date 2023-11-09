"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import placeholder from "./placeholder.jpg"; // Ensure this is a base64 string if it's meant to be used as a placeholder

interface Props {
  priority?: boolean;
  src: StaticImageData;
  alt: string;
  caption: string;
  className?: string;
}

const AboutMeImageWrapper = ({
  src,
  alt,
  caption,
  priority,
  className,
}: Props) => {
  return (
    <>
          <div className={`relative w-full  ${className}`}>
        {/* Image container needs to have a defined aspect ratio or size to work with layout="responsive" */}
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={src}
            alt={alt}
            layout="responsive"
            objectFit="cover"
            className="rounded-t-md"
            placeholder="blur" // This should be 'blur' to use the blur-up effect
            // blurDataURL={placeholder} // Ensure 'placeholder' is a valid base64 string if used as blurDataURL
            quality={50}
            priority={priority}
            // 'sizes' attribute is useful for indicating the displayed size of the image for responsive images
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 500px, 600px"
          />
        </div>
        <div className="rounded-b-md text-cyan-200 font-bold text-[15px] text-center bg-gray-700 p-2">
          {caption}
        </div>
      </div>
    </>
  );
};

export default AboutMeImageWrapper;
