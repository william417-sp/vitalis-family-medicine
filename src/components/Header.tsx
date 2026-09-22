import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#providers', label: 'Providers' },
    { href: '#hours', label: 'Hours' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-semibold text-gray-900">Vitalis</span>
              <span className="block text-xs lg:text-sm text-green-600 font-medium -mt-1">Family Medicine</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-green-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+17875551234"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(787) 555-1234</span>
            </a>
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 hover:text-green-600 font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a
              href="tel:+17875551234"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors py-2"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(787) 555-1234</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
