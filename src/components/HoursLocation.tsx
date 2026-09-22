import { MapPin, Clock, Phone, Mail, Car } from 'lucide-react'

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
    <section id="hours" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Hours &{' '}
            <span className="text-green-600">Location</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Conveniently located in the heart of Condado, San Juan with free parking available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
            <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Vitalis Family Medicine
              </h3>
              <p className="text-gray-600 mb-4">
                1250 Avenida Ashford, Suite 302<br />
                Condado, San Juan, PR 00907
              </p>
              <a
                href="https://maps.google.com/?q=1250+Avenida+Ashford+San+Juan+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
              <p className="mt-6 text-sm text-gray-500 flex items-center gap-2">
                <Car className="w-4 h-4" />
                Free parking in building garage
              </p>
            </div>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-8">
            {/* Hours Card */}
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
              </div>

              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                      day === today
                        ? 'bg-green-100 text-green-800'
                        : 'text-gray-600'
                    }`}
                  >
                    <span className={`font-medium ${day === today ? 'text-green-800' : 'text-gray-800'}`}>
                      {day}
                      {day === today && (
                        <span className="ml-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={time === 'Closed' ? 'text-gray-400' : ''}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-500">
                * Extended hours by appointment. Walk-ins welcome for sick visits.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+17875551234"
                  className="flex items-center gap-4 p-3 bg-white rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-semibold text-gray-800">(787) 555-1234</div>
                  </div>
                </a>

                <a
                  href="mailto:info@vitalisfamilymedicine.com"
                  className="flex items-center gap-4 p-3 bg-white rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold text-gray-800">info@vitalisfamilymedicine.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-semibold text-gray-800">
                      1250 Avenida Ashford, Suite 302<br />
                      <span className="font-normal text-gray-600">Condado, San Juan, PR 00907</span>
                    </div>
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
