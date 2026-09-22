import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Heart, Shield } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-teal-900 to-teal-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-teal-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Vitalis</span>
                <span className="block text-sm text-mint-300 font-medium -mt-1">Family Medicine</span>
              </div>
            </Link>
            <p className="text-mint-200/80 text-sm leading-relaxed mb-6">
              Providing compassionate, comprehensive primary care to San Juan families 
              for over 15 years. Your health is our priority.
            </p>
            <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-flex">
              <span className="text-lg">🇵🇷</span>
              <span className="text-coral-300 font-medium">Se habla español</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-mint-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm font-medium">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-mint-500 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm font-medium">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/#services', label: 'Our Services' },
                { href: '/#providers', label: 'Meet Our Team' },
                { href: '/#hours', label: 'Hours & Location' },
                { href: '/book', label: 'Book Appointment' },
                { href: '/#testimonials', label: 'Patient Stories' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href.startsWith('/#') ? '/' : link.href}
                    className="text-mint-200/80 hover:text-mint-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Patient Resources</h4>
            <ul className="space-y-3">
              {[
                { href: '/portal', label: 'Patient Portal' },
                { href: '/forms', label: 'New Patient Forms' },
                { href: '/insurance', label: 'Insurance & Billing' },
                { href: '/refill', label: 'Prescription Refills' },
                { href: '/#faq', label: 'FAQ' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href.startsWith('/#') ? '/' : link.href}
                    className="text-mint-200/80 hover:text-mint-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17875551234"
                  className="flex items-start gap-3 text-mint-200/80 hover:text-mint-300 transition-colors"
                >
                  <Phone className="w-5 h-5 text-mint-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">(787) 555-1234</div>
                    <div className="text-sm text-mint-300/60">Main Office</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17875559111"
                  className="flex items-start gap-3 text-mint-200/80 hover:text-mint-300 transition-colors"
                >
                  <Phone className="w-5 h-5 text-mint-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">(787) 555-9111</div>
                    <div className="text-sm text-mint-300/60">After-Hours Nurse Line</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vitalisfamilymedicine.com"
                  className="flex items-start gap-3 text-mint-200/80 hover:text-mint-300 transition-colors"
                >
                  <Mail className="w-5 h-5 text-mint-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">info@vitalisfamilymedicine.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-mint-200/80">
                <MapPin className="w-5 h-5 text-mint-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  1250 Avenida Ashford, Suite 302<br />
                  Condado, San Juan, PR 00907
                </span>
              </li>
              <li className="flex items-start gap-3 text-mint-200/80">
                <Clock className="w-5 h-5 text-mint-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Mon–Fri: 7:30 AM – 6:00 PM<br />
                  Sat: 8:00 AM – 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-mint-300/60 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint-400" />
              <span>HIPAA Compliant</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint-400" />
              <span>Board Certified Physicians</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint-400" />
              <span>ADA Accessible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Disclaimer Banner */}
      <div className="bg-coral-500/20 border-t border-coral-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-coral-300 text-sm text-center font-medium">
            ⚠️ DEMO SITE — This is a mockup created for agency portfolio / client preview purposes. 
            Not a real medical practice. No real patient information is collected.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-mint-300/60 text-sm">
              © {currentYear} Vitalis Family Medicine. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy" className="text-mint-300/60 hover:text-mint-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/privacy#hipaa" className="text-mint-300/60 hover:text-mint-300 transition-colors">
                HIPAA Notice
              </Link>
            </div>
            <p className="text-mint-300/60 text-sm flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 text-coral-400" /> by{' '}
              <a 
                href="https://williamrosado.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mint-300 hover:text-mint-200 transition-colors"
              >
                William Rosado's Web Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
