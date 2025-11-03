"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const products: ProductProps[] = [
  { image: "/images/classic jacket.jpg", title: "Classic Jacket", price: "$79.99" },
  { image: "/images/denim jeans.jpg", title: "Denim Jeans", price: "$49.99" },
  { image: "/images/white sneakers.jpg", title: "White Sneakers", price: "$89.99" },
  { image: "/images/hoodie.jpg", title: "Hoodie", price: "$59.99" },
  { image: "/images/summer dress.jpg", title: "Summer Dress", price: "$69.99" },
  { image: "/images/leather boots.jpg", title: "Leather Boots", price: "$119.99" },
];

export default function ShopSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null);

  const handleAddToCart = (product: ProductProps) => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");
    existing.push(product);
    localStorage.setItem("cart", JSON.stringify(existing));
    alert(`${product.title} added to cart!`);
  };

  return (
    <section
      id="shop"
      className="relative py-20 bg-linear-to-b from-zinc-100 via-white to-zinc-50 dark:from-black dark:via-zinc-900 dark:to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-14 tracking-wide uppercase">
          <span className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Shop the Latest
          </span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-zinc-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(item)}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-80 object-cover rounded-t-3xl transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Add to Cart
                </button>
              </div>

              <div
                onClick={() => setSelectedProduct(item)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center cursor-pointer"
              >
                <p className="text-white text-sm sm:text-base uppercase tracking-widest">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              width={400}
              height={400}
              className="rounded-2xl mb-4 sm:mb-6 mx-auto"
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">
              {selectedProduct.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">{selectedProduct.price}</p>
            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
