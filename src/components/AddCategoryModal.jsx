import React, { useState } from "react";

const AddCategoryModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "",
    icon: "💡",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name) return;
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Add Category</h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Category Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter category name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Icon</label>
            <input
              type="text"
              name="icon"
              value={form.icon}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="e.g. 🚗"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use emoji or text for the category icon
            </p>
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

export default AddCategoryModal;
