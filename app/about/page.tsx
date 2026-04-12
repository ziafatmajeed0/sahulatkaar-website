import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { milestones, siteConfig, values } from '@/data/site';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn how SahulatKaar approaches remote task coordination in Pakistan with clear communication, practical support, and dependable follow-through.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10">
      <section className="section-shell">
        <div className="container-custom max-w-4xl py-14">
          <p className="eyebrow">About</p>
          <h1 className="section-title mt-4">Built for people who need reliable help on-ground in Pakistan</h1>
          <p className="section-subtitle max-w-3xl">
            {siteConfig.name} exists to make practical tasks easier to coordinate when distance, schedules, or repeated follow-up get in the way.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom grid gap-8 py-14 lg:grid-cols-2">
          <article className="card-panel">
            <h2 className="text-2xl font-semibold text-slate-900">What we are trying to solve</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Families and overseas Pakistanis often need someone dependable to coordinate a local task, handle a follow-up, or keep everyone informed. The issue is not only access. It is clarity, responsiveness, and knowing who owns the next step.
            </p>
          </article>
          <article className="card-panel">
            <h2 className="text-2xl font-semibold text-slate-900">How we work</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We keep the process straightforward: understand the request, confirm the scope, coordinate the task, and share progress updates through a single conversation channel.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Guiding values</h2>
            <p className="section-subtitle">These principles matter more than making big claims.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="card-panel">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Recent milestones</h2>
            <p className="section-subtitle">A simple view of how the service has evolved over time.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="card-panel">
                <p className="text-3xl font-bold text-primary">{milestone.year}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{milestone.achievement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

