import React from "react";

export default function CarRentalSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src="/images/nissan.jpg"
          alt="Nissan GT-R"
          className="w-24 h-16 object-cover rounded"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Nissan GT – R</h2>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
        <span className="text-sm text-gray-400">#9761</span>
      </div>

      {/* Pick-Up Section */}
      <div className="mb-4">
        <p className="font-semibold text-sm mb-2">Pick – Up</p>
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">Location</p>
            <p>Kota Semarang</p>
          </div>
          <div>
            <p className="text-gray-500">Date</p>
            <p>20 July 2022</p>
          </div>
          <div>
            <p className="text-gray-500">Time</p>
            <p>07:00</p>
          </div>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div className="mb-4">
        <p className="font-semibold text-sm mb-2">Drop – Off</p>
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">Location</p>
            <p>Kota Semarang</p>
          </div>
          <div>
            <p className="text-gray-500">Date</p>
            <p>21 July 2022</p>
          </div>
          <div>
            <p className="text-gray-500">Time</p>
            <p>01:00</p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="flex justify-between items-center border-t pt-4">
        <p className="text-gray-500 text-sm">
          Overall price and includes rental discount
        </p>
        <p className="text-2xl font-bold">$80.00</p>
      </div>
    </div>
  );
}
