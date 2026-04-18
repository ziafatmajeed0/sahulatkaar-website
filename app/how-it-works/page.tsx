import type { Metadata } from 'next';
import { MessageCircle, Search, ClipboardCheck, BellRing, FileCheck2, Smile } from 'lucide-react';
import { buildWhatsAppUrl } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'How It Works',
  description:
    'See the simple SahulatKaar workflow from initial WhatsApp message to updates, completion, and proof sharing.',
  path: '/how-it-works',
});

const steps = [
  {
    title: 'Send the task details',
    description: 'Start with the city, the task summary, any deadline, and the documents or photos that matter.',
    icon: MessageCircle,
  },
  {
    title: 'We review the scope',
    description: 'We ask follow-up questions if needed and confirm whether the task is practical and supported.',
    icon: Search,
  },
  {
    title: 'Confirm cost and next steps',
    description: 'You receive a clear quote or cost structure before the task moves forward.',
    icon: ClipboardCheck,
  },
  {
    title: 'Receive progress updates',
    description: 'We keep the communication in one place so you can see what has happened and what is next.',
    icon: BellRing,
  },
  {
    title: 'Get completion proof',
    description: 'Where relevant, we share the final status, collected documents, or proof that the task is complete.',
    icon: FileCheck2,
  },
  {
    title: 'Move on without the back-and-forth',
    description: 'The goal is simple: less stress, fewer follow-ups, and a smoother coordination process.',
    icon: Smile,
  },
] as const;

const timeline = [
  { time: 'First message', task: 'Share the task details and city' },
  { time: 'Same-day review', task: 'Receive questions, scope confirmation, and next steps' },
  { time: 'During execution', task: 'Get updates through the same WhatsApp thread' },
  { time: 'At completion', task: 'Receive the final update and proof where appropriate' },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10">
      <section className="section-shell">
        <div className="container-custom max-w-4xl py-14">
          <p className="eyebrow">How It Works</p>
          <h1 className="section-title mt-4">A clear workflow from first message to final update</h1>
          <p className="section-subtitle max-w-3xl">
            The process is designed to keep coordination simple, especially when you are managing the task from another city or country.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className="card-panel">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-primary">
                      <Icon size={22} />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Step {index + 1}</p>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-white">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">What the timeline usually feels like</h2>
            <p className="section-subtitle">Every task is different, but the communication pattern stays consistent.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.time} className="card-panel">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{item.time}</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.task}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-slate-950 text-white">
        <div className="container-custom flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Ready to send your task?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Share the city, the task summary, and the deadline if there is one. We will help you figure out the next step.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl('Assalam o Alaikum, I want to start a new task.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-black/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

