import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling our office at (787) 555-1234, using our online booking system, or through the patient portal. New patients can also fill out our online forms in advance to save time at their first visit.',
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Triple-S, MMM, Humana, Medicare Advantage, Medicaid, First Medical, and many others. We also welcome self-pay patients. Please call our office to verify your specific plan.',
  },
  {
    question: 'Do you offer telehealth appointments?',
    answer: 'Yes! We offer secure video visits for follow-ups, medication management, minor illness consultations, and more. Telehealth is available for established patients and can be scheduled through our patient portal or by calling the office.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid photo ID, your insurance card, a list of current medications (including dosages), any relevant medical records or test results, and a completed new patient registration form (available on our website).',
  },
  {
    question: 'How can I access my medical records?',
    answer: 'Established patients can access their medical records, lab results, and visit summaries through our patient portal. You can also request records by contacting our office. Records requests are processed within 3-5 business days.',
  },
  {
    question: 'What are your after-hours options?',
    answer: 'For urgent medical questions after hours, call our 24/7 nurse advice line at (787) 555-9111. For emergencies, always call 911 or go to your nearest emergency room. We do not provide emergency services at our clinic.',
  },
  {
    question: 'Do you see pediatric patients?',
    answer: 'Yes, we provide care for patients of all ages, from newborns to seniors. We offer well-child visits, immunizations, school physicals, and treatment for childhood illnesses. We truly are a family practice!',
  },
  {
    question: 'How long is the typical wait time?',
    answer: 'We respect your time and work hard to minimize wait times. Most appointments start within 15 minutes of your scheduled time. We recommend arriving 10-15 minutes early to complete any necessary paperwork.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Frequently Asked{' '}
            <span className="text-primary-600">Questions</span>
          </h2>
          <p className="section-description">
            Find answers to common questions about our practice, appointments, and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-warm-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-semibold text-warm-900 text-lg">{faq.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-warm-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div
                className={`grid transition-all duration-200 ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pl-20 text-warm-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-primary-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-warm-900 mb-2">Still have questions?</h3>
          <p className="text-warm-600 mb-6">
            Our friendly staff is here to help. Give us a call or send us a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17875551234"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Call (787) 555-1234
            </a>
            <a
              href="mailto:info@vitalisfamilymedicine.com"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-warm-50 text-warm-700 px-6 py-3 rounded-xl font-semibold border-2 border-warm-200 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
