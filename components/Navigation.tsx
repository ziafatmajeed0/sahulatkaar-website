'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Smartphone, X } from 'lucide-react';
import { buildWhatsAppUrl, navLinks } from '@/data/site';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-custom">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center"
            aria-label="SahulatKaar home"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/Logo.jpeg"
              alt="SahulatKaar logo"
              width={132}
              height={52}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.aak.remotepresence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primaryDark"
            >
              <Smartphone size={16} />
              Download App
            </a>
            <a
              href={buildWhatsAppUrl('Assalam o Alaikum, I need help with a task in Pakistan.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-custom flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.aak.remotepresence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primaryDark"
                onClick={() => setIsOpen(false)}
              >
                <Smartphone size={16} />
                Download App
              </a>
              <a
                href={buildWhatsAppUrl('Assalam o Alaikum, I need help with a task in Pakistan.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

