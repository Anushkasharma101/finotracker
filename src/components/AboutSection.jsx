import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full h-full py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <div className="flex-1 relative flex justify-center mb-12 md:mb-0">
          <div className="bg-white shadow-xl rounded-2xl p-6 relative z-10 w-80">
            <div className="absolute -top-8 left-6 bg-gradient-to-r from-indigo-500 to-blue-600 px-4 py-2 rounded-xl text-white text-sm font-semibold shadow-md flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/30"
                alt="profile"
                className="w-6 h-6 rounded-full border border-white"
              />
              <span>Damien Martin</span>
              <span className="text-gray-200 text-xs">31, New York</span>
            </div>

            <div className="mt-8">
              <div className="w-full h-40 bg-gray-50 rounded-md flex items-end space-x-2 p-2">
                <div className="w-6 h-28 bg-cyan-400 rounded"></div>
                <div className="w-6 h-20 bg-cyan-400 rounded"></div>
                <div className="w-6 h-24 bg-cyan-400 rounded"></div>
                <div className="w-6 h-16 bg-cyan-400 rounded"></div>
                <div className="w-6 h-12 bg-cyan-400 rounded"></div>
                <div className="w-6 h-32 bg-cyan-400 rounded"></div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-6 bg-white rounded-full shadow-lg w-24 h-24 flex items-center justify-center text-sm font-semibold">
              <div className="w-20 h-20 rounded-full border-8 border-yellow-400 border-t-cyan-400 border-r-cyan-400 border-b-gray-200 flex items-center justify-center">
                $23.99
              </div>
            </div>
          </div>

          <div className="absolute left-12 top-20 w-16 h-16 border-8 border-red-300 rounded-full"></div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-indigo-600 font-semibold">About Us</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Save your money <br /> smartly by our app
          </h2>
          <p className="text-gray-600">
            Strong and confident living leads to success. Our app helps you stay on track and organized. With easy access and smart tools, managing your finances becomes simple and effective.
          </p>
          <p className="text-gray-600">
            Stay focused with powerful features designed to support your goals. Everything you need is available in one place, making money management easier and stress-free.
          </p>
          <button className="flex items-center space-x-2 text-orange-500 font-semibold hover:underline">
            <span>—</span>
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
