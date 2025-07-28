"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import MapComponent from "../../components/MapComponent";
import CarRentalSummary from "../../components/CarRentalSummary";
import PieChartComponent from "../../components/PieChartComponent";
import TransactionTable from "../../components/TransactionTable";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar - Hidden on Mobile */}
      <div className="hidden md:block w-full md:w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
        {/* Map + Car Details + Pickup/Drop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Details Rental</h2>
            <MapComponent />
            <CarRentalSummary />
          </div>

          {/* Pie chart + transactions */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Top 5 Car Rental</h2>
              <PieChartComponent />
            </div>

            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
}
