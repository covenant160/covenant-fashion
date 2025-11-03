"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Street Elegance Jacket", price: "$120", image: "/images/look1.jpg" },
  { id: 2, name: "Winter Chic Coat", price: "$150", image: "/images/look2.jpg" },
  { id: 3, name: "Casual Glam Dress", price: "$90", image: "/images/look3.jpg" },
  { id: 4, name: "Monochrome Magic Suit", price: "$200", image: "/images/look5.jpg" },
  { id: 5, name: "Color Pop Hoodie", price: "$75", image: "/images/look6.jpg" },
];

export default function ShopPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [addedItem, setAddedItem] = useState<string>("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item: any) => {
    setCart((prev) => [...prev, item]);
    setAddedItem(item.name);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Our Collection
        </h1>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white px-5 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12 sm:mt-16">
          <Link href="/">
            <button className="px-6 sm:px-8 py-3 text-white font-bold text-lg rounded-full bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Add-to-cart Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center transform scale-105 transition-all">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">✅ Added to Cart</h2>
            <p className="text-gray-700 dark:text-gray-300">{addedItem} has been added to your cart.</p>
          </div>
        </div>
      )}

      {/* Floating gradients */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 rounded-full opacity-15 blur-3xl animate-float-slow pointer-events-none"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
