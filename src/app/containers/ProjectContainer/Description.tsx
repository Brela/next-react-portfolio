"use client";
import { useState } from "react";
interface Props {
  description: string;
}

const Description = ({ description }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const charLimit = 170;

  return (
    <p className="whitespace-normal inline">
      {showFullDescription || description.length <= charLimit
        ? description
        : `${description.substring(0, charLimit)} `}
      {description.length > charLimit && (
        <span className="text-blue-500 inline">
          {!showFullDescription ? (
            <button onClick={() => setShowFullDescription(true)} className="text-cyan-200 inline ">
              more...
            </button>
          ) : (
            <button onClick={() => setShowFullDescription(false)} className="text-cyan-200 inline ">
              ...less
            </button>
          )}
        </span>
      )}
    </p>
  );
};

export default Description;
