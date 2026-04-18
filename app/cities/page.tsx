import type { Metadata } from 'next';
import { ArrowRight, Building2, Globe2, MapPin } from 'lucide-react';
import { buildWhatsAppUrl, cities, regions } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';
import InteractivePakistanMap from '@/components/InteractivePakistanMap';

export const metadata: Metadata = createPageMetadata({
  title: 'Cities',
  description:
    'Browse SahulatKaar city coverage across Pakistan and message us if you need support in an area not listed yet.',
  path: '/cities',
});

export default function CitiesPage() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10 bg-transparent">
      <InteractivePakistanMap />
      <section className="section-shell overflow-hidden bg-transparent">
        <div className="container-custom relative py-14">
          <div className="relative max-w-4xl">
            <p className="eyebrow">Cities</p>
            <h1 className="section-title mt-4">Support across major Pakistani cities, with expansion based on demand</h1>
            <p className="section-subtitle max-w-3xl">
              Coverage can vary by request, but these are the cities where support is most commonly coordinated today.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-transparent text-white border-t border-white/5">
        <div className="container-custom flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Do not see your city listed?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Send the city name and task details. We can confirm whether support is currently available or being expanded there.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl('Assalam o Alaikum, I need support in this city: [city name].')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Request your city
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

