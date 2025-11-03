import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  img: string;
}

export default function ProductCard({ name, price, img }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <img src={img} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-purple-600 font-bold">{price}</p>
      </div>
    </div>
  );
}
