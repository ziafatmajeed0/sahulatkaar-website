import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/data/site';

export default function StickyWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl('Assalam o Alaikum, I need help with a task in Pakistan.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-200"
      aria-label="Start a WhatsApp conversation with SahulatKaar"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}

