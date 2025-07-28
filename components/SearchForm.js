"use client";

import { FaExchangeAlt, FaChevronDown } from "react-icons/fa";

export default function SearchForm() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-xl shadow-lg gap-4 md:gap-6 items-center">
      <FormSection label="Pick-Up" color="bg-blue-600" />

      {/* Swap Button Responsive */}
      <button
        className="bg-blue-600 hover:bg-blue-700 p-2 md:p-3 rounded-xl text-white flex items-center justify-center transition-all"
        aria-label="Swap Locations"
      >
        <FaExchangeAlt size={14} className="md:size-4" />
      </button>

      <FormSection label="Drop-Off" color="bg-blue-400" />
    </div>
  );
}

function FormSection({ label, color }) {
  return (
    <div className="flex-1 bg-gray-100 p-4 rounded-lg w-full">
      <div className="flex items-center mb-4">
        <span className={`w-3 h-3 rounded-full mr-2 ${color}`}></span>
        <h3 className="font-semibold text-gray-700">{label}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Location", "Date", "Time"].map((field, idx) => (
          <div key={idx}>
            <label className="block text-sm font-medium text-gray-600 mb-1">{field}</label>
            <div className="bg-white border border-gray-300 rounded px-3 py-2 flex justify-between items-center text-gray-500 text-sm cursor-pointer">
              <span>Select {field.toLowerCase()}</span>
              <FaChevronDown />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
