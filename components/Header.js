"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const today = new Date().toLocaleDateString("en-GB"); // Format: DD-MM-YYYY

  if (!showHeader) {
    return null; // Hide header when X is clicked
  }

  return (
    <header className="bg-white shadow-md p-4 text-dark text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <X
            className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700 transition"
            onClick={() => setShowHeader(false)}
          />
          <h1 className="text-lg sm:text-2xl font-semibold">
            High Fidelity Dashboard - Home Rent
          </h1>
        </div>

        {/* Right Section */}
        <p className="text-gray-500 text-sm sm:text-base">
          Last updated: {today}
        </p>
      </div>
    </header>
  );
}
