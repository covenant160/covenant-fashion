// src/components/Footer.tsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/CovenantMapuranga", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/covenant2337", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com/CovenantMaps", label: "Twitter" },
    { icon: FaPinterestP, href: "https://www.pinterest.com/covenantmapuranga", label: "Pinterest" },
  ];

  return (
    <footer className="bg-linear-to-r from-purple-700 via-pink-500 to-red-500 text-white py-16 mt-16 relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600 via-pink-400 to-yellow-400 opacity-20 animate-gradient-slow pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
          Covenant Fashion
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-sm">
          Elevating fashion with style, creativity, and passion. Stay trendy, stay bold.
        </p>

        {/* Footer links */}
        <div className="flex justify-center space-x-8 mb-6 text-lg font-semibold">
          {["Home", "Lookbook", "Shop", "News", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="bg-clip-text text-transparent bg-linear-to-r from-purple-300 via-pink-200 to-yellow-200 hover:from-yellow-200 hover:via-green-200 hover:to-blue-200 transition-all duration-500"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-6 text-xl">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white hover:text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-green-200 to-blue-200 transition-all duration-500 hover:scale-125 transform"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm md:text-base">© 2025 Covenant Fashion. All rights reserved.</p>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 20s ease infinite;
        }
      `}</style>
    </footer>
  );
}
