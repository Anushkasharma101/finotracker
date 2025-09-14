import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", savings: 12000, payment: 5000, online: 3000, cash: 2000 },
  { month: "Feb", savings: 8000, payment: 4000, online: 3500, cash: 1500 },
  { month: "Mar", savings: 10000, payment: 6000, online: 4500, cash: 2500 },
  { month: "Apr", savings: 7000, payment: 4500, online: 2000, cash: 1800 },
  { month: "May", savings: 13980, payment: 6500, online: 4200, cash: 3000 },
  { month: "Jun", savings: 9000, payment: 4700, online: 2800, cash: 2200 },
  { month: "Jul", savings: 11000, payment: 5600, online: 3800, cash: 2600 },
];

export default function SpendingsChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="savings"
          stroke="#00C9A7"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 8 }}
        />

        <Bar dataKey="payment" fill="#00C49F" barSize={30} />
        <Bar dataKey="online" fill="#FF69B4" barSize={30} />
        <Bar dataKey="cash" fill="#8884D8" barSize={30} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
