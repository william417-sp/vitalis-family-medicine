import { Link } from 'react-router-dom'
import { Video, Shield, Clock, CheckCircle, Monitor } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Skip the Wait',
    description: 'No traffic, no waiting rooms. Connect from home or work.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'HIPAA-compliant video platform protects your information.',
  },
  {
    icon: Monitor,
    title: 'Easy to Use',
    description: 'Works on any device — computer, tablet, or smartphone.',
  },
]

const idealFor = [
  'Follow-up appointments',
  'Medication reviews',
  'Minor illness consultations',
  'Mental health check-ins',
  'Lab result discussions',
  'Chronic care management',
  'Health questions & advice',
  'Prescription refills',
]

export function Telehealth() {
  return (
    <section id="telehealth" className="section bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="section-label">Virtual Care</span>
            <h2 className="section-title mt-4">
              Quality Healthcare,{' '}
              <span className="text-primary-600">From Anywhere</span>
            </h2>
            <p className="section-description mt-4 text-left">
              Can't make it to the office? Our secure telehealth platform brings your doctor 
              to you. Get the same personalized care from the comfort of your home.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-900">{benefit.title}</h3>
                    <p className="text-warm-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/book?type=telehealth"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary-500/25"
              >
                <Video className="w-5 h-5" />
                Book Telehealth Visit
              </Link>
              <a
                href="tel:+17875551234"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-warm-50 text-warm-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-warm-200 hover:border-primary-300 transition-all"
              >
                Call to Schedule
              </a>
            </div>
          </div>

          {/* Visual / Ideal For Card */}
          <div className="relative">
            <div className="card-elevated p-8">
              {/* Video Preview Mock */}
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="relative text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Telehealth Visit</h3>
                  <p className="text-primary-100 mt-1">Secure video consultations</p>
                </div>
              </div>

              {/* Ideal For List */}
              <h4 className="font-semibold text-warm-900 mb-4 flex items-center gap-2">
                <span className="text-primary-600">✓</span>
                Ideal for:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {idealFor.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-warm-600">
                    <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Telehealth is available for established patients. 
                  New patients should schedule an in-person visit first.
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-primary-200 rounded-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
