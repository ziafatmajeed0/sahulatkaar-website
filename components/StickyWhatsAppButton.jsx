'use client';

import { MessageCircle } from 'lucide-react';

export default function StickyWhatsAppButton() {
  return (
    <a
      href="https://wa.me/923261440088?text=Assalam%20u%20Alaikum%20-%20I%20need%20help%20with%20tasks%20in%20Pakistan"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-40 transition transform hover:scale-110 animate-pulse"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
