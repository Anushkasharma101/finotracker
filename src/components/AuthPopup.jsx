import React, { useState } from "react";

const AuthPopup = ({ triggerLabel = "Login", onLogin }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // ✅ Replace with API call
    const dummyUser = {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/40", // random profile image
    };
    onLogin(dummyUser); // send user info to parent
    setShowPopup(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // ✅ Replace with API call
    const dummyUser = {
      name: "New User",
      email: "newuser@example.com",
      avatar: "https://i.pravatar.cc/40",
    };
    onLogin(dummyUser);
    setShowPopup(false);
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="px-6 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200"
      >
        {triggerLabel}
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>

            {isLogin ? (
              <div>
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setIsLogin(false)}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsLogin(true)}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                    Login
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPopup;
