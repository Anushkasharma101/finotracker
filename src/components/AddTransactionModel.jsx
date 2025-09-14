import React, { useState } from "react";

const AddTransactionModal = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    category: "",
    account: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd(form);
    setForm({ amount: "", category: "", account: "", date: "", time: "" });
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg"
      >
        + Add a transaction
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>
            
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={form.amount}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <input
              type="text"
              name="account"
              placeholder="Account"
              value={form.account}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-blue-500 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionModal;
