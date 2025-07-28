export const carTypes = ["Sedan", "SUV", "Hatchback", "Van"];

export const priceRanges = [
  { label: "$0 - $50", value: [0, 50] },
  { label: "$50 - $100", value: [50, 100] },
  { label: "$100 - $150", value: [100, 150] },
];

export const features = ["Automatic", "Manual", "Electric", "Hybrid", "ACC", "GPS", "ABS", "Rear Camera", "Bluetooth", "Air Conditioning"];

const cars = [
  {
    id: "2",
    name: "Toyota Corolla",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: 5,
    price: 50,
    image: "/images/toyota-corolla.jpg",
    liked: true,
    features: [
      "Air Conditioning",
      "Bluetooth",
      "GPS",
      "ABS",
      "ACC",
      "Rear Camera"
    ],
    description: "A comfortable and efficient sedan with great fuel economy.",
    gallery: [
      "/images/toyota-corolla.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "2",
    name: "Tesla Model S",
    type: "Sedan",
    fuel: "Electric",
    transmission: "Automatic",
    capacity: 5,
    price: 100,
    image: "/images/tesla-model.jpg",
    liked: true,
    features: ["Automatic", "Electric", "GPS", "ACC", "Rear Camera"],
    description: "A fully electric luxury sedan with impressive range and cutting-edge technology.",
    gallery: [
      "/images/tesla-model.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "3",
    name: "BMW X5",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Manual",
    capacity: 7,
    price: 120,
    image: "/images/bmw.jpg",
    liked: false,
    features: ["Manual", "ABS", "GPS"],
    description: "A luxurious and spacious SUV with off-road capability and sporty handling.",
    gallery: [
      "/images/bmw.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "4",
    name: "Audi A4",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: 5,
    price: 95,
    image: "/images/car3.jpg",
    liked: true,
    features: ["Automatic", "Hybrid", "ACC", "Bluetooth"],
    description: "A refined and stylish sedan with advanced driver-assist features and smooth performance.",
    gallery: [
      "/images/car3.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "5",
    name: "Toyota Fortuner",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    capacity: 7,
    price: 130,
    image: "/images/Toyota-Fortuner.jpg",
    liked: false,
    features: ["Automatic", "ABS", "Air Conditioning", "GPS"],
    description: "A rugged and reliable SUV built for adventure and long-distance travel.",
    gallery: [
      "/images/Toyota-Fortuner.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "6",
    name: "Honda Civic",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Manual",
    capacity: 5,
    price: 85,
    image: "/images/civic.jpg",
    liked: false,
    features: ["Manual", "Bluetooth", "GPS"],
    description: "A stylish and efficient sedan that offers comfort, control, and performance.",
    gallery: [
      "/images/civic.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "7",
    name: "Kia Sportage",
    type: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: 5,
    price: 110,
    image: "/images/Kia-Sportage.jpg",
    liked: false,
    features: ["Automatic", "Hybrid", "Rear Camera", "ACC"],
    description: "A modern compact SUV with advanced safety features and dynamic design.",
    gallery: [
      "/images/Kia-Sportage.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "8",
    name: "Hyundai Sonata",
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    capacity: 5,
    price: 90,
    image: "/images/Hyundai-Sonata.jpg",
    liked: false,
    features: ["Automatic", "ACC", "Bluetooth"],
    description: "A premium midsize sedan with cutting-edge safety and a sleek profile.",
    gallery: [
      "/images/Hyundai-Sonata.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "9",
    name: "Range Rover Evoque",
    type: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    capacity: 5,
    price: 150,
    image: "/images/Range-Rover-Evoque.jpg",
    liked: false,
    features: ["Automatic", "Electric", "ACC", "Rear Camera", "GPS"],
    description: "A compact luxury SUV with iconic design, power, and refined interior.",
    gallery: [
      "/images/Range-Rover-Evoque.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "10",
    name: "Volkswagen Golf",
    type: "Hatchback",
    fuel: "Petrol",
    transmission: "Manual",
    capacity: 5,
    price: 70,
    image: "/images/Volkswagen-Golf.jpg",
    liked: true,
    features: ["Manual", "ABS", "Bluetooth"],
    description: "A reliable and fun-to-drive hatchback perfect for city driving.",
    gallery: [
      "/images/Volkswagen-Golf.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  },
  {
    id: "11",
    name: "Van",
    type: "van",
    fuel: "Petrol",
    transmission: "Manual",
    capacity: 10,
    price: 100,
    image: "/images/van.jpg",
    liked: true,
    features: ["Manual", "ABS", "Bluetooth"],
    description: "A reliable and fun-to-drive hatchback perfect for city driving.",
    gallery: [
      "/images/van.jpg",
      "/images/intr.jpg",
      "/images/back.jpg"
    ]
  }
];

export default cars;
