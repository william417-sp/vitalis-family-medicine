import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-semibold text-white">Vitalis</span>
                <span className="block text-xs text-green-400 -mt-1">Family Medicine</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing compassionate, comprehensive primary care to San Juan families 
              for over 15 years. Your health is our priority.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400">🇵🇷</span>
              <span>Se habla español</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#services', label: 'Our Services' },
                { href: '#providers', label: 'Meet Our Team' },
                { href: '#hours', label: 'Hours & Location' },
                { href: '#contact', label: 'Request Appointment' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Annual Physicals',
                'Chronic Care',
                'Sick Visits',
                'Vaccinations',
                'Labs & Referrals',
                'Telehealth',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17875551234"
                  className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>(787) 555-1234</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vitalisfamilymedicine.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>info@vitalisfamilymedicine.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  1250 Avenida Ashford, Suite 302<br />
                  Condado, San Juan, PR 00907
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Mon–Fri: 7:30 AM – 6:00 PM<br />
                  Sat: 8:00 AM – 12:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo Disclaimer Banner */}
      <div className="bg-amber-500/10 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-amber-400 text-sm text-center font-medium">
            ⚠️ DEMO SITE — This is a mockup created for agency portfolio / client preview purposes. 
            Not a real medical practice. No real patient information is collected.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Vitalis Family Medicine. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 text-red-500" /> by{' '}
              <a 
                href="https://williamrosado.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
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
