"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import Link from "next/link";
import cars from "../../../data/carsData";
import carReviews from "../../../data/carReviews";
import CarCard from "../../../components/CarCard";
import SidebarFilters from "../../../components/SidebarFilters";

export default function CarDetailPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id.toString() === id);
  const reviews = carReviews[id] || [];

  const [visibleCount, setVisibleCount] = useState(3);
  const [filters, setFilters] = useState({
    type: null,
    priceRange: null,
    features: [],
  });

  if (!car) {
    return <p className="text-center text-red-500 mt-8">Car not found!</p>;
  }

  const similarCars = useMemo(() => {
    return cars.filter((c) => {
      const isSameType = c.type === car.type && c.id !== car.id;
      const inPriceRange = filters.priceRange
        ? c.price >= filters.priceRange.min && c.price <= filters.priceRange.max
        : true;
      const hasFeatures =
        filters.features.length === 0 ||
        filters.features.every((feature) => c.features?.includes(feature));

      return isSameType && inPriceRange && hasFeatures;
    });
  }, [car.type, car.id, filters]);

  return (
    <div className="container mx-auto p-4">
      {/* Responsive Sidebar and Car Detail Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <SidebarFilters onFilterChange={setFilters} />
        </div>

        {/* Car Details + Reviews */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Car Image + Info */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <img
                src={car.image}
                alt={car.name}
                className="w-full rounded-lg mb-4"
              />
              <div className="grid grid-cols-3 gap-2">
                {(car.gallery || [car.image]).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Car ${i}`}
                    className="w-full h-24 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{car.name}</h1>
              <p className="text-gray-600">{car.description}</p>
              <p className="text-2xl text-blue-600 font-semibold">
                ${car.price} / day
              </p>

              {/* Features */}
              <div className="flex gap-2 flex-wrap">
                {car.features?.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Rent Now Button */}
              <Link href={`/booking/${car.id}`}>
  <button className=" mt-10 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Book Now
  </button>
</Link>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Customer Reviews
            </h2>
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet.</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="border p-4 rounded shadow-sm bg-white"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold">{review.user}</span>
                      <span className="text-yellow-500">
                        {"⭐".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{review.comment}</p>
                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Similar Cars Section */}
      <div className="mt-16 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Similar Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {similarCars.slice(0, visibleCount).map((similar) => (
            <CarCard key={similar.id} car={similar} />
          ))}
        </div>

        {visibleCount < similarCars.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Show More Cars
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
