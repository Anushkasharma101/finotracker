import React from "react";

const ProgressBar = ({ spent, total }) => {
  const percentage = (spent / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="h-4 bg-green-400 transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
