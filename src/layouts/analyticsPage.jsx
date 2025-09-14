import AchievementLimitsChart from "../components/AchievementLimitsChart";
import ExpensesChart from "../components/ExpensesChart";
import IncomeChart from "../components/IncomeChart";
import ExpensesIncomeChart from "../components/ExpensesIncomeChart";

const AnalyticsPage = () => {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <AchievementLimitsChart />
      <ExpensesChart />
      <IncomeChart />
      <ExpensesIncomeChart />
    </div>
  );
};

export default AnalyticsPage;
