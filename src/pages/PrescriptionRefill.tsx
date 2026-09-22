import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Pill, User, Building, MessageSquare, 
  CheckCircle, AlertCircle, Send, ArrowLeft
} from 'lucide-react'

const providers = [
  { id: 'rodriguez', name: 'Dr. María Elena Rodríguez, MD' },
  { id: 'mendez', name: 'Dr. Carlos Méndez Rivera, MD' },
  { id: 'vega', name: 'Lcda. Ana Patricia Vega, FNP-BC' },
]

export function PrescriptionRefill() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    medication: '',
    strength: '',
    provider: '',
    pharmacy: '',
    pharmacyPhone: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] py-12 px-4 flex items-center justify-center">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-success-600" />
          </div>
          <h2 className="text-2xl font-bold text-warm-900 mb-2">Refill Request Submitted!</h2>
          <p className="text-warm-600 mb-8">
            Your prescription refill request has been received. Our team will review it and 
            send the refill to your pharmacy within 1-2 business days.
          </p>

          <div className="bg-warm-50 rounded-xl p-6 text-left mb-8">
            <h3 className="font-semibold text-warm-900 mb-4">Request Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-warm-500">Medication</span>
                <span className="text-warm-900 font-medium">{formData.medication} {formData.strength}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warm-500">Pharmacy</span>
                <span className="text-warm-900 font-medium">{formData.pharmacy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warm-500">Provider</span>
                <span className="text-warm-900 font-medium">
                  {providers.find(p => p.id === formData.provider)?.name || 'Not specified'}
                </span>
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
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: '', lastName: '', dob: '', phone: '', email: '',
                  medication: '', strength: '', provider: '', pharmacy: '', pharmacyPhone: '', notes: ''
                })
              }}
              className="flex items-center justify-center gap-2 bg-white hover:bg-warm-50 text-warm-700 px-6 py-3 rounded-xl font-semibold border-2 border-warm-200 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Submit Another
            </button>
          </div>

          <p className="mt-8 text-sm text-warm-400">
            Demo: No actual refill request has been submitted. This is a simulation.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Pill className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-900">Prescription Refill</h1>
          <p className="text-warm-600 mt-2">
            Request a refill for your existing prescriptions
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <strong>Important:</strong> This form is for existing prescriptions only. 
            New medications require an appointment. Please allow 1-2 business days for processing.
            Controlled substances may require an office visit.
          </div>
        </div>

        {/* Form */}
        <div className="card-elevated p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Information */}
            <div>
              <h3 className="font-semibold text-warm-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary-500" />
                Patient Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData(prev => ({ ...prev, dob: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="input"
                    placeholder="(787) 555-0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-warm-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* Medication Information */}
            <div>
              <h3 className="font-semibold text-warm-900 mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-primary-500" />
                Medication Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Medication Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.medication}
                    onChange={(e) => setFormData(prev => ({ ...prev, medication: e.target.value }))}
                    className="input"
                    placeholder="e.g., Lisinopril"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Strength/Dosage</label>
                  <input
                    type="text"
                    value={formData.strength}
                    onChange={(e) => setFormData(prev => ({ ...prev, strength: e.target.value }))}
                    className="input"
                    placeholder="e.g., 10mg"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-warm-700 mb-1">Prescribing Provider *</label>
                  <select
                    required
                    value={formData.provider}
                    onChange={(e) => setFormData(prev => ({ ...prev, provider: e.target.value }))}
                    className="input"
                  >
                    <option value="">Select your provider</option>
                    {providers.map((provider) => (
                      <option key={provider.id} value={provider.id}>{provider.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Pharmacy Information */}
            <div>
              <h3 className="font-semibold text-warm-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary-500" />
                Pharmacy
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Pharmacy Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.pharmacy}
                    onChange={(e) => setFormData(prev => ({ ...prev, pharmacy: e.target.value }))}
                    className="input"
                    placeholder="e.g., CVS Condado"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Pharmacy Phone</label>
                  <input
                    type="tel"
                    value={formData.pharmacyPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, pharmacyPhone: e.target.value }))}
                    className="input"
                    placeholder="(787) 555-0000"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h3 className="font-semibold text-warm-900 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-500" />
                Additional Notes
              </h3>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className="input resize-none"
                rows={3}
                placeholder="Any special instructions or concerns..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Refill Request
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-warm-500">
            Questions about your prescription? Call us at{' '}
            <a href="tel:+17875551234" className="text-primary-600 hover:underline font-medium">
              (787) 555-1234
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
