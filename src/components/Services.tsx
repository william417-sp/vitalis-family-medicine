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
    gradient: 'from-teal-500 to-mint-400',
  },
  {
    icon: HeartPulse,
    title: 'Chronic Care',
    description: 'Expert management of diabetes, hypertension, heart disease, and other chronic conditions with ongoing support and monitoring.',
    gradient: 'from-coral-400 to-coral-500',
  },
  {
    icon: Thermometer,
    title: 'Sick Visits',
    description: 'Same-day and next-day appointments for acute illnesses, infections, injuries, and urgent health concerns.',
    gradient: 'from-mint-500 to-teal-400',
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Full immunization services for children and adults including flu shots, COVID-19, travel vaccines, and more.',
    gradient: 'from-teal-600 to-mint-500',
  },
  {
    icon: FlaskConical,
    title: 'Labs & Referrals',
    description: 'On-site lab draws and seamless referral coordination with trusted specialists throughout Puerto Rico.',
    gradient: 'from-mint-400 to-teal-500',
  },
  {
    icon: Video,
    title: 'Telehealth',
    description: 'Virtual visits from the comfort of your home. Convenient care for follow-ups, consultations, and minor concerns.',
    gradient: 'from-teal-500 to-teal-600',
  },
  {
    icon: Baby,
    title: 'Pediatric Care',
    description: 'Well-child visits, developmental screenings, school physicals, and compassionate care for your little ones.',
    gradient: 'from-coral-300 to-coral-400',
  },
  {
    icon: Brain,
    title: 'Mental Wellness',
    description: 'Screening and support for anxiety, depression, and stress management. Referrals to specialists when needed.',
    gradient: 'from-mint-500 to-mint-600',
  },
]

export function Services() {
  return (
    <section id="services" className="section bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Comprehensive Care for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="section-description">
            From preventive care to managing complex health conditions, we offer a full range of 
            primary care services to keep your whole family healthy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group soft-card p-6 hover:shadow-card cursor-pointer transition-all hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-teal-800 mb-2">
                {service.title}
              </h3>

              <p className="text-teal-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-teal-600 mb-6">
            Ready to schedule your visit?
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-mint-500 hover:from-teal-700 hover:to-mint-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-card hover:-translate-y-0.5 hover:gap-3"
          >
            Book an Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
