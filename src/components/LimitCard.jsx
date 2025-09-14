import React from "react";
import ProgressBar from "./ProgressBar";

const LimitCard = ({ category, spent, limit, color }) => {
  return (
    <div
      className={`rounded-xl shadow-md p-4 border-l-4`}
      style={{ borderColor: color }}
    >
      <h4 className="font-semibold text-gray-800">{category}</h4>
      <p className="text-sm text-gray-500 mb-2">Limit: ${limit}</p>
      <ProgressBar spent={spent} total={limit} />
      <p className="text-xs text-gray-600 mt-2">
        Spent: ${spent} • Left: ${limit - spent}
      </p>
    </div>
  );
};

export default LimitCard;
