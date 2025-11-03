"use client";
import { useEffect, useState } from "react";

const slides = ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Smooth scroll handler (moved outside JSX for clarity)
  const handleShopNow = () => {
    const shopSection = document.getElementById("shop-section");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback if shop section isn't on this page
      window.location.href = "/shop";
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? "bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Hero text + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Covenant Fashion
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Explore the latest trends in seasonal collections
        </p>

        {/* ✅ Working Shop Now Button */}
        <button
          onClick={handleShopNow}
          className="mt-8 bg-black/70 backdrop-blur-md hover:bg-black text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
