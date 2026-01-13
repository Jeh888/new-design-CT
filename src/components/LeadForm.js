'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { getAllLocations } from '@/data/locations';

export default function LeadForm({
  preselectedService = '',
  preselectedLocation = '',
  variant = 'default',
  title = 'Request a private consultation',
  subtitle = 'Share a few details — we’ll connect you with verified practitioners.'
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    location: preselectedLocation,
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const locations = getAllLocations();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue submitting your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-porcelain-200 flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl text-ink-950">Request received</h3>
        <p className="mt-3 text-ink-700 leading-relaxed">
          Thank you — we’ll be in touch shortly to arrange your consultation.
        </p>
      </div>
    );
  }

  const compact = variant === 'compact';

  const Field = ({ label, children }) => (
    <label className="block">
      <span className="block text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2">{label}</span>
      {children}
    </label>
  );

  const inputBase =
    "w-full rounded-xl border border-ink-200 bg-white/70 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-champagne-300";

  return (
    <div className={compact ? "card p-7" : "card p-10"}>
      <div className="max-w-xl">
        <h2 className="font-display text-2xl md:text-3xl text-ink-950">{title}</h2>
        <p className="mt-3 text-ink-700 leading-relaxed">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Name">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputBase}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Phone">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputBase}
            placeholder="Mobile number"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputBase}
            placeholder="Optional"
          />
        </Field>

        <Field label="Preferred location">
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputBase}
          >
            <option value="">Select a borough</option>
            {locations.map((loc) => (
              <option key={loc.slug} value={loc.slug}>
                {loc.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Treatment">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className={inputBase}
          >
            <option value="">Select a treatment</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Additional notes">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={inputBase + " md:col-span-2"}
            placeholder="Goals, timing, or anything we should know."
          />
        </Field>

        <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-xs text-ink-500">
            By submitting, you agree to be contacted about your consultation.
          </p>
          <button type="submit" disabled={submitting} className="btn btn-primary">
            {submitting ? 'Submitting…' : 'Submit request'}
          </button>
        </div>
      </form>
    </div>
  );
}
