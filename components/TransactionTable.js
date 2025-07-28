import React, { useState } from "react";

export default function TransactionTable() {
  const allTransactions = [
    {
      car: "Nissan GT – R",
      price: "$80.00",
      date: "20 July",
      category: "Sport Car",
      image: "/images/nissan.jpg",
    },
    {
      car: "Koenigsegg",
      price: "$99.00",
      date: "19 July",
      category: "Sport Car",
      image: "/images/car2.jpg",
    },
    {
      car: "Rolls – Royce",
      price: "$96.00",
      date: "18 July",
      category: "Luxury",
      image: "/images/Hyundai-Sonata.jpg",
    },
    {
      car: "CR – V",
      price: "$80.00",
      date: "17 July",
      category: "SUV",
      image: "/images/Kia-Sportage.jpg",
    },
    {
      car: "Toyota Fortuner",
      price: "$70.00",
      date: "16 July",
      category: "SUV",
      image: "/images/Toyota-Fortuner.jpg",
    },
    {
      car: "Audi A6",
      price: "$89.00",
      date: "15 July",
      category: "Sedan",
      image: "/images/bmw.jpg",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedTransactions = showAll ? allTransactions : allTransactions.slice(0, 4);

  return (
    <div className="rounded-xl p-6 w-full">
      <div className="flex justify-between items-center mt-20 mb-4">
        <h2 className="text-lg font-semibold">Recent Transaction</h2>
        <button
          className="text-sm text-blue-600 font-medium"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>

      <ul className="space-y-4">
        {displayedTransactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={transaction.image}
                alt={transaction.car}
                className="w-14 h-10 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{transaction.car}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{transaction.date}</p>
              <p className="font-bold">{transaction.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
