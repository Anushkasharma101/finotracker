import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Apr", Income: 28000, Expenses: 15000 },
  { month: "May", Income: 27980, Expenses: 16000 },
  { month: "Jun", Income: 30000, Expenses: 20000 },
  { month: "Jul", Income: 32000, Expenses: 21000 },
  { month: "Aug", Income: 33000, Expenses: 22000 },
];

const ExpensesIncomeChart = () => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="font-semibold mb-2">Expenses & Income</h3>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Income" stroke="#818cf8" fill="#c7d2fe" />
        <Area type="monotone" dataKey="Expenses" stroke="#f472b6" fill="#fbcfe8" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default ExpensesIncomeChart;
