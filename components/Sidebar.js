import React from "react";
import {
  FaHome,
  FaCar,
  FaChartPie,
  FaMoneyCheckAlt,
  FaInbox,
  FaCalendarAlt,
  FaCog,
  FaQuestionCircle,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-white h-screen shadow-md p-6 flex flex-col justify-between w-64 hidden md:block">
      {/* Top Section - Main Menu */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Main Menu</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaHome />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaCar />
            <span>Car Rent</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaChartPie />
            <span>Insight</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaMoneyCheckAlt />
            <span>Reimburse</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaInbox />
            <span>Inbox</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaCalendarAlt />
            <span>Calendar</span>
          </li>
        </ul>
      </div>

      {/* Middle Section - Preferences */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Preferences</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaCog />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaQuestionCircle />
            <span>Help & Center</span>
          </li>
          <li className="flex items-center space-x-3 hover:text-blue-500 cursor-pointer">
            <FaMoon />
            <span>Dark Mode</span>
          </li>
        </ul>
      </div>

      {/* Bottom Section - Logout */}
      <div className="mt-7">
        <ul className="text-gray-700">
          <li className="flex items-center space-x-3 hover:text-red-600 cursor-pointer">
            <FaSignOutAlt />
            <span >Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
