import React from "react";

const TrialSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Let’s start your free trial for 30 days
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-6">
          Start your 30-day free trial and explore all features with no commitment. 
          Manage your finances smarter, easier, and more confidently from day one.
        </p>
        <button className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black rounded-lg shadow-md transition">
          Start Now
        </button>
      </div>

      <footer className="bg-gray-100 py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
             FinoTracker
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Track your income and expenses in one place, 
              understand your spending, and stay on top of your financial goals.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Visit Link</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Privacy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>+91 101 0000 888</li>
              <li>Info@FinoTracker.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrialSection;
