"use client";

import { useState } from "react";
import { carTypes, priceRanges, features } from "../data/carsData";
import cars from "../data/carsData"; // ✅ Correct import for cars array

export default function SidebarFilters({ onFilterChange }) {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    onFilterChange({ type, priceRange: selectedPriceRange, features: selectedFeatures });
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    onFilterChange({ type: selectedType, priceRange: range, features: selectedFeatures });
  };

  const handleFeatureChange = (feature) => {
    const updatedFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];

    setSelectedFeatures(updatedFeatures);
    onFilterChange({ type: selectedType, priceRange: selectedPriceRange, features: updatedFeatures });
  };

  // 🔢 Count cars per type
  const getTypeCount = (type) => {
    return cars.filter((car) => car.type === type).length;
  };

  return (
    <aside className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Car Type Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">Car Type</h4>
        {carTypes.map((type) => (
          <label key={type} className="block mb-1 cursor-pointer">
            <input
              type="radio"
              name="type"
              value={type}
              checked={selectedType === type}
              onChange={() => handleTypeChange(type)}
              className="mr-2"
            />
            {type} <span className="text-gray-500">({getTypeCount(type)})</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">Price Range</h4>
        {priceRanges.map((range) => (
          <label key={range.label} className="block mb-1 cursor-pointer">
            <input
              type="radio"
              name="price"
              checked={selectedPriceRange?.label === range.label}
              onChange={() => handlePriceRangeChange(range)}
              className="mr-2"
            />
            {range.label}
          </label>
        ))}
      </div>

      {/* Features Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-2">Features</h4>
        {features.map((feature) => (
          <label key={feature} className="block mb-1 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
              className="mr-2"
            />
            {feature}
          </label>
        ))}
      </div>
    </aside>
  );
}
