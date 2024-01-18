"use client";
import React from "react";
import Image from "next/image";
import useWindowSize from "@/lib/hooks/use-window-size";

interface Props {
  screenshot: string;
  title: string;
  sizeFactor?: number;
}

const ImageWrapper = ({ screenshot, title, sizeFactor = 1 }: Props) => {
  const { isMobile } = useWindowSize();

  // Calculate dimensions based on sizeFactor
  const width = (isMobile ? 250 : 400) * sizeFactor;
  const height = (isMobile ? 200 : 100) * sizeFactor;

  return (
    <Image
      src={screenshot}
      alt={`${title} Screenshot`}
      width={width}
      height={height}
      className="py-2 rounded-md"
    />
  );
};

export default ImageWrapper;
