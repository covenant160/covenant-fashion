// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Covenant Fashion</h1>
        <ul className="flex space-x-6 text-gray-700 font-bold">
          <li>
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-purple-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#lookbook"
              className="transition-colors duration-300 hover:text-purple-600"
            >
              Lookbook
            </Link>
          </li>
          <li>
            <Link
              href="#shop"
              className="transition-colors duration-300 hover:text-purple-600"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="#news"
              className="transition-colors duration-300 hover:text-purple-600"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="transition-colors duration-300 hover:text-purple-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
