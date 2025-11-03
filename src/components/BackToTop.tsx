// components/BackToTop.tsx
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // show button after 300px scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-3 sm:p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:scale-110 transition transform duration-300 z-50
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </div>
  );
}
