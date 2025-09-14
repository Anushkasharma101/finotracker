import React from "react";
import { CreditCard } from "lucide-react"; 

const colors = {
  blue: "from-blue-400 to-teal-300",
  pink: "from-pink-400 to-red-300",
  purple: "from-purple-400 to-indigo-300",
  green: "from-green-400 to-lime-300",
  orange: "from-orange-400 to-amber-300",
};

const Card = ({ type, title, subtitle, number, amount, date, color }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-72 relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CreditCard className="text-gray-700" size={20} />
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[color]}`} />
      </div>

      {number && (
        <p className="text-sm text-gray-500 mb-1">Card Number: **** {number}</p>
      )}
      {date && <p className="text-sm text-gray-500 mb-1">End date: {date}</p>}

      <div className="flex justify-between items-center mt-2">
        <span className="text-sm font-medium text-gray-600">
          {type === "asset" ? "Balance" : "Amount"}
        </span>
        <span className="text-lg font-bold text-gray-800">${amount}</span>
      </div>
    </div>
  );
};

export default Card;
