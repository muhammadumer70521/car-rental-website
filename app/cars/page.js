"use client";

import { useState } from "react";
import CarCard from "../../components/CarCard";
import SidebarFilters from "../../components/SidebarFilters";
import cars from "../../data/carsData";
import SearchForm from "../../components/SearchForm";

const CARS_PER_PAGE = 9;

export default function CarsPage() {
  const [filteredCars, setFilteredCars] = useState(cars || []);
  const [visibleCount, setVisibleCount] = useState(CARS_PER_PAGE);

  const handleFilterChange = (filters) => {
    let result = [...(cars || [])];

    if (filters.type) {
      result = result.filter((car) => car.type === filters.type);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.value;
      result = result.filter((car) => car.price >= min && car.price <= max);
    }

    if (filters.features && filters.features.length > 0) {
      result = result.filter((car) =>
        filters.features.every((f) => (car.features || []).includes(f))
      );
    }

    setFilteredCars(result);
    setVisibleCount(CARS_PER_PAGE); // Reset to first page when filter changes
  };

  const showMoreCars = () => {
    setVisibleCount((prev) => prev + CARS_PER_PAGE);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex gap-6">
      <SidebarFilters onFilterChange={handleFilterChange} />

      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Available Cars</h1>

        {filteredCars.length === 0 ? (
          <p className="text-gray-500">No cars found matching your filters.</p>
        ) : (
          <>
      <SearchForm />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.slice(0, visibleCount).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {visibleCount < filteredCars.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={showMoreCars}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                >
                  Show More Cars
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
