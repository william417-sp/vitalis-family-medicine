import { Link } from 'react-router-dom'
import { Phone, Calendar, Shield, Heart, Clock, Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-100 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            {/* Bilingual Badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-primary-100 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-primary-100/50">
              <span className="text-xl">🇵🇷</span>
              <span className="text-primary-700 font-semibold">Se habla español</span>
              <span className="w-1.5 h-1.5 bg-warm-300 rounded-full" />
              <span className="text-warm-600">Bilingual Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 leading-[1.1] tracking-tight">
              Your Family's Health,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Our Priority
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-warm-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Compassionate, comprehensive primary care for every member of your family. 
              From routine check-ups to managing chronic conditions — we're here for you.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2.5 text-warm-700">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-600" />
                </div>
                <span className="font-semibold">Board Certified</span>
              </div>
              <div className="flex items-center gap-2.5 text-warm-700">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent-600" />
                </div>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary-500/30 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+17875551234"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-warm-50 text-warm-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-warm-200 hover:border-primary-300 transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5" />
                Call Office
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fadeIn stagger-2">
            <div className="relative max-w-lg mx-auto">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-warm-300/50 overflow-hidden border border-warm-100">
                {/* Header gradient */}
                <div className="h-32 bg-gradient-to-br from-primary-500 to-accent-500 relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                </div>
                
                {/* Logo */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-white">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                  <h3 className="text-2xl font-bold text-warm-900">Vitalis Family Medicine</h3>
                  <p className="text-warm-500 mt-1">Caring for San Juan Families Since 2009</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-warm-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-600">5,000+</div>
                      <div className="text-xs text-warm-500 font-medium mt-1">Patients</div>
                    </div>
                    <div className="bg-warm-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-600">15+</div>
                      <div className="text-xs text-warm-500 font-medium mt-1">Years</div>
                    </div>
                    <div className="bg-warm-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-primary-600">4.9★</div>
                      <div className="text-xs text-warm-500 font-medium mt-1">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl shadow-warm-200/50 p-4 border border-warm-100 animate-pulse-soft">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-warm-900">Same-Week</div>
                    <div className="text-sm text-warm-500">Appointments</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl shadow-warm-200/50 p-4 border border-warm-100 animate-pulse-soft" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-bold text-warm-900">Bilingual</div>
                    <div className="text-sm text-warm-500">Staff</div>
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
