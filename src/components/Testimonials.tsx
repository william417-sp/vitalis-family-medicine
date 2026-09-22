import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carmen Díaz',
    role: 'Patient since 2018',
    content: 'Dr. Rodríguez and her team have been caring for my whole family for years. They always take the time to listen and explain everything thoroughly. The bilingual staff makes communication so easy for my elderly parents.',
    rating: 5,
    initials: 'CD',
    gradient: 'from-teal-500 to-mint-400',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Patient since 2020',
    content: 'As someone managing diabetes, I appreciate how Dr. Méndez works with me to keep my condition under control. The telehealth option has been a game-changer for my follow-up appointments.',
    rating: 5,
    initials: 'RS',
    gradient: 'from-mint-500 to-teal-400',
  },
  {
    name: 'Maria Isabel Torres',
    role: 'Patient since 2019',
    content: 'Finding a doctor who truly cares is rare these days. When my son had a sudden fever, they got us in the same day. I\'m so grateful for the compassionate care my family receives here.',
    rating: 5,
    initials: 'MT',
    gradient: 'from-coral-400 to-coral-500',
  },
  {
    name: 'José Antonio Ruiz',
    role: 'Patient since 2021',
    content: 'The entire experience from scheduling to checkout is smooth. The office is modern and clean, wait times are reasonable, and the nursing staff is incredibly professional and kind.',
    rating: 5,
    initials: 'JR',
    gradient: 'from-teal-600 to-mint-500',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section bg-gradient-to-b from-surface-50 to-mint-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Patient Stories</span>
          <h2 className="section-title">
            Trusted by{' '}
            <span className="text-gradient">San Juan Families</span>
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
              className="glass-card rounded-3xl p-6 lg:p-8 relative animate-fadeIn hover:shadow-card transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-mint-100 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-teal-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-coral-400 text-coral-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-teal-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-surface-200">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-teal-800">{testimonial.name}</div>
                  <div className="text-sm text-teal-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-teal-500 mt-8">
          * These testimonials are fictional examples for demonstration purposes only.
        </p>
      </div>
    </section>
  )
}
