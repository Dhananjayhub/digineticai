"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Diginetic Logo" className="h-8 mr-2" />
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
          <Link href="/" legacyBehavior>
            <a className="hover:text-blue-600">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-blue-600">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-blue-600">Contact</a>
          </Link>
        </nav>

        <div className="hidden md:block">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md">
            Contact Now
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-semibold">
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                About
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Contact
              </a>
            </Link>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md">
              Contact Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
