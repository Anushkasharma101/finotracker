import React from "react";
import { CreditCard } from "lucide-react"; 
import SpendingsChart from "../components/SpendingsChart";

const colors = {
  blue: "from-blue-400 to-teal-300",
  pink: "from-pink-400 to-red-300",
  purple: "from-purple-400 to-indigo-300",
  green: "from-green-400 to-lime-300",
  orange: "from-orange-400 to-amber-300",
};

const Card = ({ type, title, subtitle, number, amount, date, color }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CreditCard className="text-gray-700" size={20} />
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500">{subtitle}</p>
          </div>
        </div>
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[color]}`}
        />
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

const data = {
  assets: [
    {
      type: "asset",
      title: "PAYMENT CARD",
      subtitle: "Universal Bank",
      number: "5678",
      amount: 12800,
      color: "blue",
    },
    {
      type: "asset",
      title: "ONLINE CARD",
      subtitle: "PayPal",
      number: "1632",
      amount: 1300,
      color: "pink",
    },
    {
      type: "asset",
      title: "CASH",
      subtitle: "Pocket money",
      amount: 1080,
      color: "purple",
    },
    {
      type: "asset",
      title: "SAVINGS",
      subtitle: "Sense Bank",
      number: "5678",
      amount: 16000,
      color: "green",
    },
    {
    type: "asset",
    title: "INVESTMENT",
    subtitle: "Stocks & Bonds",
    number: "8899",
    amount: 25000,
    color: "orange",
  },
  ],
  debts: [
    {
      type: "debt",
      title: "MORTGAGE",
      subtitle: "Universal Bank",
      date: "01 Apr 2030",
      amount: 280000,
      color: "blue",
    },
    {
      type: "debt",
      title: "BORROWED",
      subtitle: "from Tamara",
      date: "18 Dec 2023",
      amount: 8000,
      color: "orange",
    },
  ],
};

const AccountsPage = () => {
  return (
    <div className="w-full h-full flex flex-col p-6 gap-6">
      <div className="flex gap-6 w-full h-[100%]">
        <div className="w-1/2 bg-white rounded-lg p-4 overflow-y-scroll shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Assets</h2>
          <div className="grid grid-cols-2 gap-4 ">
            {data.assets.map((asset, i) => (
              <Card key={i} {...asset} />
            ))}
          </div>
        </div>

        <div className="w-1/2 bg-white rounded-lg p-4 overflow-y-scroll shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Debts</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.debts.map((debt, i) => (
              <Card key={i} {...debt} />
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AccountsPage;
