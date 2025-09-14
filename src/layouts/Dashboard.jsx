import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./dashboardPage";
import AccountsPage from "./accountsPage";
import TransactionsPage from "./transactionsPage";
import BudgetPage from "./budgetPage";
import AnalyticsPage from "./analyticsPage";

const Dashboard = () => {
  const [activeScreen, setActiveScreen] = useState("home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardPage/>;
      case "accounts":
        return <AccountsPage/>;
      case "transactions":
        return <TransactionsPage/>;
      case "budget":
        return <BudgetPage/>;
      case "analytics":
        return <AnalyticsPage/>;    
      default:
        return <DashboardPage/>;
    }
  };

  return (
    <div className="flex">
      <Sidebar setActiveScreen={setActiveScreen} />
      <div className="flex-1 bg-gray-100 min-h-screen">{renderScreen()}</div>
    </div>
  );
};

export default Dashboard;
