import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#E74C3C", "#3498DB", "#2ECC71", "#9B59B6", "#F1C40F", "#E67E22"];

const expensesData = [
  { name: "Home", value: 2474 },
  { name: "Beauty", value: 2165 },
  { name: "Products", value: 2062 },
  { name: "Car", value: 1340 },
  { name: "Medicine", value: 1257 },
  { name: "Clothes", value: 1312 },
];

const uncategorizedTransactions = [
  { id: 1, amount: "$200", date: "01 Jul 2023", time: "10:32 am", account: "Payment Card" },
  { id: 2, amount: "$1,150", date: "01 Jul 2023", time: "11:02 am", account: "Cash" },
  { id: 3, amount: "$45", date: "12 Jul 2023", time: "06:48 pm", account: "Payment Card" },
  { id: 4, amount: "$178", date: "17 Jul 2023", time: "08:24 pm", account: "Cash" },
  { id: 5, amount: "$2,399", date: "22 Jul 2023", time: "09:33 pm", account: "PayPal" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 grid grid-cols-12 gap-6 bg-gray-50 h-screen">
      <div className="col-span-8">
        <h1 className="text-5xl font-bold text-green-700">Good evening, Milana!</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Take a look at your dashboard overview. Analyze current financial activity and move towards your financial goals.
        </p>
        <button className="w-[20%] h-[15%] bg-yellow-400 text-white rounded-xl mt-5">+ Add Account</button>
      </div>

      <div className="col-span-4 grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold">Balance</h3>
          <p className="text-xl">$15,180</p>
          <p className="text-green-600 text-sm">+3.15% than a month ago</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold">Expenses</h3>
          <p className="text-xl">$10,312</p>
          <p className="text-red-600 text-sm">-1.03% than a month ago</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold">Savings</h3>
          <p className="text-xl">$16,000</p>
          <p className="text-green-600 text-sm">+0.5% than a month ago</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold">Income</h3>
          <p className="text-xl">$28,500</p>
          <p className="text-green-600 text-sm">+1.00% than a month ago</p>
        </div>
      </div>

      <div className="col-span-4">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold mb-4">Top expenses categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={expensesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
                {expensesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {expensesData.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>${item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold mb-4">Progress in my financial goals</h3>
          <div className="mb-4">
            <h4 className="text-sm font-semibold">New car (Nissan)</h4>
            <p className="text-xs text-gray-500">Each month: $2,000</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "27%" }}></div>
            </div>
            <p className="text-xs mt-1">$12,000 / $44,000 • 16 months left to goal</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Hot air balloon ride</h4>
            <p className="text-xs text-gray-500">Each month: $100</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
            <p className="text-xs mt-1">$1,900 / $2,000 • 1 month left to goal</p>
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="font-semibold mb-2">Monthly budget</h3>
          <p className="text-lg font-bold">$10,312 / $20,000</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "52%" }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">51.56% spent • Left: $9,687</p>
        </div>
      </div>
    </div>
  );
}