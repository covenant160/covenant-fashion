// src/pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ShopSection from "../components/ShopSection";
import LookbookSection from "../components/LookbookSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Shop Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <ShopSection />
      </section>

      {/* Lookbook Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <LookbookSection />
      </section>

      {/* News Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <NewsSection />
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
