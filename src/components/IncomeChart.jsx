import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Salary", value: 6000 },
  { name: "Deposit %", value: 4000 },
  { name: "Gift", value: 2500 },
  { name: "Others", value: 5000 },
];

const IncomeChart = () => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="font-semibold mb-2">Income</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#60a5fa" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default IncomeChart;
