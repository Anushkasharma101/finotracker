import React from "react";

const GoalCard = ({ name, collected, goal, finish, color }) => {
  const progress = Math.round((collected / goal) * 100);

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h4 className="font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500">Finish: {finish}</p>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs text-gray-600">Collected: ${collected}</p>
        <p className="text-xs font-medium text-gray-800">Goal: ${goal}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
        <div
          className="h-3"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <p className="text-sm font-semibold mt-2">{progress}%</p>
    </div>
  );
};

export default GoalCard;
