// src/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Lookbook", href: "#lookbook" },
    { name: "Shop", href: "#shop" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Covenant Fashion
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-bold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-bold flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
