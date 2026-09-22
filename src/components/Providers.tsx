import { GraduationCap, Award, Languages } from 'lucide-react'

const providers = [
  {
    name: 'Dr. María Elena Rodríguez',
    title: 'MD, FAAFP',
    role: 'Lead Physician & Founder',
    bio: 'Board-certified in Family Medicine with over 18 years of experience. Dr. Rodríguez founded Vitalis to bring personalized, compassionate care to San Juan families. She completed her residency at the University of Puerto Rico and is fluent in English and Spanish.',
    specialties: ['Preventive Care', 'Women\'s Health', 'Pediatrics'],
    education: 'Universidad de Puerto Rico, School of Medicine',
    image: '👩‍⚕️',
  },
  {
    name: 'Dr. Carlos Méndez Rivera',
    title: 'MD',
    role: 'Family Medicine Physician',
    bio: 'Dr. Méndez brings 12 years of expertise in managing chronic conditions and geriatric care. He is passionate about building lasting relationships with patients and their families. His calm demeanor puts even the most anxious patients at ease.',
    specialties: ['Chronic Disease Management', 'Geriatric Care', 'Diabetes'],
    education: 'Ponce Health Sciences University',
    image: '👨‍⚕️',
  },
  {
    name: 'Lcda. Ana Patricia Vega',
    title: 'FNP-BC',
    role: 'Family Nurse Practitioner',
    bio: 'Ana Patricia is a board-certified Family Nurse Practitioner who specializes in telehealth services and acute care visits. She\'s known for her thoroughness and exceptional patient communication skills.',
    specialties: ['Telehealth', 'Acute Care', 'Health Screenings'],
    education: 'University of Puerto Rico, Medical Sciences Campus',
    image: '👩‍⚕️',
  },
]

export function Providers() {
  return (
    <section id="providers" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Meet Your{' '}
            <span className="text-green-600">Care Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experienced, compassionate healthcare providers dedicated to your family's wellbeing.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Provider Photo Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <span className="text-8xl">{provider.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {provider.name}
                  </h3>
                  <p className="text-green-600 font-medium">{provider.title}</p>
                  <p className="text-gray-500 text-sm">{provider.role}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {provider.bio}
                </p>

                {/* Credentials */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{provider.education}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-wrap gap-1">
                      {provider.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-600">English & Spanish</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
