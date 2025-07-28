"use client";

export default function PromoCard({ title, description, buttonText, image, bgColor, pattern }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl text-white ${bgColor} ${pattern} flex flex-col md:flex-row items-center md:items-stretch min-h-[220px] p-4 md:p-6`}
    >
      {/* Content */}
      <div className="z-10 flex-1 flex flex-col justify-between md:pr-4">
        <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{title}</h2>
        <p className="mb-3 md:mb-4 text-sm md:text-base">{description}</p>
        <button className="bg-white text-black px-4 py-2 rounded hover:scale-105 transition w-full md:w-auto">
          {buttonText}
        </button>
      </div>

      {/* Car Image - responsive position */}
      <div className="relative flex justify-center md:justify-end items-end  md:w-auto mt-4 md:mt-0">
        <img
          src={image}
          alt={title}
          className="w-32 h-20 md:w-48 md:h-28 object-contain z-0 drop-shadow-lg"
        />
      </div>
    </div>
  );
}
