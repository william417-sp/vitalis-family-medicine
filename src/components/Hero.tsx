import { Link } from 'react-router-dom'
import { Phone, Calendar, Shield, Heart, Clock, Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-mint-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint-300/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating Pills Decoration */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <div className="w-16 h-8 bg-coral-400 rounded-full rotate-45 shadow-lg opacity-80" />
      </div>
      <div className="absolute top-48 right-40 hidden lg:block">
        <div className="w-12 h-6 bg-white/40 rounded-full -rotate-12 shadow-lg" />
      </div>
      <div className="absolute bottom-40 left-20 hidden lg:block">
        <div className="w-20 h-10 bg-mint-300/60 rounded-full rotate-12 shadow-lg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fadeIn">
            {/* Bilingual Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <span className="text-xl">🇵🇷</span>
              <span className="text-white font-semibold">Se habla español</span>
              <span className="w-1.5 h-1.5 bg-coral-400 rounded-full" />
              <span className="text-mint-200">Bilingual Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Your Family's Health,{' '}
              <span className="text-mint-300">
                Our Priority
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-mint-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Compassionate, comprehensive primary care for every member of your family. 
              From routine check-ups to managing chronic conditions — we're here for you.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-mint-300" />
                </div>
                <span className="font-semibold">Board Certified</span>
              </div>
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-coral-400" />
                </div>
                <span className="font-semibold">15+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-elevated hover:-translate-y-1 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href="tel:+17875551234"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700"
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
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                {/* Header gradient */}
                <div className="h-28 bg-gradient-to-br from-mint-400/30 to-teal-500/30 relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                </div>
                
                {/* Logo */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border-4 border-white">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-mint-400 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-16 pb-8 px-8 text-center">
                  <h3 className="text-2xl font-bold text-white">Vitalis Family Medicine</h3>
                  <p className="text-mint-200 mt-1">Caring for San Juan Families Since 2009</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">5,000+</div>
                      <div className="text-xs text-mint-200 font-medium mt-1">Patients</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-xs text-mint-200 font-medium mt-1">Years</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-bold text-white">4.9★</div>
                      <div className="text-xs text-mint-200 font-medium mt-1">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-card p-4 border border-surface-200 animate-pulse-soft">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-mint-400 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-teal-800">Same-Week</div>
                    <div className="text-sm text-teal-600">Appointments</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-card p-4 border border-surface-200 animate-pulse-soft" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-teal-800">Bilingual</div>
                    <div className="text-sm text-teal-600">Staff</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-surface-50">
          <path d="M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
