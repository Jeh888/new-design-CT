'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={index} className="card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
              aria-expanded={open}
            >
              <span className="font-medium text-ink-950">{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-ink-600 transition-transform ${open ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-ink-700 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
