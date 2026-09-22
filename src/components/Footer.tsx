import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Heart, Shield } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-warm-900 text-warm-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Vitalis</span>
                <span className="block text-xs text-primary-400 font-semibold -mt-1">Family Medicine</span>
              </div>
            </Link>
            <p className="text-warm-400 text-sm leading-relaxed mb-6">
              Providing compassionate, comprehensive primary care to San Juan families 
              for over 15 years. Your health is our priority.
            </p>
            <div className="flex items-center gap-2 text-sm bg-warm-800 rounded-lg px-3 py-2 inline-flex">
              <span className="text-lg">🇵🇷</span>
              <span className="text-primary-300 font-medium">Se habla español</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-warm-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
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
                    className="text-warm-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Patient Resources</h4>
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
                    className="text-warm-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
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
                  className="flex items-start gap-3 text-warm-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">(787) 555-1234</div>
                    <div className="text-sm text-warm-500">Main Office</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17875559111"
                  className="flex items-start gap-3 text-warm-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">(787) 555-9111</div>
                    <div className="text-sm text-warm-500">After-Hours Nurse Line</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vitalisfamilymedicine.com"
                  className="flex items-start gap-3 text-warm-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>info@vitalisfamilymedicine.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  1250 Avenida Ashford, Suite 302<br />
                  Condado, San Juan, PR 00907
                </span>
              </li>
              <li className="flex items-start gap-3 text-warm-400">
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

      {/* Certifications Strip */}
      <div className="border-t border-warm-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-warm-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-400" />
              <span>HIPAA Compliant</span>
            </div>
            <span className="hidden sm:inline text-warm-700">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-400" />
              <span>Board Certified Physicians</span>
            </div>
            <span className="hidden sm:inline text-warm-700">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-400" />
              <span>ADA Accessible</span>
            </div>
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
      <div className="border-t border-warm-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-500 text-sm">
              © {currentYear} Vitalis Family Medicine. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy" className="text-warm-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-warm-700">•</span>
              <Link to="/privacy#hipaa" className="text-warm-500 hover:text-primary-400 transition-colors">
                HIPAA Notice
              </Link>
            </div>
            <p className="text-warm-500 text-sm flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 text-red-500" /> by{' '}
              <a 
                href="https://williamrosado.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
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
