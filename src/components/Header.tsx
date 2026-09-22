import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, X, Phone, ChevronDown, Calendar, User, FileText, 
  CreditCard, Pill, HelpCircle, Video, Heart
} from 'lucide-react'

const mainNavLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#providers', label: 'Providers' },
  { href: '/#hours', label: 'Hours' },
]

const patientResources = [
  { href: '/forms', label: 'New Patient Forms', icon: FileText },
  { href: '/insurance', label: 'Insurance & Billing', icon: CreditCard },
  { href: '/refill', label: 'Prescription Refill', icon: Pill },
  { href: '/#faq', label: 'FAQ', icon: HelpCircle },
  { href: '/#telehealth', label: 'Telehealth', icon: Video },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsResourcesOpen(false)
  }, [location])

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        return
      }
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-soft border-b border-surface-200'
          : 'bg-white/80 backdrop-blur-md border-b border-surface-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-mint-400 rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-bold text-teal-800">Vitalis</span>
              <span className="block text-xs text-teal-600 font-medium -mt-1">Family Medicine</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href.startsWith('/#') ? '/' : link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-teal-600 hover:text-teal-800 font-medium px-4 py-2 rounded-xl hover:bg-mint-100 transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Patient Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onBlur={() => setTimeout(() => setIsResourcesOpen(false), 150)}
                className="flex items-center gap-1 text-teal-600 hover:text-teal-800 font-medium px-4 py-2 rounded-xl hover:bg-mint-100 transition-all"
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
              >
                Patient Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-card border border-surface-200 py-2 animate-fadeIn">
                  {patientResources.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href.startsWith('/#') ? '/' : item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center gap-3 px-4 py-3 text-teal-600 hover:text-teal-800 hover:bg-mint-50 transition-all"
                    >
                      <item.icon className="w-5 h-5 text-teal-500" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17875551234"
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors px-3 py-2"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(787) 555-1234</span>
            </a>
            <Link
              to="/portal"
              className="flex items-center gap-2 text-teal-700 hover:text-teal-800 px-4 py-2.5 rounded-full font-semibold border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50 transition-all"
            >
              <User className="w-4 h-4" />
              Portal
            </Link>
            <Link
              to="/book"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-mint-500 hover:from-teal-700 hover:to-mint-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:shadow-card hover:-translate-y-0.5 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-teal-600 hover:text-teal-800 transition-colors rounded-xl hover:bg-mint-100"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-surface-200 px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto shadow-elevated">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href.startsWith('/#') ? '/' : link.href}
              onClick={() => {
                handleNavClick(link.href)
                setIsMenuOpen(false)
              }}
              className="block text-teal-700 hover:text-teal-800 font-medium py-3 px-4 rounded-xl hover:bg-mint-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-2 border-t border-surface-200 mt-2">
            <p className="text-xs font-semibold text-teal-500 uppercase tracking-wider px-4 py-2">Patient Resources</p>
            {patientResources.map((item) => (
              <Link
                key={item.href}
                to={item.href.startsWith('/#') ? '/' : item.href}
                onClick={() => {
                  handleNavClick(item.href)
                  setIsMenuOpen(false)
                }}
                className="flex items-center gap-3 text-teal-700 hover:text-teal-800 font-medium py-3 px-4 rounded-xl hover:bg-mint-100 transition-colors"
              >
                <item.icon className="w-5 h-5 text-teal-500" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-surface-200 space-y-3">
            <a
              href="tel:+17875551234"
              className="flex items-center gap-3 text-teal-600 hover:text-teal-700 transition-colors py-3 px-4"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(787) 555-1234</span>
            </a>
            <Link
              to="/portal"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center text-teal-700 hover:text-teal-800 px-6 py-3 rounded-full font-semibold border-2 border-teal-200 hover:border-teal-300 hover:bg-teal-50 transition-all"
            >
              <User className="w-5 h-5" />
              Patient Portal
            </Link>
            <Link
              to="/book"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-teal-600 to-mint-500 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-card"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
