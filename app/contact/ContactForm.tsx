'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { buildWhatsAppUrl } from '@/data/site';

type ContactFormState = {
  name: string;
  email: string;
  city: string;
  taskDescription: string;
};

const initialState: ContactFormState = {
  name: '',
  email: '',
  city: '',
  taskDescription: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormState>(initialState);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      'Assalam o Alaikum, I need help with a task in Pakistan.',
      `Name: ${formData.name}`,
      `City: ${formData.city}`,
      formData.email ? `Email: ${formData.email}` : null,
      `Task: ${formData.taskDescription}`,
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
          Your name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ahmed Ali"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-green-100"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ahmed@example.com"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-semibold text-slate-700">
          Task city
        </label>
        <input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Karachi, Lahore, Islamabad"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-green-100"
          required
        />
      </div>

      <div>
        <label htmlFor="taskDescription" className="mb-2 block text-sm font-semibold text-slate-700">
          Task details
        </label>
        <textarea
          id="taskDescription"
          name="taskDescription"
          value={formData.taskDescription}
          onChange={handleChange}
          placeholder="Describe what needs to be done, any deadline, and any documents or proof that matter."
          rows={5}
          className="w-full resize-y rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-green-100"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primaryDark"
      >
        Send on WhatsApp
      </button>

      <p className="text-center text-sm text-slate-500">
        Share as much detail as you can. It helps us confirm the scope faster.
      </p>
    </form>
  );
}

