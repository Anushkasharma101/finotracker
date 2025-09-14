import React from "react";
import { LayoutDashboard } from "lucide-react";
import { SquareUserRound } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import AuthButtons from "./AuthButtons";

const Sidebar = ({ setActiveScreen }) => {
  return (
    <div className="w-[20%] h-screen bg-black text-white p-5 flex flex-col justify-between">
      <div className="w-full h-[10%]">
        <img
          src="/Assets/logo.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[85%] p-5">
        <div className="w-full h-[5%] mb-5 text-sm text-white/50">General</div>
        <ul className="space-y-5 font-opensans text-lg">
          <li
            onClick={() => setActiveScreen("dashboard")}
            className="cursor-pointer hover:bg-white/50 flex gap-2 hover:p-1 rounded-lg"
          >
            <LayoutDashboard />
            Dashboard
          </li>
          <li
            onClick={() => setActiveScreen("accounts")}
            className="cursor-pointer hover:bg-white/50 hover:p-1 flex gap-2 rounded-lg"
          >
            <SquareUserRound />
            Accounts
          </li>
          <li
            onClick={() => setActiveScreen("transactions")}
            className="cursor-pointer hover:bg-white/50 hover:p-1 flex gap-2 rounded-lg"
          >
            <ArrowLeftRight />
            Transactions
          </li>
          <li
            onClick={() => setActiveScreen("budget")}
            className="cursor-pointer hover:bg-white/50 hover:p-1 flex gap-2 rounded-lg"
          >
            <CircleDollarSign />
            Budget
          </li>
          <li
            onClick={() => setActiveScreen("analytics")}
            className="cursor-pointer hover:bg-white/50 hover:p-1 flex gap-2 rounded-lg"
          >
            <ChartNoAxesCombined />
            Analytics
          </li>
        </ul>
      </div>
      <div className="w-full h-[5%] cursor-pointer text-black bg-white rounded-lg">
         <AuthButtons onClick={onclick}>LogOut</AuthButtons>
      </div>
    </div>
  );
};

export default Sidebar;
