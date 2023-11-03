"use client";
import React from "react";
import Image from "next/image";
import useWindowSize from "@/lib/hooks/use-window-size";

interface Props {
  screenshot: string;
  title: string;
}

const ImageWrapper = ({ screenshot, title }: Props) => {
  const { isMobile } = useWindowSize();
  console.log(isMobile);
  return (
    <Image
      src={screenshot}
      alt={`${title} Screenshot`}
      width={isMobile ? "250" : "400"}
      height={isMobile ? "200" : "100"}
      className="py-2"
    />
  );
};

export default ImageWrapper;
