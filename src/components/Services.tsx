import { Link } from 'react-router-dom'
import { 
  Stethoscope, 
  HeartPulse, 
  Thermometer, 
  Syringe, 
  FlaskConical, 
  Video,
  ArrowRight,
  Baby,
  Brain
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Annual Physicals',
    description: 'Comprehensive wellness exams to keep you healthy year-round. Includes vital checks, screenings, and personalized health plans.',
    color: 'primary',
  },
  {
    icon: HeartPulse,
    title: 'Chronic Care',
    description: 'Expert management of diabetes, hypertension, heart disease, and other chronic conditions with ongoing support and monitoring.',
    color: 'rose',
  },
  {
    icon: Thermometer,
    title: 'Sick Visits',
    description: 'Same-day and next-day appointments for acute illnesses, infections, injuries, and urgent health concerns.',
    color: 'orange',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Full immunization services for children and adults including flu shots, COVID-19, travel vaccines, and more.',
    color: 'accent',
  },
  {
    icon: FlaskConical,
    title: 'Labs & Referrals',
    description: 'On-site lab draws and seamless referral coordination with trusted specialists throughout Puerto Rico.',
    color: 'purple',
  },
  {
    icon: Video,
    title: 'Telehealth',
    description: 'Virtual visits from the comfort of your home. Convenient care for follow-ups, consultations, and minor concerns.',
    color: 'sky',
  },
  {
    icon: Baby,
    title: 'Pediatric Care',
    description: 'Well-child visits, developmental screenings, school physicals, and compassionate care for your little ones.',
    color: 'pink',
  },
  {
    icon: Brain,
    title: 'Mental Wellness',
    description: 'Screening and support for anxiety, depression, and stress management. Referrals to specialists when needed.',
    color: 'indigo',
  },
]

const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  primary: { bg: 'bg-primary-100', icon: 'text-primary-600', hover: 'group-hover:bg-primary-600 group-hover:text-white' },
  rose: { bg: 'bg-rose-100', icon: 'text-rose-600', hover: 'group-hover:bg-rose-600 group-hover:text-white' },
  orange: { bg: 'bg-orange-100', icon: 'text-orange-600', hover: 'group-hover:bg-orange-600 group-hover:text-white' },
  accent: { bg: 'bg-accent-100', icon: 'text-accent-600', hover: 'group-hover:bg-accent-600 group-hover:text-white' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-600', hover: 'group-hover:bg-purple-600 group-hover:text-white' },
  sky: { bg: 'bg-sky-100', icon: 'text-sky-600', hover: 'group-hover:bg-sky-600 group-hover:text-white' },
  pink: { bg: 'bg-pink-100', icon: 'text-pink-600', hover: 'group-hover:bg-pink-600 group-hover:text-white' },
  indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600', hover: 'group-hover:bg-indigo-600 group-hover:text-white' },
}

export function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Comprehensive Care for{' '}
            <span className="text-primary-600">Every Need</span>
          </h2>
          <p className="section-description">
            From preventive care to managing complex health conditions, we offer a full range of 
            primary care services to keep your whole family healthy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color]
            return (
              <div
                key={service.title}
                className="group card p-6 hover:shadow-xl cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colors.bg} ${colors.icon} ${colors.hover}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-warm-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-warm-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-warm-600 mb-6">
            Ready to schedule your visit?
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25 hover:gap-3"
          >
            Book an Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
