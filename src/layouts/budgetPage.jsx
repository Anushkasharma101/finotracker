import React, { useState } from "react";
import BudgetCard from "../components/BudgetCard";
import LimitCard from "../components/LimitCard";
import GoalCard from "../components/GoalCard";

const BudgetPage = () => {
  const [categories, setCategories] = useState([
    "Hairdresser’s",
    "Learning",
    "Subscriptions",
    "Cryptocurrency",
  ]);

  const [limits, setLimits] = useState([
    { category: "Products", spent: 2090, limit: 5000, color: "#6366f1" },
    { category: "Home", spent: 3800, limit: 5000, color: "#f87171" },
    { category: "Medicine", spent: 1450, limit: 2000, color: "#34d399" },
  ]);

  const [goals] = useState([
    {
      name: "New Car (Nissan)",
      collected: 12000,
      goal: 44000,
      finish: "10 Nov 2024",
      color: "#a78bfa",
    },
  ]);

  // Modal state
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  // Form state
  const [newCategory, setNewCategory] = useState("");
  const [newLimit, setNewLimit] = useState({
    category: "",
    spent: "",
    limit: "",
    color: "#60a5fa",
  });

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
      setShowCategoryModal(false);
    }
  };

  const handleAddLimit = () => {
    if (newLimit.category && newLimit.limit) {
      setLimits([...limits, { ...newLimit, spent: Number(newLimit.spent), limit: Number(newLimit.limit) }]);
      setNewLimit({ category: "", spent: "", limit: "", color: "#60a5fa" });
      setShowLimitModal(false);
    }
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Left Panel */}
      <div className="col-span-1 flex flex-col gap-6">
        <BudgetCard
          title="Budget"
          description="Effortlessly create and manage unlimited budgets with personalized limits."
          buttonText="Add a budget"
        />

        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Personal categories</h3>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i} className="text-sm text-gray-700">{cat}</li>
            ))}
          </ul>
          <button
            className="mt-3 text-yellow-500 font-medium"
            onClick={() => setShowCategoryModal(true)}
          >
            + Add a category
          </button>
        </div>
      </div>

      {/* Middle Panel */}
      <div className="col-span-2 flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="font-semibold text-gray-800 mb-3">Personal budget</h2>
          <div className="flex justify-between items-center">
            <span>01 Apr 2022 - 01 May 2022</span>
            <span className="text-green-600 font-semibold">51.56% spent</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full mt-3 overflow-hidden">
            <div className="h-3 bg-green-400" style={{ width: "52%" }} />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-600">Amount of budget</p>
              <p className="font-bold">$20,000</p>
            </div>
            <div>
              <p className="text-gray-600">Spent money</p>
              <p className="font-bold">$10,312</p>
            </div>
            <div>
              <p className="text-gray-600">Rest of money</p>
              <p className="font-bold">$9,687</p>
            </div>
            <div>
              <p className="text-gray-600">Daily limit</p>
              <p className="font-bold">$645</p>
            </div>
          </div>
        </div>

        {/* Limits Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Limits for categories</h3>
            <button
              className="text-blue-500 font-medium"
              onClick={() => setShowLimitModal(true)}
            >
              + Add limit
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {limits.map((limit, i) => (
              <LimitCard key={i} {...limit} />
            ))}
          </div>
        </div>

        {/* Financial Goals */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Financial goals</h3>
          <div className="grid grid-cols-2 gap-4">
            {goals.map((goal, i) => (
              <GoalCard key={i} {...goal} />
            ))}
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add Category</h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Category name"
              className="w-full border rounded-md p-2 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowCategoryModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Limit Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add Limit</h2>
            <input
              type="text"
              placeholder="Category"
              value={newLimit.category}
              onChange={(e) => setNewLimit({ ...newLimit, category: e.target.value })}
              className="w-full border rounded-md p-2 mb-3"
            />
            <input
              type="number"
              placeholder="Spent"
              value={newLimit.spent}
              onChange={(e) => setNewLimit({ ...newLimit, spent: e.target.value })}
              className="w-full border rounded-md p-2 mb-3"
            />
            <input
              type="number"
              placeholder="Limit"
              value={newLimit.limit}
              onChange={(e) => setNewLimit({ ...newLimit, limit: e.target.value })}
              className="w-full border rounded-md p-2 mb-3"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowLimitModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleAddLimit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
