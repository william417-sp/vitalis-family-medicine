import { MapPin, Clock, Phone, Mail, Car, Navigation } from 'lucide-react'

const hours = [
  { day: 'Monday', time: '7:30 AM – 6:00 PM' },
  { day: 'Tuesday', time: '7:30 AM – 6:00 PM' },
  { day: 'Wednesday', time: '7:30 AM – 6:00 PM' },
  { day: 'Thursday', time: '7:30 AM – 6:00 PM' },
  { day: 'Friday', time: '7:30 AM – 5:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 12:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export function HoursLocation() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section id="hours" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Visit Us</span>
          <h2 className="section-title">
            Hours &{' '}
            <span className="text-primary-600">Location</span>
          </h2>
          <p className="section-description">
            Conveniently located in the heart of Condado, San Juan with free parking available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="card-elevated overflow-hidden h-[400px] lg:h-auto lg:min-h-[500px]">
            <iframe
              title="Vitalis Family Medicine Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-66.0752%2C18.4530%2C-66.0652%2C18.4630&layer=mapnik&marker=18.4580%2C-66.0702"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Hours & Contact */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-warm-900 mb-1">Our Address</h3>
                  <p className="text-warm-600">
                    1250 Avenida Ashford, Suite 302<br />
                    Condado, San Juan, PR 00907
                  </p>
                  <a
                    href="https://maps.google.com/?q=1250+Avenida+Ashford+San+Juan+PR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mt-3 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Parking Info */}
              <div className="mt-4 pt-4 border-t border-warm-100 flex items-center gap-3 text-warm-600">
                <Car className="w-5 h-5 text-accent-600" />
                <span className="text-sm">
                  <strong>Free parking</strong> available in building garage (entrance on Calle Condado)
                </span>
              </div>
            </div>

            {/* Hours Card */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-warm-900">Office Hours</h3>
              </div>

              <div className="space-y-2">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className={`flex justify-between items-center py-2.5 px-3 rounded-lg transition-colors ${
                      day === today
                        ? 'bg-primary-50 border border-primary-100'
                        : 'hover:bg-warm-50'
                    }`}
                  >
                    <span className={`font-medium ${day === today ? 'text-primary-700' : 'text-warm-800'}`}>
                      {day}
                      {day === today && (
                        <span className="ml-2 text-xs bg-primary-600 text-white px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={time === 'Closed' ? 'text-warm-400' : 'text-warm-600 font-medium'}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-warm-500 bg-warm-50 rounded-lg p-3">
                💡 Extended hours by appointment. Walk-ins welcome for sick visits during regular hours.
              </p>
            </div>

            {/* Contact Card */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-warm-900 mb-4">Quick Contact</h3>
              
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="tel:+17875551234"
                  className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-warm-500">Phone</div>
                    <div className="font-semibold text-warm-900">(787) 555-1234</div>
                  </div>
                </a>

                <a
                  href="mailto:info@vitalisfamilymedicine.com"
                  className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-warm-500">Email</div>
                    <div className="font-semibold text-warm-900 text-sm">info@vitalis...</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
