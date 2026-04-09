'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Download,
  CheckCircle,
  MapPin
} from 'lucide-react';

export default function Footer() {
  const testimonials = [
    "Mujhe urgent document submit karwana tha — 24 hours mein kaam ho gaya!",
    "Overseas hoke bhi Pakistan ka har kaam ab easy ho gaya.",
    "Reliable, fast aur bilkul tension-free service!"
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden">

      {/* 🔥 ANIMATED BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-5 pointer-events-none">
        <div className="animate-marquee text-[120px] font-extrabold flex gap-20">
          <span>
            <span className="text-orange-500">SAHULAT</span>
            <span className="text-green-500">KAAR</span>
          </span>
          <span>
            <span className="text-orange-500">SAHULAT</span>
            <span className="text-green-500">KAAR</span>
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold mb-3">
              Sahulat<span className="text-green-400">Kaar</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Pakistan mein aap ke har tasks — bina travel ke.
            </p>

            <a
              href="https://wa.me/923261440088"
              target="_blank"
              className="inline-flex items-center gap-2 mt-5 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white">Document Handling</li>
              <li className="hover:text-white">Shopping</li>
              <li className="hover:text-white">Medicine</li>
              <li className="hover:text-white">Custom Tasks</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/how-it-works">How it Works</Link></li>
              <li><Link href="/services">Services</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4 text-sm text-gray-400">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <a href="https://wa.me/923261440088" className="flex gap-2 hover:text-white">
              <MessageCircle size={16} /> WhatsApp
            </a>

            <a href="tel:+923261440088" className="flex gap-2 hover:text-white">
              <Phone size={16} /> +92 326 1440088
            </a>

            <a href="mailto:help.sahulatkaar@gmail.com" className="flex gap-2 hover:text-white">
              <Mail size={16} /> Email
            </a>

            <a href="https://instagram.com" className="flex gap-2 hover:text-white">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>

        {/* 🔥 TRUST + SLIDER */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <CheckCircle className="text-green-400 mb-2" />
            <p className="text-sm text-gray-300 font-semibold">
              Trusted by 1000+ Users
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <MapPin className="text-orange-400 mb-2" />
            <p className="text-sm text-gray-300 font-semibold">
              Lahore, Karachi, Islamabad & more
            </p>
          </div>

          {/* 🔥 AUTO SLIDER */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p className="text-sm text-gray-300 italic transition-all duration-500">
              "{testimonials[index]}"
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2024 SahulatKaar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}