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
        <div className="container-custom grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
              {siteConfig.tagline}
            </span>
            <div className="space-y-3">
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl leading-tight">
                Manage tasks in Pakistan without travelling back for every follow-up.
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-white mt-4">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-base font-semibold text-slate-300 transition-colors hover:border-primary hover:text-primary"
              >
                See how it works
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-2xl bg-black/60 backdrop-blur-md px-4 py-3 shadow-sm border border-white/10">
                <CheckCircle2 className="text-green-500" size={18} />
                Updates throughout the task
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-black/60 backdrop-blur-md px-4 py-3 shadow-sm border border-white/10">
                <ShieldCheck className="text-green-500" size={18} />
                One clear point of contact
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-black/60 backdrop-blur-md px-4 py-3 shadow-sm border border-white/10">
                <Users className="text-green-500" size={18} />
                Support across major cities
              </div>
            </div>
          </div>

            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              <div className="absolute -right-10 top-8 h-48 w-48 rounded-full bg-orange-200/50 blur-3xl" aria-hidden="true" />
              <div className="absolute -left-8 bottom-8 h-48 w-48 rounded-full bg-green-200/60 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
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
                <article key={item.title} className="card-panel h-full transition-all hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white">{item.description}</p>
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
                <article key={step.number} className="card-panel h-full transition-all hover:-translate-y-2 hover:shadow-2xl">
                  <p className="text-base font-bold uppercase tracking-[0.2em] text-primary">Step {step.number}</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white">{step.description}</p>
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
                <article key={service.title} className="card-panel h-full transition-all hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white">{service.description}</p>
                </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/60 border-white/5 text-white">
        <div className="container-custom grid gap-10 py-16 md:grid-cols-3">
          <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 hover:bg-white/20 transition-all">
            <Clock3 className="text-green-400" size={32} />
            <p className="mt-6 text-2xl font-bold">Faster coordination</p>
            <p className="mt-3 text-base leading-7 text-white">No need to juggle multiple people for one task.</p>
          </div>
          <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 hover:bg-white/20 transition-all">
            <ShieldCheck className="text-green-400" size={32} />
            <p className="mt-6 text-2xl font-bold">Clear communication</p>
            <p className="mt-3 text-base leading-7 text-white">One conversation thread keeps updates and details organized.</p>
          </div>
          <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-8 hover:bg-white/20 transition-all">
            <MessageCircle className="text-green-400" size={32} />
            <p className="mt-6 text-2xl font-bold">Easy first step</p>
            <p className="mt-3 text-base leading-7 text-white">Send the city and task summary, and we will take it from there.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

