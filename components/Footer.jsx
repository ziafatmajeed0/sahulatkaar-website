'use client';

import Link from 'next/link';
import { Phone, Mail, MessageCircle, Instagram, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SahulatKaar</h3>
            <p className="text-gray-300 text-sm">
              Aapkay Pakistan ke kaam ko manage karte hain. You Rest. We Run.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition">How It Works</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link href="/cities" className="hover:text-primary transition">Cities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a href="https://wa.me/923261440088" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  +92 326 1440088
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+923261440088" className="hover:text-primary transition">
                  +92 326 1440088
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:help.sahulatkaar@gmail.com" className="hover:text-primary transition">
                  help.sahulatkaar@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="https://instagram.com/sahulatkaar_3.0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  @sahulatkaar_3.0
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Download size={16} />
                <a href="https://play.google.com/store/apps/details?id=com.aak.remotepresence" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SahulatKaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
