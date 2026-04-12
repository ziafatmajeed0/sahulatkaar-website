import Link from 'next/link';
import { AtSign, Mail, MessageCircle, Phone } from 'lucide-react';
import { buildInstagramUrl, buildWhatsAppUrl, navLinks, siteConfig, trustPoints } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-2xl font-bold">
              Sahulat<span className="text-green-400">Kaar</span>
            </p>
            <p className="max-w-md text-sm leading-6 text-slate-300">
              {siteConfig.description}
            </p>
            <a
              href={buildWhatsAppUrl('Assalam o Alaikum, I would like to discuss a task.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <MessageCircle size={16} />
              Start on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Why People Reach Out</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
              <a
                href={buildInstagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <AtSign size={16} />
                @{siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <p>{year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
