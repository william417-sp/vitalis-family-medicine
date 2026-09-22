import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Send, CheckCircle, Calendar, Phone, Mail, User, MessageSquare, ArrowRight } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  preferredDate: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        preferredDate: '',
        message: '',
      })
    }, 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title mt-4">
              Request an{' '}
              <span className="text-primary-600">Appointment</span>
            </h2>
            <p className="section-description mt-4 text-left">
              Ready to take the next step in your healthcare journey? Fill out the form 
              and our team will contact you within one business day to confirm your appointment.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-warm-900">Quick Scheduling</h4>
                  <p className="text-warm-600 text-sm">
                    Most requests are confirmed within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-warm-900">Need Immediate Help?</h4>
                  <p className="text-warm-600 text-sm">
                    Call us directly at{' '}
                    <a href="tel:+17875551234" className="text-primary-600 font-medium hover:underline">
                      (787) 555-1234
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Online Booking CTA */}
            <div className="mt-10 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <h4 className="font-bold text-warm-900 text-lg mb-2">Prefer to book online?</h4>
              <p className="text-warm-600 text-sm mb-4">
                Use our new online scheduling system to choose your appointment time instantly.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:gap-3"
              >
                Book Online Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Insurance Notice */}
            <div className="mt-6 p-4 bg-warm-50 border border-warm-100 rounded-xl">
              <h4 className="font-semibold text-warm-900 mb-2">Insurance Accepted</h4>
              <p className="text-warm-600 text-sm">
                We accept most major insurance plans including Triple-S, MMM, Humana, 
                Medicare Advantage, and more.{' '}
                <Link to="/insurance" className="text-primary-600 font-medium hover:underline">
                  View full list
                </Link>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-elevated p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Success State */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                <div className="w-20 h-20 bg-success-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-success-600" />
                </div>
                <h3 className="text-2xl font-bold text-warm-900 mb-2">
                  Request Received!
                </h3>
                <p className="text-warm-600 max-w-sm">
                  Thank you for your appointment request. Our team will contact you within 
                  one business day to confirm your visit.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-warm-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="input input-icon"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-warm-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(787) 555-0000"
                    className="input input-icon"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-warm-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input input-icon"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-warm-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={today}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="input input-icon"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-warm-700 mb-2">
                  Reason for Visit / Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-warm-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your healthcare needs..."
                    className="input input-icon resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary-500/25 active:scale-[0.98] disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request Appointment
                  </>
                )}
              </button>

              <p className="text-xs text-warm-500 text-center">
                By submitting this form, you agree to be contacted regarding your healthcare needs.
                This is not a confirmed appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
