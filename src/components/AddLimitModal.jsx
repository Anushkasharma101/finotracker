import React, { useState } from "react";

const AddLimitModal = ({ open, onClose, onSave, categories = [] }) => {
  const [form, setForm] = useState({
    category: "",
    limit: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.category || !form.limit) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Add Limit</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            >
              <option value="">Select category</option>
              {categories.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Limit ($)</label>
            <input
              type="number"
              name="limit"
              value={form.limit}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter limit amount"
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

export default AddLimitModal;
