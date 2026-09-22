import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  Calendar, CheckCircle, ArrowRight, ArrowLeft,
  Video, Stethoscope, HeartPulse, Syringe, Baby, Phone
} from 'lucide-react'

type Step = 1 | 2 | 3 | 4 | 5

interface BookingData {
  visitType: string
  isTelehealth: boolean
  provider: string
  date: string
  time: string
  firstName: string
  lastName: string
  phone: string
  email: string
  dob: string
  reason: string
  isNewPatient: boolean
}

const visitTypes = [
  { id: 'annual', label: 'Annual Physical', icon: Stethoscope, description: 'Yearly wellness exam and health screening' },
  { id: 'sick', label: 'Sick Visit', icon: HeartPulse, description: 'Illness, infection, or urgent health concern' },
  { id: 'followup', label: 'Follow-up Visit', icon: Calendar, description: 'Review of previous visit or test results' },
  { id: 'vaccination', label: 'Vaccination', icon: Syringe, description: 'Flu shot, COVID-19, or other immunizations' },
  { id: 'pediatric', label: 'Pediatric Visit', icon: Baby, description: 'Well-child exam or sick visit for children' },
  { id: 'telehealth', label: 'Telehealth Consult', icon: Video, description: 'Virtual video visit from home' },
]

const providers = [
  { id: 'rodriguez', name: 'Dr. María Elena Rodríguez', title: 'MD, FAAFP', specialty: 'Family Medicine', initials: 'MR' },
  { id: 'mendez', name: 'Dr. Carlos Méndez Rivera', title: 'MD', specialty: 'Family Medicine', initials: 'CM' },
  { id: 'vega', name: 'Lcda. Ana Patricia Vega', title: 'FNP-BC', specialty: 'Nurse Practitioner', initials: 'AV' },
]

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
]

function generateNextDays(count: number) {
  const days = []
  const today = new Date()
  for (let i = 1; i <= count; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    if (date.getDay() !== 0) {
      days.push(date)
    }
  }
  return days.slice(0, count)
}

export function BookAppointment() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState<Step>(1)
  const [booking, setBooking] = useState<BookingData>({
    visitType: '',
    isTelehealth: searchParams.get('type') === 'telehealth',
    provider: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    reason: '',
    isNewPatient: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availableDays] = useState(() => generateNextDays(14))

  useEffect(() => {
    if (searchParams.get('type') === 'telehealth') {
      setBooking(prev => ({ ...prev, visitType: 'telehealth', isTelehealth: true }))
    }
  }, [searchParams])

  const updateBooking = (updates: Partial<BookingData>) => {
    setBooking(prev => ({ ...prev, ...updates }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5) as Step)
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setStep(5)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  const steps = [
    { num: 1, label: 'Visit Type' },
    { num: 2, label: 'Provider' },
    { num: 3, label: 'Date & Time' },
    { num: 4, label: 'Your Info' },
    { num: 5, label: 'Confirmation' },
  ]

  return (
    <div className="min-h-[80vh] py-12 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-900">Book an Appointment</h1>
          <p className="text-warm-600 mt-2">Schedule your visit in just a few steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8 px-4">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all ${
                step >= s.num 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-warm-100 text-warm-400'
              }`}>
                {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
              </div>
              <span className={`hidden sm:block ml-2 text-sm font-medium ${
                step >= s.num ? 'text-warm-900' : 'text-warm-400'
              }`}>{s.label}</span>
              {i < steps.length - 1 && (
                <div className={`w-8 sm:w-16 h-0.5 mx-2 ${
                  step > s.num ? 'bg-primary-600' : 'bg-warm-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="card-elevated p-6 sm:p-8">
          {/* Step 1: Visit Type */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-warm-900 mb-6">What type of visit do you need?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {visitTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      updateBooking({ 
                        visitType: type.id, 
                        isTelehealth: type.id === 'telehealth' 
                      })
                    }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      booking.visitType === type.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-warm-200 hover:border-primary-300 hover:bg-warm-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        booking.visitType === type.id ? 'bg-primary-100' : 'bg-warm-100'
                      }`}>
                        <type.icon className={`w-5 h-5 ${
                          booking.visitType === type.id ? 'text-primary-600' : 'text-warm-500'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-warm-900">{type.label}</h3>
                        <p className="text-sm text-warm-500">{type.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  disabled={!booking.visitType}
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-warm-300 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Provider */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-warm-900 mb-6">Select your provider</h2>
              <div className="space-y-4">
                {providers.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => updateBooking({ provider: provider.id })}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                      booking.provider === provider.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-warm-200 hover:border-primary-300 hover:bg-warm-50'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold ${
                      booking.provider === provider.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-warm-100 text-warm-600'
                    }`}>
                      {provider.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-warm-900">{provider.name}</h3>
                      <p className="text-sm text-warm-500">{provider.title} • {provider.specialty}</p>
                    </div>
                    {booking.provider === provider.id && (
                      <CheckCircle className="w-6 h-6 text-primary-600 ml-auto" />
                    )}
                  </button>
                ))}
                
                <button
                  onClick={() => updateBooking({ provider: 'any' })}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    booking.provider === 'any'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-warm-200 hover:border-primary-300 hover:bg-warm-50'
                  }`}
                >
                  <h3 className="font-semibold text-warm-900">First Available Provider</h3>
                  <p className="text-sm text-warm-500">See whoever is available soonest</p>
                </button>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-warm-600 hover:text-warm-900 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!booking.provider}
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-warm-300 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-warm-900 mb-6">Choose your date and time</h2>
              
              {/* Date Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-warm-700 mb-3">Select a date</h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {availableDays.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => updateBooking({ date: date.toISOString() })}
                      className={`flex-shrink-0 p-3 rounded-xl border-2 text-center min-w-[80px] transition-all ${
                        booking.date === date.toISOString()
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-warm-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-xs text-warm-500">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      <div className="text-lg font-bold text-warm-900">{date.getDate()}</div>
                      <div className="text-xs text-warm-500">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {booking.date && (
                <div className="animate-fadeIn">
                  <h3 className="font-semibold text-warm-700 mb-3">Available times for {formatDate(new Date(booking.date))}</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => updateBooking({ time })}
                        className={`p-2 rounded-lg border text-sm font-medium transition-all ${
                          booking.time === time
                            ? 'border-primary-500 bg-primary-600 text-white'
                            : 'border-warm-200 text-warm-700 hover:border-primary-300 hover:bg-warm-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-warm-600 hover:text-warm-900 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!booking.date || !booking.time}
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-warm-300 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Patient Info */}
          {step === 4 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-warm-900 mb-6">Your information</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-warm-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      value={booking.firstName}
                      onChange={(e) => updateBooking({ firstName: e.target.value })}
                      className="input"
                      placeholder="María"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-warm-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={booking.lastName}
                      onChange={(e) => updateBooking({ lastName: e.target.value })}
                      className="input"
                      placeholder="García"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) => updateBooking({ phone: e.target.value })}
                    className="input"
                    placeholder="(787) 555-0000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={booking.email}
                    onChange={(e) => updateBooking({ email: e.target.value })}
                    className="input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    value={booking.dob}
                    onChange={(e) => updateBooking({ dob: e.target.value })}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-2">Reason for Visit</label>
                  <textarea
                    value={booking.reason}
                    onChange={(e) => updateBooking({ reason: e.target.value })}
                    className="input resize-none"
                    rows={3}
                    placeholder="Briefly describe why you're coming in..."
                  />
                </div>

                <label className="flex items-center gap-3 p-4 bg-warm-50 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={booking.isNewPatient}
                    onChange={(e) => updateBooking({ isNewPatient: e.target.checked })}
                    className="w-5 h-5 rounded border-warm-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-warm-700">I am a new patient at Vitalis Family Medicine</span>
                </label>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-warm-600 hover:text-warm-900 font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!booking.firstName || !booking.lastName || !booking.phone || !booking.email || !booking.dob || isSubmitting}
                  className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-warm-300 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>Confirm Booking <CheckCircle className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="animate-fadeIn text-center py-8">
              <div className="w-20 h-20 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-900 mb-2">Appointment Requested!</h2>
              <p className="text-warm-600 mb-8 max-w-md mx-auto">
                We've received your appointment request. Our team will call you within 24 hours to confirm.
              </p>

              <div className="bg-warm-50 rounded-xl p-6 text-left max-w-sm mx-auto mb-8">
                <h3 className="font-semibold text-warm-900 mb-4">Appointment Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-warm-500">Visit Type</span>
                    <span className="text-warm-900 font-medium">
                      {visitTypes.find(v => v.id === booking.visitType)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-500">Provider</span>
                    <span className="text-warm-900 font-medium">
                      {booking.provider === 'any' ? 'First Available' : providers.find(p => p.id === booking.provider)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-500">Date</span>
                    <span className="text-warm-900 font-medium">{formatDate(new Date(booking.date))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-500">Time</span>
                    <span className="text-warm-900 font-medium">{booking.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Return Home
                </Link>
                <a
                  href="tel:+17875551234"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-warm-50 text-warm-700 px-6 py-3 rounded-xl font-semibold border-2 border-warm-200 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call to Confirm Sooner
                </a>
              </div>

              {/* Demo Notice */}
              <p className="mt-8 text-sm text-warm-400">
                Demo: No actual appointment has been created. This is a simulation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
