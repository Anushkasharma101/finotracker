import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", Expenses: 15000 },
  { month: "Feb", Expenses: 18000 },
  { month: "Mar", Expenses: 25000 },
  { month: "Apr", Expenses: 12000 },
  { month: "May", Expenses: 8250 },
  { month: "Jun", Expenses: 20000 },
];

const ExpensesChart = () => (
  <div className="bg-white rounded-xl shadow-md p-4">
    <h3 className="font-semibold mb-2">Expenses</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Expenses" stroke="#f87171" strokeWidth={3} dot />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ExpensesChart;
