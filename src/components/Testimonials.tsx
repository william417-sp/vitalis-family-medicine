import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carmen Díaz',
    role: 'Patient since 2018',
    content: 'Dr. Rodríguez and her team have been caring for my whole family for years. They always take the time to listen and explain everything thoroughly. The bilingual staff makes communication so easy for my elderly parents.',
    rating: 5,
    initials: 'CD',
    color: 'from-primary-500 to-primary-600',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Patient since 2020',
    content: 'As someone managing diabetes, I appreciate how Dr. Méndez works with me to keep my condition under control. The telehealth option has been a game-changer for my follow-up appointments.',
    rating: 5,
    initials: 'RS',
    color: 'from-accent-500 to-accent-600',
  },
  {
    name: 'Maria Isabel Torres',
    role: 'Patient since 2019',
    content: 'Finding a doctor who truly cares is rare these days. When my son had a sudden fever, they got us in the same day. I\'m so grateful for the compassionate care my family receives here.',
    rating: 5,
    initials: 'MT',
    color: 'from-rose-500 to-rose-600',
  },
  {
    name: 'José Antonio Ruiz',
    role: 'Patient since 2021',
    content: 'The entire experience from scheduling to checkout is smooth. The office is modern and clean, wait times are reasonable, and the nursing staff is incredibly professional and kind.',
    rating: 5,
    initials: 'JR',
    color: 'from-amber-500 to-amber-600',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">
            Trusted by{' '}
            <span className="text-primary-600">San Juan Families</span>
          </h2>
          <p className="section-description">
            Hear from our patients about their experience with Vitalis Family Medicine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-6 lg:p-8 relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-warm-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-warm-100">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-warm-900">{testimonial.name}</div>
                  <div className="text-sm text-warm-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-warm-400 mt-8">
          * These testimonials are fictional examples for demonstration purposes only.
        </p>
      </div>
    </section>
  )
}
