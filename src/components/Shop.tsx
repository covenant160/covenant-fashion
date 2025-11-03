// src/components/Shop.tsx
import React from "react";
import Image from "next/image";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const Shop: React.FC<ProductProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-64"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{price}</p>
        <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Shop;
