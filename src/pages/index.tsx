// src/pages/index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ShopSection from "../components/ShopSection"; // ✅ use ShopSection here
import LookbookSection from "../components/LookbookSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ShopSection />  {/* ✅ changed this */}
      <LookbookSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
