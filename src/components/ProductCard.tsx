import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  img: string;
}

export default function ProductCard({ name, price, img }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105">
      {/* Responsive image with aspect ratio */}
      <div className="w-full aspect-[4/3] relative">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-purple-600 font-bold text-sm sm:text-base">{price}</p>
      </div>
    </div>
  );
}
