import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl, serviceCategories, serviceProcess } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Services',
  description:
    'Explore the document support, shopping, healthcare, home, and custom task categories SahulatKaar coordinates across Pakistan.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10">
      <section className="section-shell">
        <div className="container-custom max-w-4xl py-14">
          <p className="eyebrow">Services</p>
          <h1 className="section-title mt-4">Flexible support for everyday tasks and follow-ups in Pakistan</h1>
          <p className="section-subtitle max-w-3xl">
            We coordinate practical requests through one channel. Send the task details first, and we will confirm whether it is in scope.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((service) => (
              <article key={service.title} className="card-panel h-full">
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                <ul className="mt-5 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">How a service request usually works</h2>
            <p className="section-subtitle">The process stays simple so you can get clarity quickly.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {serviceProcess.map((step, index) => (
              <article key={step} className="card-panel">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
        <div className="container-custom flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Not sure whether your request fits?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Send the city, the task summary, and any urgency details. We will tell you quickly whether we can coordinate it.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl('Assalam o Alaikum, I want to check whether this task is supported: [share task details].')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Ask about your task
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

