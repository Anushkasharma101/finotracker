import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full h-full bg-gradient-to-r from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-indigo-600 font-medium">
            No #1 wallet tracking app
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Track your all <br />
            expenses & save <br />
            more money.
          </h1>
          <p className="text-gray-600 max-w-md">
          Track your income and expenses in one place, 
          understand your spending, and stay on top of your financial goals.
          </p>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition-colors">
            Start Now
          </button>
        </div>

        <div className="flex-1 relative mt-12 md:mt-0 flex justify-center">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-300 rounded-full opacity-80"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600 rounded-lg rotate-6 opacity-90"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-green-300 rounded-xl opacity-80"></div>

          <img
            src="/Assets/heroImage.jpg" 
            alt="Hero"
            className="relative z-10 rounded-2xl w-[60%] h-[40%] translate-y-40 rotate-12"
          />

          <motion.div
            className="absolute top-6 right-0 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center space-x-2 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xl">🥰</span>
            <p className="text-gray-700 font-medium">
              Total Savings <span className="text-indigo-600">$1700</span>
            </p>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-0 bg-white shadow-lg px-4 py-2 rounded-xl flex items-center space-x-2 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-red-500">✔️</span>
            <p className="text-gray-700 font-medium">
              Total Earning <span className="text-red-500">$4500</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
