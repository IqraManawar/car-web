
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-md">
      {/* Left Section: Logo */}
      <div className="text-2xl font-bold text-blue-600 mb-4 sm:mb-0">
        MORENT
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center relative w-full sm:w-1/2 mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600">
          <i className="fas fa-sliders-h"></i>
        </button>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-4">
        {/* Favorites */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <i className="fas fa-heart text-gray-500 hover:text-blue-600"></i>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <i className="fas fa-bell text-gray-500 hover:text-blue-600"></i>
          <span className="absolute top-1 right-1 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <i className="fas fa-cog text-gray-500 hover:text-blue-600"></i>
        </button>

        {/* Profile Image
        <img
          src="./public/image8.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        /> */}
      </div>
    </header>
  );
};

export default Header;
