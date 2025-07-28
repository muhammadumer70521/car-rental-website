// "use client";
// import React, { useState } from "react";

// export default function PickupDropoff() {
//   const [pickupCity, setPickupCity] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const [pickupTime, setPickupTime] = useState("");
//   const [dropoffCity, setDropoffCity] = useState("");
//   const [dropoffDate, setDropoffDate] = useState("");
//   const [dropoffTime, setDropoffTime] = useState("");

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md mt-8">
//       <h2 className="text-xl font-semibold mb-4">Pickup & Drop-off Details</h2>

//       {/* Pickup */}
//       <div className="grid md:grid-cols-3 gap-4 mb-6">
//         <div>
//           <label className="block text-sm font-medium mb-1">Pickup Location</label>
//           <input
//             type="text"
//             value={pickupCity}
//             onChange={(e) => setPickupCity(e.target.value)}
//             placeholder="Enter city"
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Pickup Date</label>
//           <input
//             type="date"
//             value={pickupDate}
//             onChange={(e) => setPickupDate(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Pickup Time</label>
//           <input
//             type="time"
//             value={pickupTime}
//             onChange={(e) => setPickupTime(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//       </div>

//       {/* Drop-off */}
//       <div className="grid md:grid-cols-3 gap-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Drop-off Location</label>
//           <input
//             type="text"
//             value={dropoffCity}
//             onChange={(e) => setDropoffCity(e.target.value)}
//             placeholder="Enter city"
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Drop-off Date</label>
//           <input
//             type="date"
//             value={dropoffDate}
//             onChange={(e) => setDropoffDate(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Drop-off Time</label>
//           <input
//             type="time"
//             value={dropoffTime}
//             onChange={(e) => setDropoffTime(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
