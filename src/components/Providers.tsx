import { GraduationCap, Award, Languages } from 'lucide-react'

const providers = [
  {
    name: 'Dr. María Elena Rodríguez',
    title: 'MD, FAAFP',
    role: 'Lead Physician & Founder',
    bio: 'Board-certified in Family Medicine with over 18 years of experience. Dr. Rodríguez founded Vitalis to bring personalized, compassionate care to San Juan families.',
    specialties: ['Preventive Care', "Women's Health", 'Pediatrics'],
    education: 'Universidad de Puerto Rico, School of Medicine',
    initials: 'MR',
    color: 'from-primary-500 to-primary-600',
  },
  {
    name: 'Dr. Carlos Méndez Rivera',
    title: 'MD',
    role: 'Family Medicine Physician',
    bio: 'Dr. Méndez brings 12 years of expertise in managing chronic conditions and geriatric care. He is passionate about building lasting relationships with patients.',
    specialties: ['Chronic Disease', 'Geriatric Care', 'Diabetes'],
    education: 'Ponce Health Sciences University',
    initials: 'CM',
    color: 'from-accent-500 to-accent-600',
  },
  {
    name: 'Lcda. Ana Patricia Vega',
    title: 'FNP-BC',
    role: 'Family Nurse Practitioner',
    bio: "Ana Patricia is a board-certified Family Nurse Practitioner specializing in telehealth services and acute care visits. Known for her thoroughness and exceptional communication.",
    specialties: ['Telehealth', 'Acute Care', 'Health Screenings'],
    education: 'University of Puerto Rico, Medical Sciences Campus',
    initials: 'AV',
    color: 'from-rose-500 to-rose-600',
  },
]

export function Providers() {
  return (
    <section id="providers" className="section bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">
            Meet Your{' '}
            <span className="text-primary-600">Care Team</span>
          </h2>
          <p className="section-description">
            Experienced, compassionate healthcare providers dedicated to your family's wellbeing.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className="card-elevated overflow-hidden group animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Provider Photo Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${provider.color} flex items-center justify-center`}>
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                  <span className="text-4xl font-bold text-white">{provider.initials}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-warm-900">
                    {provider.name}
                  </h3>
                  <p className="text-primary-600 font-semibold">{provider.title}</p>
                  <p className="text-warm-500 text-sm">{provider.role}</p>
                </div>

                <p className="text-warm-600 text-sm leading-relaxed mb-4">
                  {provider.bio}
                </p>

                {/* Credentials */}
                <div className="space-y-3 pt-4 border-t border-warm-100">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-warm-600">{provider.education}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-wrap gap-1.5">
                      {provider.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-block bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-lg"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-sm text-warm-600">English & Spanish</span>
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
