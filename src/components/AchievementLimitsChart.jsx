import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", Limit: 2000, Expenses: 1500, Overlimit: 0 },
  { month: "Feb", Limit: 2000, Expenses: 1800, Overlimit: 500 },
  { month: "Mar", Limit: 2000, Expenses: 2500, Overlimit: 1000 },
  { month: "Apr", Limit: 2000, Expenses: 2200, Overlimit: 200 },
  { month: "May", Limit: 2000, Expenses: 3000, Overlimit: 1000 },
  { month: "Jun", Limit: 2000, Expenses: 1800, Overlimit: 0 },
];

const AchievementLimitsChart = () => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="font-semibold mb-2">Achievement limits</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Limit" fill="#93c5fd" />
        <Bar dataKey="Expenses" fill="#34d399" />
        <Bar dataKey="Overlimit" fill="#fbbf24" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default AchievementLimitsChart;
