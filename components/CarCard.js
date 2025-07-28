"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function CarCard({ car }) {
  const [liked, setLiked] = useState(car.liked);

  const imageSrc =
    car.image && car.image.trim() !== "" ? car.image : "/images/default-car.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition"
    >
      {/* Top Section: Name + Like */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
          <p className="text-sm text-gray-400">{car.type}</p>
        </div>
        <Heart
          onClick={() => setLiked(!liked)}
          className={`cursor-pointer ${liked ? "text-red-500" : "text-gray-400"}`}
          fill={liked ? "red" : "none"}
        />
      </div>

      {/* Image with Link to Detail Page */}
      <Link href={`/cars/${car.id}`}>
        <div className="flex justify-center my-5 cursor-pointer">
          <Image
            src={imageSrc}
            alt={car.name}
            width={200}
            height={100}
            className="rounded object-cover"
            unoptimized
          />
        </div>
      </Link>

      {/* Car Specs */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>🚗 {car.fuel}</span>
        <span>⚙️ {car.transmission}</span>
        <span>👥 {car.capacity}</span>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
        {(car.features || []).map((feature, idx) => (
          <span key={idx} className="bg-gray-100 px-2 py-1 rounded">
            {feature}
          </span>
        ))}
      </div>

      {/* Price + Rent Now */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-blue-500">
          ${car.price} <span className="text-sm">/day</span>
        </span>
        <Link href={`/cars/${car.id}`}>
          <button className="bg-blue-500 text-white px-3 py-2 text-xs rounded-md hover:bg-blue-600 transition">
            Rent Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
