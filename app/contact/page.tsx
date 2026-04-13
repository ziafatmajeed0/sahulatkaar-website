import type { Metadata } from 'next';
import { Clock3, Mail, MapPin, MessageCircle, Phone, Smartphone } from 'lucide-react';
import ContactForm from './ContactForm';
import { buildWhatsAppUrl, faqs, siteConfig } from '@/data/site';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact SahulatKaar through WhatsApp, phone, or email and submit the details of your task in Pakistan.',
  path: '/contact',
});

const contactCards = [
  {
    title: 'WhatsApp',
    description: 'Best for new requests and updates',
    href: buildWhatsAppUrl('Assalam o Alaikum, I need help with a task in Pakistan.'),
    label: siteConfig.phone,
    icon: MessageCircle,
  },
  {
    title: 'Call',
    description: 'Useful for urgent discussion',
    href: `tel:${siteConfig.phone}`,
    label: siteConfig.phone,
    icon: Phone,
  },
  {
    title: 'Email',
    description: 'Helpful for longer written context',
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    icon: Mail,
  },
  {
    title: 'Download SahulatKaar App',
    description: 'Get our Android app from Play Store',
    href: 'https://play.google.com/store/apps/details?id=com.aak.remotepresence',
    label: 'Play Store',
    icon: Smartphone,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="space-y-6 pb-8 pt-6 md:pt-10">
      <section className="section-shell">
        <div className="container-custom max-w-4xl py-14">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title mt-4">Share the task details and we will guide the next step</h1>
          <p className="section-subtitle max-w-3xl">
            The fastest option is WhatsApp. You can also call or email if that fits the request better.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-panel block transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-primary">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{card.description}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">{card.label}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-panel">
            <h2 className="text-2xl font-semibold text-slate-900">Send your task details</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Include the city, the task summary, and any useful documents or photos. The more context you provide, the easier it is to respond clearly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <article className="card-panel">
              <div className="flex items-start gap-4">
                <Clock3 className="mt-1 text-primary" size={20} />
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Response rhythm</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Most new enquiries receive a response the same day, especially during regular working hours.
                  </p>
                </div>
              </div>
            </article>

            <article className="card-panel">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-primary" size={20} />
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Coverage</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Support is available across major Pakistani cities. If your area is not listed, message us to confirm.
                  </p>
                </div>
              </div>
            </article>

            <article className="card-panel">
              <h2 className="text-lg font-semibold text-slate-900">A good first message includes</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>The city and area where the task is needed</li>
                <li>A short summary of the task</li>
                <li>Any deadline or urgency</li>
                <li>Relevant documents, photos, or links</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-custom py-14">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-subtitle">A few common questions before you get started.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="card-panel">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

