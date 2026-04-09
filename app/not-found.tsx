'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kuch Galat Ho Gaya!
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Ye page nahi milaya. Shayad aap galat link ke through aaye ho! 🤔
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition transform hover:scale-105"
          >
            🏠 Home Page Jain
          </Link>
          <a
            href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20need%20help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition transform hover:scale-105"
          >
            💬 WhatsApp Karain
          </a>
        </div>

        <div className="mt-12 text-gray-600">
          <p>Ya kisi aur page ko explore karain:</p>
          <div className="mt-4 space-x-2 text-sm">
            <Link href="/services" className="text-primary hover:underline">Services</Link>
            <span>•</span>
            <Link href="/how-it-works" className="text-primary hover:underline">How It Works</Link>
            <span>•</span>
            <Link href="/cities" className="text-primary hover:underline">Cities</Link>
            <span>•</span>
            <Link href="/about" className="text-primary hover:underline">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
