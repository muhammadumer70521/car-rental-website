"use client";

import { FaHeart, FaBell, FaCog, FaSearch, FaFilter } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Top row (Logo + Icons for mobile) */}
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-700 whitespace-nowrap">
            MORENT
          </div>

          {/* Icons (visible on small screen as well) */}
          <div className="flex items-center gap-3 text-gray-600 text-lg md:hidden">
            <FaHeart className="cursor-pointer hover:text-blue-600" />
            <FaBell className="cursor-pointer hover:text-blue-600" />
            <FaCog className="cursor-pointer hover:text-blue-600" />
            <img
              src="umer.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Search Bar (centered on desktop) */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100 px-4 py-2 rounded-md w-full md:max-w-md"
        >
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <button type="button">
            <FaFilter className="text-gray-500 ml-2 hover:text-blue-600" />
          </button>
        </form>

        {/* Icons for medium+ screens */}
        <div className="hidden md:flex items-center gap-4 text-gray-600 text-xl">
          <FaHeart className="cursor-pointer hover:text-blue-600 transition" />
          <FaBell className="cursor-pointer hover:text-blue-600 transition" />
          <FaCog className="cursor-pointer hover:text-blue-600 transition" />
          <img
            src="umer.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
}
