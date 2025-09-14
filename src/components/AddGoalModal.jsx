import React, { useState } from "react";

const AddGoalModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    collected: "",
    goal: "",
    finish: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Add Goal</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Goal Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter goal name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Collected Amount</label>
            <input
              type="number"
              name="collected"
              value={form.collected}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter collected amount"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Goal Amount</label>
            <input
              type="number"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter goal amount"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Finish Date</label>
            <input
              type="date"
              name="finish"
              value={form.finish}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-yellow-400 text-white font-semibold hover:bg-yellow-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGoalModal;
