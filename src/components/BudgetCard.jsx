import React from "react";

const BudgetCard = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium">
        {buttonText}
      </button>
    </div>
  );
};

export default BudgetCard;
