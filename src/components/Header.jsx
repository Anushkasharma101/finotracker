import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthPopup from "../components/AuthPopup";

const Header = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <div className="w-full h-full bg-black flex p-2 justify-between items-center">
      {/* Logo */}
      <div className="w-[10%] h-full">
        <img
          src="/Assets/logo.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <div className="w-[30%] bg-black py-3 shadow-md">
        <nav className="w-6xl flex justify-center items-center">
          <ul className="flex space-x-8 text-lg font-medium text-white">
            <li>
              <Link
                to="/"
                className="hover:bg-white rounded-full hover:text-black p-2 px-4 transition-colors font-raleway"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="hover:bg-white rounded-full hover:text-black p-2 px-4 transition-colors font-raleway"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:bg-white rounded-full hover:text-black p-2 px-4 transition-colors font-raleway"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Auth Section */}
      <div className="w-[10%] h-[80%] font-raleway text-xl flex justify-center items-center relative">
        {user ? (
          <div className="relative">
            {/* Profile Avatar */}
            <img
              src={user.avatar}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <AuthPopup triggerLabel="Login" onLogin={setUser} />
        )}
      </div>
    </div>
  );
};

export default Header;
