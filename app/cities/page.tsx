import type { Metadata } from 'next';
import { ArrowRight, Building2, Globe2, MapPin } from 'lucide-react';
import { buildWhatsAppUrl, cities, regions } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Cities',
  description:
    'Browse SahulatKaar city coverage across Pakistan and message us if you need support in an area not listed yet.',
  path: '/cities',
});

export default function CitiesPage() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10">
      <section className="section-shell overflow-hidden">
        <div className="container-custom relative py-14">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-green-100 blur-3xl" aria-hidden="true" />
          <div className="absolute left-0 top-16 h-32 w-32 rounded-full bg-orange-100 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-4xl">
            <p className="eyebrow">Cities</p>
            <h1 className="section-title mt-4">Support across major Pakistani cities, with expansion based on demand</h1>
            <p className="section-subtitle max-w-3xl">
              Coverage can vary by request, but these are the cities where support is most commonly coordinated today.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Active city list</h2>
            <p className="section-subtitle">Share the exact area when you message us so we can confirm support faster.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {cities.map((city) => (
              <article key={city.name} className="card-panel">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{city.name}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <MapPin size={14} />
                      {city.province}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-green-100 p-3 text-primary">
                    <Building2 size={18} />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4 text-sm">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.2em] text-slate-500">Coverage</p>
                    <p className="mt-2 text-slate-700">{city.coverage}</p>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.2em] text-slate-500">Areas</p>
                    <p className="mt-2 text-slate-700">{city.areas}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Regional overview</h2>
            <p className="section-subtitle">A simple way to see where requests usually come from.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {regions.map((region) => (
              <article key={region.region} className="card-panel">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-green-100 p-3 text-primary">
                    <Globe2 size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{region.region}</h3>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {region.cityNames.map((cityName) => (
                    <li key={cityName} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                      <span>{cityName}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Request your city
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

