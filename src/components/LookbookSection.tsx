// src/components/LookbookSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LookbookItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const lookbookItems: LookbookItem[] = [
  { id: 1, image: "/images/look1.jpg", title: "Street Elegance", description: "Bold streetwear with a luxurious touch." },
  { id: 2, image: "/images/look2.jpg", title: "Winter Chic", description: "Stay warm, stay trendy with winter essentials." },
  { id: 3, image: "/images/look3.jpg", title: "Casual Glam", description: "Everyday outfits with a glamorous edge." },
  { id: 4, image: "/images/look4.jpg", title: "Runway Ready", description: "Inspired by the latest runway collections." },
  { id: 5, image: "/images/look5.jpg", title: "Monochrome Magic", description: "Sleek black and white outfits for any occasion." },
  { id: 6, image: "/images/look6.jpg", title: "Color Pop", description: "Bright colors that turn heads." },
];

const footwearItems: LookbookItem[] = [
  { id: 7, image: "/images/footwear1.jpg", title: "Sneaker Series 2025", description: "Street-ready sneakers that stand out." },
  { id: 8, image: "/images/footwear2.jpg", title: "Elegant Heels", description: "Classy heels for any evening occasion." },
  { id: 9, image: "/images/footwear3.jpg", title: "Casual Loafers", description: "Comfortable loafers for everyday wear." },
  { id: 10, image: "/images/footwear4.jpg", title: "Boots Collection", description: "Trendy boots for all seasons." },
];

// Gradient button styles
const gradientBtnBase = "text-white px-4 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform duration-300";
const gradientBtnShop = `${gradientBtnBase} bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400`;
const gradientBtnView = `${gradientBtnBase} bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 hover:from-yellow-400 hover:via-green-400 hover:to-blue-500 transform hover:scale-105 shadow-xl`;

export default function LookbookSection() {
  return (
    <section id="lookbook" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12 sm:mb-16">
          Lookbook Collections
        </h2>

        {/* Main Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {lookbookItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer transform hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6 rounded-3xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm sm:text-base">{item.description}</p>
                <Link href="/shop">
                  <button className={`${gradientBtnShop} mt-2 sm:mt-4`}>Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footwear Highlights */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          Footwear Highlights
        </h2>
        <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-6 md:pb-8 mb-12 scrollbar-hide">
          {footwearItems.map((item) => (
            <div
              key={item.id}
              className="min-w-[200px] sm:min-w-[250px] relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer transform hover:scale-105 transition-transform duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6 rounded-3xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-200 mb-1 text-sm sm:text-base">{item.description}</p>
                <Link href="/shop/footwear">
                  <button className={`${gradientBtnShop} mt-2 sm:mt-4`}>Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Lookbook Button */}
        <div className="text-center mt-6 sm:mt-8">
          <Link href="/lookbook">
            <button className={gradientBtnView}>View Full Lookbook</button>
          </Link>
        </div>
      </div>

      {/* Floating gradient shapes */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 rounded-full opacity-15 blur-3xl animate-float-slow-slow pointer-events-none"></div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slow-slow {
          animation: float-slow-slow 12s ease-in-out infinite;
        }
        /* Hide scrollbar for Chrome, Safari, Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
