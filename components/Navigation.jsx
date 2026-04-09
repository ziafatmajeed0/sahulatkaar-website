'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/Logo.jpeg" alt="SahulatKaar Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary transition">How It Works</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition">Services</Link>
            <Link href="/cities" className="text-gray-700 hover:text-primary transition">Cities</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">About</Link>
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20need%20help%20with%20tasks%20in%20Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-primary">Home</Link>
            <Link href="/how-it-works" className="block text-gray-700 hover:text-primary">How It Works</Link>
            <Link href="/services" className="block text-gray-700 hover:text-primary">Services</Link>
            <Link href="/cities" className="block text-gray-700 hover:text-primary">Cities</Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary">About</Link>
            <a
              href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20need%20help%20with%20tasks%20in%20Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-700"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
