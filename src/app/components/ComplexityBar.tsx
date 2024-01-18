import React from "react";

const ComplexityBar = ({ complexity }: any) => {
  return (
    <div>
      <div className="text-left text-sm pr-3 w-1/3 pt-2">Complexity:</div>
      <div className="text-left">
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
      </div>
    </div>
  );
};

export default ComplexityBar;
