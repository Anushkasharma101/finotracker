import React, { useState, useEffect } from "react";
import { Plus, MoreVertical, CreditCard } from "lucide-react";
import AddTransactionModal from "../components/AddTransactionModel"; 

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // ✅ Fetch transactions from backend
  const fetchTransactions = async () => {
    try {
      const res = await fetch("/api/transactions", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  // ✅ Fetch exchange rates from backend
  const fetchExchangeRates = async () => {
    try {
      const res = await fetch("/api/exchange-rates", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      setExchangeRates(data);
    } catch (err) {
      console.error("Error fetching exchange rates:", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchExchangeRates();
  }, []);

  // ✅ Handle add transaction
  const handleSave = async (form) => {
    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add transaction");

      await fetchTransactions(); // refresh table
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  return (
    <div className="w-full h-full p-6 bg-slate-100 flex flex-col gap-6">
      {/* Top Section */}
      <div className="flex gap-6">
        {/* Payment Card */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">PAYMENT CARD</h3>
              <p className="text-sm text-gray-500">Universal Bank</p>
              <p className="text-sm text-gray-500 mt-2">Card Number: **** 5678</p>
            </div>
            <CreditCard className="w-10 h-10 text-gray-600" />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Balance</p>
            <p className="text-2xl font-bold text-gray-800">$12,800</p>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
          >
            <Plus size={18} /> Add a transaction
          </button>
        </div>

        {/* Exchange Rates */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Exchange rate</h3>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              View more
            </a>
          </div>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500">
                <th className="py-1">Currency</th>
                <th className="py-1">Buy</th>
                <th className="py-1">Sell</th>
                <th className="py-1">Change</th>
              </tr>
            </thead>
            <tbody>
              {exchangeRates.map((rate, i) => (
                <tr key={i} className="border-t text-gray-700">
                  <td className="py-1">{rate.currency}</td>
                  <td className="py-1">{rate.buy}</td>
                  <td className="py-1">{rate.sell}</td>
                  <td
                    className={`py-1 ${
                      rate.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {rate.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-md p-4 flex-1 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Transaction history</h3>
          <div className="flex gap-2">
            <input type="date" className="border rounded px-2 py-1 text-sm" />
            <select className="border rounded px-2 py-1 text-sm">
              <option>Payment Card</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>All categories</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>USD</option>
            </select>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="p-2">#</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Category</th>
              <th className="p-2">Account</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b hover:bg-slate-50">
                <td className="p-2">
                  <input type="checkbox" />
                </td>
                <td className="p-2">{t.amount}</td>
                <td className="p-2">{t.date}</td>
                <td className="p-2">{t.time}</td>
                <td className="p-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                    {t.category}
                  </span>
                </td>
                <td className="p-2">{t.account}</td>
                <td className="p-2">
                  <MoreVertical size={16} className="text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👇 Add Transaction Modal */}
      <AddTransactionModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default TransactionsPage;
