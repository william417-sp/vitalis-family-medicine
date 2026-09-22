import { useState } from 'react'
import { 
  CreditCard, CheckCircle, Phone, Mail, Building2, 
  FileText, DollarSign, Shield, AlertCircle, Send
} from 'lucide-react'

const insurancePlans = [
  { name: 'Triple-S', types: ['PPO', 'HMO', 'Medicare Advantage'] },
  { name: 'MMM', types: ['Healthcare', 'Multi Health'] },
  { name: 'Humana', types: ['Gold Plus', 'Medicare'] },
  { name: 'First Medical', types: ['All Plans'] },
  { name: 'MCS', types: ['Classicare', 'Healthcare'] },
  { name: 'Medicare', types: ['Parts A & B', 'Advantage Plans'] },
  { name: 'Medicaid', types: ['Puerto Rico Health Insurance'] },
  { name: 'TRICARE', types: ['Prime', 'Select'] },
]

function InsuranceVerificationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    insuranceProvider: '',
    memberId: '',
    groupNumber: '',
    phone: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success-600" />
        </div>
        <h3 className="text-xl font-bold text-warm-900 mb-2">Request Submitted!</h3>
        <p className="text-warm-600 mb-6">
          We'll verify your insurance and contact you within 1-2 business days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <label className="block text-sm font-medium text-warm-700 mb-1">Insurance Provider *</label>
        <input
          type="text"
          required
          value={formData.insuranceProvider}
          onChange={(e) => setFormData(prev => ({ ...prev, insuranceProvider: e.target.value }))}
          className="input"
          placeholder="e.g., Triple-S, MMM, Humana"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Member ID *</label>
          <input
            type="text"
            required
            value={formData.memberId}
            onChange={(e) => setFormData(prev => ({ ...prev, memberId: e.target.value }))}
            className="input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Group Number</label>
          <input
            type="text"
            value={formData.groupNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, groupNumber: e.target.value }))}
            className="input"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
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
        <div>
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
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Verification Request
          </>
        )}
      </button>
    </form>
  )
}

function PayBillForm() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    amount: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-success-600" />
        </div>
        <h3 className="text-xl font-bold text-warm-900 mb-2">Payment Successful!</h3>
        <p className="text-warm-600 mb-4">
          Thank you for your payment of ${formData.amount}.
        </p>
        <p className="text-sm text-warm-500 mb-6">
          Confirmation #: VFM-{Math.random().toString(36).substring(2, 8).toUpperCase()}
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ accountNumber: '', amount: '', cardNumber: '', expiry: '', cvv: '', name: '' })
          }}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Make Another Payment
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
        <p className="text-sm text-amber-800">
          <strong>Demo Mode:</strong> This is a simulated payment form. No actual charges will be made.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Account Number *</label>
          <input
            type="text"
            required
            value={formData.accountNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, accountNumber: e.target.value }))}
            className="input"
            placeholder="Found on your statement"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Payment Amount *</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
            <input
              type="number"
              required
              min="1"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
              className="input pl-10"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-warm-700 mb-1">Card Number *</label>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
          <input
            type="text"
            required
            value={formData.cardNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
            className="input pl-10"
            placeholder="4242 4242 4242 4242"
            maxLength={19}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">Expiry Date *</label>
          <input
            type="text"
            required
            value={formData.expiry}
            onChange={(e) => setFormData(prev => ({ ...prev, expiry: e.target.value }))}
            className="input"
            placeholder="MM/YY"
            maxLength={5}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-warm-700 mb-1">CVV *</label>
          <input
            type="text"
            required
            value={formData.cvv}
            onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value }))}
            className="input"
            placeholder="123"
            maxLength={4}
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-warm-700 mb-1">Name on Card *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="input"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-success-600 hover:bg-success-700 disabled:bg-success-400 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <DollarSign className="w-5 h-5" />
            Pay ${formData.amount || '0.00'}
          </>
        )}
      </button>
    </form>
  )
}

export function InsuranceBilling() {
  const [activeTab, setActiveTab] = useState<'insurance' | 'verify' | 'pay'>('insurance')

  return (
    <div className="min-h-[80vh] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-900">Insurance & Billing</h1>
          <p className="text-warm-600 mt-2 max-w-xl mx-auto">
            View accepted insurance plans, verify your coverage, or make a payment.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            { id: 'insurance', label: 'Accepted Insurance', icon: Shield },
            { id: 'verify', label: 'Verify Coverage', icon: FileText },
            { id: 'pay', label: 'Pay Bill', icon: DollarSign },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="animate-fadeIn">
          {/* Accepted Insurance */}
          {activeTab === 'insurance' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-warm-900 mb-6">We Accept Most Major Plans</h2>
                <div className="space-y-3">
                  {insurancePlans.map((plan) => (
                    <div key={plan.name} className="card p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-warm-900">{plan.name}</h3>
                        <p className="text-sm text-warm-500">{plan.types.join(' • ')}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-success-500 ml-auto" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="card p-6">
                  <h3 className="font-semibold text-warm-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary-500" />
                    Don't See Your Plan?
                  </h3>
                  <p className="text-sm text-warm-600 mb-4">
                    We may still accept your insurance. Contact us to verify coverage before your visit.
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+17875551234" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Phone className="w-4 h-4" /> (787) 555-1234
                    </a>
                    <a href="mailto:billing@vitalisfamilymedicine.com" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Mail className="w-4 h-4" /> billing@vitalisfamilymedicine.com
                    </a>
                  </div>
                </div>

                <div className="card p-6 bg-warm-50">
                  <h3 className="font-semibold text-warm-900 mb-3">Self-Pay Patients Welcome</h3>
                  <p className="text-sm text-warm-600 mb-4">
                    No insurance? We offer competitive self-pay rates and payment plans. 
                    Ask about our discounted rates for uninsured patients.
                  </p>
                  <button
                    onClick={() => setActiveTab('pay')}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Learn about payment options →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Verify Coverage */}
          {activeTab === 'verify' && (
            <div className="max-w-xl mx-auto">
              <div className="card p-6 sm:p-8">
                <h2 className="text-xl font-bold text-warm-900 mb-2">Verify Your Insurance</h2>
                <p className="text-warm-600 text-sm mb-6">
                  Submit your insurance information and we'll verify your coverage before your appointment.
                </p>
                <InsuranceVerificationForm />
              </div>
            </div>
          )}

          {/* Pay Bill */}
          {activeTab === 'pay' && (
            <div className="max-w-xl mx-auto">
              <div className="card p-6 sm:p-8">
                <h2 className="text-xl font-bold text-warm-900 mb-2">Make a Payment</h2>
                <p className="text-warm-600 text-sm mb-6">
                  Pay your balance securely online. Your account number can be found on your statement.
                </p>
                <PayBillForm />
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-warm-500">
                  Questions about your bill? Call us at{' '}
                  <a href="tel:+17875551234" className="text-primary-600 hover:underline font-medium">
                    (787) 555-1234
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
