"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useEffect, useState, FC } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface AudioPlayerProps {
  name: string;
  mp3Url: string;
  imageUrl: string;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ name, mp3Url, imageUrl }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div
      className=" flex flex-col justify-between gap-2"
      /*       style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} */
    >
      <div className="font-bold">{name}</div>
      <div>
        {hasWindow && (
          <ReactPlayer url={mp3Url} width="100%" height="50px" controls />
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
