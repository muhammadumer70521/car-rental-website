"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PromoCard from "../components/PromoCard";
import SearchForm from "../components/SearchForm";
import CarsList from "../components/CarsList";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    type: "Sedan",
    fuel: "90L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 100,
    image: "/images/tesla-model.jpg",
    liked: true,
  },
  {
    id: 2,
    name: "BMW X5",
    type: "SUV",
    fuel: "85L",
    transmission: "Manual",
    capacity: "7 People",
    price: 120,
    image: "/images/bmw.jpg",
    liked: false,
  },
  {
    id: 3,
    name: "Audi A4",
    type: "Sedan",
    fuel: "70L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 95,
    image: "/images/car3.jpg",
    liked: true,
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    type: "SUV",
    fuel: "90L",
    transmission: "Automatic",
    capacity: "7 People",
    price: 130,
    image: "/images/Toyota-Fortuner.jpg",
    liked: false,
  },
  {
    id: 5,
    name: "Honda Civic",
    type: "Sedan",
    fuel: "70L",
    transmission: "Manual",
    capacity: "5 People",
    price: 85,
    image: "/images/civic.jpg",
    liked: false,
  },
  {
    id: 6,
    name: "Kia Sportage",
    type: "SUV",
    fuel: "80L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 110,
    image: "/images/Kia-Sportage.jpg",
    liked: false,
  },
  {
    id: 7,
    name: "Hyundai Sonata",
    type: "Sedan",
    fuel: "65L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 90,
    image: "/images/Hyundai-Sonata.jpg",
    liked: false,
  },
  {
    id: 8,
    name: "Range Rover Evoque",
    type: "SUV",
    fuel: "95L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 150,
    image: "/images/Range-Rover-Evoque.jpg",
    liked: false,
  },
  {
    id: 9,
    name: "Mercedes C-Class",
    type: "Sedan",
    fuel: "70L",
    transmission: "Automatic",
    capacity: "5 People",
    price: 140,
    image: "/images/toyota-corolla.jpg",
    liked: false,
  },
  {
    id: 10,
    name: "Toyota Corolla",
    type: "Sedan",
    fuel: "60L",
    transmission: "Manual",
    capacity: "5 People",
    price: 75,
    image: "/images/toyota-corolla.jpg",
    liked: false,
  },
];

export default function Home() {
  const [showAllPopular, setShowAllPopular] = useState(false);
  const router = useRouter();

  const popularCars = showAllPopular ? cars.slice(0, 6) : cars.slice(0, 4);
  const recommendedCars = cars.slice(0, 8);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 md:px-20 mt-20">
      {/* Promo Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
  <PromoCard
    title="The Best Platform for Car Rental"
    description="Ease of doing car rental safely and reliably. Of course at a low price."
    buttonText="Rental Car"
    image="/white-sports-car.jpg" // use your white car image
    bgColor="bg-blue-500"
    pattern="bg-dots" // add this class in your global styles
  />
  <PromoCard
    title="Easy way to rent a car at a low price"
    description="Providing cheap car rental services and safe and comfortable facilities."
    buttonText="Rental Car"
    image="/grey-sports-car1.png" // use your grey car image
    bgColor="bg-blue-700"
    pattern="bg-stripes" // another custom pattern class
  />
</div>


      <SearchForm />

      {/* Popular Cars Section */}
      <div className="flex justify-between items-center mb-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-700">Popular Cars</h2>
        <button
          onClick={() => setShowAllPopular(!showAllPopular)}
          className="text-blue-500 hover:underline"
        >
          {showAllPopular ? "Show Less" : "View All"}
        </button>
      </div>
      <CarsList cars={popularCars} />

      {/* Recommended Cars Section */}
      <div className="flex justify-between items-center mb-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-700">Recommended Cars</h2>
      </div>
      <CarsList cars={recommendedCars} />

      {/* Show More Cars Button in Center */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.push("/cars")}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Show More Cars
        </button>
      </div>
    </div>
  );
}

