"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const footwearItems = [
  { id: 1, image: "/images/footwear1.jpg", title: "Sneaker Series 2025", price: "$89.99" },
  { id: 2, image: "/images/footwear2.jpg", title: "Elegant Heels", price: "$99.99" },
  { id: 3, image: "/images/footwear3.jpg", title: "Casual Loafers", price: "$79.99" },
  { id: 4, image: "/images/footwear4.jpg", title: "Boots Collection", price: "$119.99" },
];

export default function FootwearPage() {
  const [cart, setCart] = useState<any[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: typeof footwearItems[0]) => {
    setCart((prev) => [...prev, item]);
    alert(`${item.title} added to cart!`);
  };

  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Footwear Collection
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-14">
          Here you can browse all our sneakers, heels, and boots.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {footwearItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-zinc-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-80 object-cover rounded-t-3xl transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
