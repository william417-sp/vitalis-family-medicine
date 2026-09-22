import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Download, Eye, CheckCircle, Upload, 
  ClipboardList, Shield, User, AlertCircle, ArrowRight
} from 'lucide-react'

const forms = [
  {
    id: 'registration',
    name: 'New Patient Registration',
    description: 'Basic demographic and contact information for new patients',
    icon: User,
    required: true,
  },
  {
    id: 'medical-history',
    name: 'Medical History Form',
    description: 'Past medical conditions, surgeries, allergies, and family history',
    icon: ClipboardList,
    required: true,
  },
  {
    id: 'hipaa-consent',
    name: 'HIPAA Consent Form',
    description: 'Authorization for use and disclosure of health information',
    icon: Shield,
    required: true,
  },
  {
    id: 'insurance',
    name: 'Insurance Information Form',
    description: 'Primary and secondary insurance details',
    icon: FileText,
    required: false,
  },
]

function FormViewer({ onClose, onSubmit }: { formId: string; onClose: () => void; onSubmit: () => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'PR',
    zip: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    onSubmit()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-warm-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-warm-900">New Patient Registration Form</h2>
          <button onClick={onClose} className="text-warm-400 hover:text-warm-600 text-2xl">&times;</button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-primary-700">
              <strong>Demo Form:</strong> Fill out this form to see the submission flow. No data is actually stored.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="font-semibold text-warm-900 mb-4">Personal Information</h3>
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

            <div>
              <h3 className="font-semibold text-warm-900 mb-4">Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Street Address *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="input"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                      className="input"
                    >
                      <option value="PR">Puerto Rico</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-700 mb-1">ZIP *</label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData(prev => ({ ...prev, zip: e.target.value }))}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-warm-900 mb-4">Emergency Contact</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.emergencyName}
                    onChange={(e) => setFormData(prev => ({ ...prev, emergencyName: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.emergencyPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, emergencyPhone: e.target.value }))}
                    className="input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-warm-700 mb-1">Relationship *</label>
                  <input
                    type="text"
                    required
                    value={formData.emergencyRelation}
                    onChange={(e) => setFormData(prev => ({ ...prev, emergencyRelation: e.target.value }))}
                    className="input"
                    placeholder="Spouse, Parent, etc."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Submit Form
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export function PatientForms() {
  const [submittedForms, setSubmittedForms] = useState<string[]>([])
  const [viewingForm, setViewingForm] = useState<string | null>(null)

  const handleFormSubmit = () => {
    if (viewingForm) {
      setSubmittedForms(prev => [...prev, viewingForm])
      setViewingForm(null)
    }
  }

  return (
    <div className="min-h-[80vh] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-900">New Patient Forms</h1>
          <p className="text-warm-600 mt-2 max-w-xl mx-auto">
            Complete these forms before your first visit to save time at check-in. 
            You can fill them out online or download to print.
          </p>
        </div>

        {/* Forms List */}
        <div className="space-y-4 mb-12">
          {forms.map((form) => {
            const isSubmitted = submittedForms.includes(form.id)
            return (
              <div
                key={form.id}
                className={`card p-6 transition-all ${isSubmitted ? 'border-success-200 bg-success-50/50' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isSubmitted ? 'bg-success-100' : 'bg-primary-100'
                  }`}>
                    {isSubmitted ? (
                      <CheckCircle className="w-6 h-6 text-success-600" />
                    ) : (
                      <form.icon className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-warm-900 flex items-center gap-2">
                          {form.name}
                          {form.required && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Required</span>
                          )}
                          {isSubmitted && (
                            <span className="text-xs bg-success-100 text-success-700 px-2 py-0.5 rounded-full">Submitted</span>
                          )}
                        </h3>
                        <p className="text-sm text-warm-500 mt-1">{form.description}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {form.id === 'registration' && !isSubmitted && (
                          <button
                            onClick={() => setViewingForm(form.id)}
                            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                          >
                            <Eye className="w-4 h-4" />
                            Fill Online
                          </button>
                        )}
                        <button className="flex items-center gap-2 bg-warm-100 hover:bg-warm-200 text-warm-700 px-4 py-2 rounded-lg text-sm font-medium transition-all">
                          <Download className="w-4 h-4" />
                          PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold text-warm-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary-500" />
              What to Bring
            </h3>
            <ul className="text-sm text-warm-600 space-y-2">
              <li>• Valid photo ID (driver's license, passport, etc.)</li>
              <li>• Insurance card (front and back)</li>
              <li>• List of current medications with dosages</li>
              <li>• Completed forms (if not submitted online)</li>
              <li>• Relevant medical records from previous providers</li>
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-warm-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success-500" />
              After Submitting
            </h3>
            <p className="text-sm text-warm-600 mb-4">
              Once you've completed your forms, you're ready to schedule your first appointment!
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              Book Your First Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Mode:</strong> PDF downloads and form submissions are simulated. 
            No actual data is stored or transmitted.
          </p>
        </div>
      </div>

      {/* Form Modal */}
      {viewingForm && (
        <FormViewer
          formId={viewingForm}
          onClose={() => setViewingForm(null)}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  )
}
