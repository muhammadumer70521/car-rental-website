"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import cars from "../../../data/carsData";

export default function CheckoutPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id.toString() === id);
  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!car) {
    return <p className="text-center text-red-500 mt-8">Car not found!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-2">Checkout</h1>
      <p className="text-center text-gray-500 mb-6">Complete your rental in 4 steps</p>

      {/* Responsive Layout: Car Summary Top in Mobile, Right in Desktop */}
      <div className="flex flex-col-reverse md:flex-row gap-10">
        
        {/* Checkout Form */}
        <div className="w-full md:w-2/3 space-y-8">

          {/* Step 1: Billing Info */}
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Billing Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Your Name" className="border p-2 rounded" />
              <input placeholder="Phone Number" className="border p-2 rounded" />
              <input placeholder="Address" className="border p-2 rounded md:col-span-2" />
              <input placeholder="Town / City" className="border p-2 rounded" />
            </div>
          </section>

          {/* Step 2: Rental Info */}
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Rental Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Promo Code (optional)" className="border p-2 rounded md:col-span-2" />
              <input placeholder="Pick-up Location" className="border p-2 rounded" />
              <input type="date" className="border p-2 rounded" />
              <input type="time" className="border p-2 rounded" />
              <input placeholder="Drop-off Location" className="border p-2 rounded" />
              <input type="date" className="border p-2 rounded" />
              <input type="time" className="border p-2 rounded" />
            </div>
          </section>

          {/* Step 3: Payment Method */}
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Payment Method</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {["card", "paypal", "bitcoin"].map((method) => (
                  <label key={method} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                    <span className="capitalize">{method}</span>
                  </label>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="grid gap-4 mt-4">
                  <input placeholder="Card Number" className="border p-2 rounded" />
                  <div className="grid grid-cols-2 gap-4">
                    <input placeholder="MM/YY" className="border p-2 rounded" />
                    <input placeholder="CVC" className="border p-2 rounded" />
                  </div>
                  <input placeholder="Card Holder Name" className="border p-2 rounded" />
                </div>
              )}
            </div>
          </section>

          {/* Step 4: Confirmation */}
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Confirmation</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>I agree to receive marketing emails</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" required />
                <span>I agree with the terms and privacy policy</span>
              </label>

              <button className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Rent Now
              </button>
              <p className="text-sm text-gray-400 text-center mt-2">
                We use secure technology to protect your data.
              </p>
            </div>
          </section>
        </div>

        {/* Car Summary */}
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 p-4 rounded shadow space-y-3">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p className="text-sm text-gray-600">{car.description}</p>
            <p className="text-blue-600 font-semibold">${car.price} / day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
