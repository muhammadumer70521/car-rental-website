"use client";
import CarCard from "./CarCard";

export default function CarsList({ cars }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
