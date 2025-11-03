"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Smooth scroll to shop
  const handleShopNow = () => {
    const shopSection = document.getElementById("shop-section");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/shop";
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Hero text + button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12 z-20">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Covenant Fashion
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md max-w-2xl">
          Explore the latest trends in seasonal collections
        </p>
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
