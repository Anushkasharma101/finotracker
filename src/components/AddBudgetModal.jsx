import React, { useState } from "react";

const AddBudgetModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    limit: "",
    category: "",
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
        <h2 className="text-lg font-semibold mb-4">Add Budget</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Budget Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter budget name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Limit ($)</label>
            <input
              type="number"
              name="limit"
              value={form.limit}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter limit"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            >
              <option value="">Select category</option>
              <option value="Products">Products</option>
              <option value="Home">Home</option>
              <option value="Clothes">Clothes</option>
              <option value="Car">Car</option>
            </select>
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

export default AddBudgetModal;
