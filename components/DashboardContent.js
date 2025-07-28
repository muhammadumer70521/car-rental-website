import React from 'react';
import MapComponent from './MapComponent';
import PieChartComponent from './PieChartComponent';
import TransactionTable from './TransactionTable';
import PickupDropoff from './PickupDropoff';

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Map Component */}
      <div className="bg-white p-4 rounded shadow col-span-2">
        <h3 className="text-lg font-bold mb-2">Details Rental</h3>
        <MapComponent />

        {/* Car image or pickup/drop-off info below map */}
        <div className="mt-4">
          <PickupDropoff />
        </div>
      </div>

      {/* Pie Chart Component */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-2">Top 5 Car Rental</h3>
        <PieChartComponent />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-4 rounded shadow col-span-2">
        <h3 className="text-lg font-bold mb-2">Recent Transactions</h3>
        <TransactionTable />
      </div>
    </div>
  );
}
