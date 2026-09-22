import { Phone, AlertTriangle, Clock, Stethoscope } from 'lucide-react'

export function AfterHours() {
  return (
    <section id="after-hours" className="section bg-warm-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Warning */}
        <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-6 mb-12 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Medical Emergency?</h3>
              <p className="text-red-100 leading-relaxed">
                <strong>Call 911 immediately</strong> or go to your nearest emergency room if you experience 
                chest pain, difficulty breathing, severe bleeding, stroke symptoms, or any life-threatening condition. 
                <em className="block mt-2 text-red-200">
                  Vitalis Family Medicine does not provide emergency services. Our clinic is closed evenings and Sundays.
                </em>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block text-primary-300 font-semibold text-sm uppercase tracking-wider mb-4">
            After-Hours Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Help Outside Office Hours?
          </h2>
          <p className="mt-4 text-lg text-warm-300 max-w-2xl mx-auto">
            We understand health concerns don't always happen during business hours. 
            Here's how to get the care you need when our office is closed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Nurse Line */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Nurse Advice Line</h3>
            <p className="text-warm-300 mb-4">
              Speak with a registered nurse for guidance on non-emergency health questions, 
              medication concerns, or to determine if you need urgent care.
            </p>
            <a
              href="tel:+17875559111"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              (787) 555-9111
            </a>
            <p className="text-sm text-warm-400 mt-3">
              Available 24 hours a day, 7 days a week
            </p>
          </div>

          {/* Urgent Care Options */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center mb-4">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Urgent Care Centers</h3>
            <p className="text-warm-300 mb-4">
              For non-life-threatening conditions that need prompt attention 
              (sprains, minor cuts, ear infections, UTIs), consider visiting an urgent care facility.
            </p>
            <div className="space-y-2 text-sm text-warm-300">
              <p><strong className="text-white">Centro Médico Urgent Care</strong><br />Ave. Muñoz Rivera 501, San Juan</p>
              <p><strong className="text-white">Quick Care Condado</strong><br />Calle Loíza 1752, San Juan</p>
            </div>
          </div>
        </div>

        {/* When to Call */}
        <div className="mt-12 bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-bold mb-6 text-center">When to Seek Care</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Call 911</h4>
              </div>
              <ul className="text-sm text-warm-300 space-y-1">
                <li>• Chest pain or pressure</li>
                <li>• Difficulty breathing</li>
                <li>• Signs of stroke</li>
                <li>• Severe bleeding</li>
                <li>• Loss of consciousness</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Urgent Care</h4>
              </div>
              <ul className="text-sm text-warm-300 space-y-1">
                <li>• Minor fractures/sprains</li>
                <li>• Cuts needing stitches</li>
                <li>• Ear/sinus infections</li>
                <li>• Urinary infections</li>
                <li>• High fever in adults</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold">Next-Day Appt</h4>
              </div>
              <ul className="text-sm text-warm-300 space-y-1">
                <li>• Cold/flu symptoms</li>
                <li>• Skin rashes</li>
                <li>• Minor aches/pains</li>
                <li>• Medication refills</li>
                <li>• Non-urgent questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
