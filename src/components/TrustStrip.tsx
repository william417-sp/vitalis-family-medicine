import { Shield, Calendar, Users, Clock, Award, CreditCard } from 'lucide-react'

const trustItems = [
  {
    icon: CreditCard,
    title: 'Insurance Friendly',
    description: 'We accept most major insurance plans including Triple-S, MMM, Humana, and Medicare Advantage.',
  },
  {
    icon: Calendar,
    title: 'Same-Week Openings',
    description: 'No long waits. We reserve appointments for urgent needs so you can be seen quickly.',
  },
  {
    icon: Users,
    title: 'Bilingual Staff',
    description: 'Nuestro equipo habla español e inglés. Communicate in the language you\'re most comfortable with.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Extended morning and evening hours to fit your busy schedule. Saturday availability too.',
  },
  {
    icon: Award,
    title: 'Board Certified',
    description: 'Our physicians are board-certified in Family Medicine with ongoing continuing education.',
  },
  {
    icon: Shield,
    title: 'Patient-Centered',
    description: 'Your health goals guide our care. We listen, explain, and partner with you on your wellness journey.',
  },
]

export function TrustStrip() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-200 font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Healthcare That Puts{' '}
            <span className="text-accent-300">You First</span>
          </h2>
          <p className="mt-4 text-lg text-primary-100 leading-relaxed">
            We believe quality healthcare should be accessible, affordable, and always delivered with compassion.
          </p>
        </div>

        {/* Trust Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white/20 group-hover:bg-white/30 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-primary-100 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {[
            { value: '5,000+', label: 'Happy Patients' },
            { value: '15+', label: 'Years of Care' },
            { value: '4.9', label: 'Star Rating' },
            { value: '98%', label: 'Would Recommend' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-primary-200 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
