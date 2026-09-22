import { 
  Stethoscope, 
  HeartPulse, 
  Thermometer, 
  Syringe, 
  FlaskConical, 
  Video,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Annual Physicals',
    description: 'Comprehensive wellness exams to keep you healthy year-round. Includes vital checks, screenings, and personalized health plans.',
    color: 'green',
  },
  {
    icon: HeartPulse,
    title: 'Chronic Care Management',
    description: 'Expert management of diabetes, hypertension, heart disease, and other chronic conditions with ongoing support.',
    color: 'red',
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
    color: 'blue',
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
    color: 'teal',
  },
]

const colorClasses = {
  green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
  orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
  blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
}

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Comprehensive Care for{' '}
            <span className="text-green-600">Every Need</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From preventive care to managing complex health conditions, we offer a full range of 
            primary care services to keep your whole family healthy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  colorClasses[service.color as keyof typeof colorClasses]
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see what you need? We offer many additional services.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            Contact us to discuss your needs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
