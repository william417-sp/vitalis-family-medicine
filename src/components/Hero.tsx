import { Phone, Calendar, Shield, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Bilingual Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-green-600 text-sm font-medium">🇵🇷 Se habla español</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="text-gray-600 text-sm">Bilingual Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Family's Health,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Our Priority
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Compassionate, comprehensive primary care for every member of your family. 
              From routine check-ups to managing chronic conditions — we're here for you.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Board Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">10+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-green-500/30 active:scale-95"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href="tel:+17875551234"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 transition-all hover:border-green-300 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call Office
              </a>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Placeholder for medical imagery */}
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl mb-6">
                    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 text-center">Vitalis Family Medicine</h3>
                  <p className="text-gray-500 mt-2 text-center">Caring for San Juan Families</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">5000+</div>
                      <div className="text-xs text-gray-500">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15+</div>
                      <div className="text-xs text-gray-500">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">4.9★</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Same-Week</div>
                    <div className="text-xs text-gray-500">Appointments</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-4 animate-pulse delay-150">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Insurance</div>
                    <div className="text-xs text-gray-500">Accepted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
