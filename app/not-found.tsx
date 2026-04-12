import Link from 'next/link';
import { buildWhatsAppUrl } from '@/data/site';

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center py-16">
      <div className="section-shell max-w-2xl px-8 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">This page could not be found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The link may be outdated, or the page may have moved. You can head back to the homepage or send us a message directly.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primaryDark"
          >
            Go to home
          </Link>
          <a
            href={buildWhatsAppUrl('Assalam o Alaikum, I reached a missing page and need help.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

