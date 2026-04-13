import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock3, MessageCircle, ShieldCheck, Smartphone, Users } from 'lucide-react';
import { buildWhatsAppUrl, homePainPoints, homeServices, homeSteps, siteConfig } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Remote task support across Pakistan',
  description:
    'Coordinate errands, document follow-ups, shopping, and family support tasks in Pakistan through a simple WhatsApp-first workflow.',
  path: '/',
});

export default function Home() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10">
      <section className="section-shell overflow-hidden">
        <div className="container-custom grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
              {siteConfig.tagline}
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Manage tasks in Pakistan without travelling back for every follow-up.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                SahulatKaar helps families, professionals, and overseas Pakistanis coordinate practical tasks through one
                clear WhatsApp channel.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=com.aak.remotepresence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors shadow-sm hover:bg-primaryDark"
              >
                <Smartphone size={18} />
                Download App
              </a>
              <a
                href={buildWhatsAppUrl('Assalam o Alaikum, I need help with a task in Pakistan.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary"
              >
                See how it works
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-200">
                <CheckCircle2 className="text-green-600" size={18} />
                Updates throughout the task
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-200">
                <ShieldCheck className="text-green-600" size={18} />
                One clear point of contact
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-200">
                <Users className="text-green-600" size={18} />
                Support across major cities
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 top-8 h-48 w-48 rounded-full bg-orange-200/50 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-8 bottom-8 h-48 w-48 rounded-full bg-green-200/60 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/hero-image.png"
                alt="A representative customer support and task coordination visual for SahulatKaar"
                width={600}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Why people use SahulatKaar</h2>
            <p className="section-subtitle">
              The challenge is rarely the task itself. It is the distance, the coordination, and the repeated follow-up.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homePainPoints.map((item) => (
              <article key={item.title} className="card-panel">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">A simple process</h2>
            <p className="section-subtitle">You send the task, we coordinate the work, and you stay informed.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeSteps.map((step) => (
              <article key={step.number} className="card-panel">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Step {step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Tasks we commonly support</h2>
            <p className="section-subtitle">
              These are the most common categories, but the best way to confirm your case is to send the details on WhatsApp.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((service) => (
              <article key={service.title} className="card-panel">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
        <div className="container-custom grid gap-8 py-12 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Clock3 className="text-green-400" size={22} />
            <p className="mt-4 text-lg font-semibold">Faster coordination</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">No need to juggle multiple people for one task.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <ShieldCheck className="text-green-400" size={22} />
            <p className="mt-4 text-lg font-semibold">Clear communication</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">One conversation thread keeps updates and details organized.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <MessageCircle className="text-green-400" size={22} />
            <p className="mt-4 text-lg font-semibold">Easy first step</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Send the city and task summary, and we will take it from there.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

