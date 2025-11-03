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
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-full sm:w-[48%] md:w-[31%] lg:w-[23%]">
      <div className="relative w-full h-52 sm:h-64 md:h-64 lg:h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
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
