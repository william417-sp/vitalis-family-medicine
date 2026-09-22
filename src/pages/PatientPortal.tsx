import { useState } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { 
  User, Lock, Calendar, MessageSquare, FileText, 
  LogOut, Clock, ChevronRight, CheckCircle,
  AlertCircle, Activity, Pill
} from 'lucide-react'

function PortalLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    if (email === 'demo@vitalis.com' && password === 'demo123') {
      onLogin()
    } else {
      setError('Invalid credentials. Try demo@vitalis.com / demo123')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-warm-900">Patient Portal</h1>
          <p className="text-warm-600 mt-2">
            Access your health information securely
          </p>
        </div>

        <div className="card-elevated p-8">
          {/* Demo credentials hint */}
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6">
            <p className="text-sm text-primary-700">
              <strong>Demo Mode:</strong> Use these credentials to explore<br />
              Email: <code className="bg-white px-1 rounded">demo@vitalis.com</code><br />
              Password: <code className="bg-white px-1 rounded">demo123</code>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-error-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-warm-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-icon"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-warm-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-400" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-icon"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-warm-100 text-center">
            <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              Forgot password?
            </a>
            <p className="text-warm-500 text-sm mt-3">
              New patient?{' '}
              <Link to="/forms" className="text-primary-600 hover:text-primary-700 font-medium">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortalDashboard({ onLogout }: { onLogout: () => void }) {
  const appointments = [
    { id: 1, date: 'Oct 15, 2024', time: '10:30 AM', provider: 'Dr. María E. Rodríguez', type: 'Annual Physical', status: 'confirmed' },
    { id: 2, date: 'Nov 3, 2024', time: '2:00 PM', provider: 'Lcda. Ana Patricia Vega', type: 'Telehealth Follow-up', status: 'pending' },
  ]

  const messages = [
    { id: 1, from: 'Dr. Rodríguez', subject: 'Lab Results Available', date: 'Oct 8', unread: true },
    { id: 2, from: 'Front Desk', subject: 'Appointment Reminder', date: 'Oct 5', unread: false },
  ]

  const results = [
    { id: 1, name: 'Complete Blood Count (CBC)', date: 'Oct 7, 2024', status: 'normal' },
    { id: 2, name: 'Lipid Panel', date: 'Oct 7, 2024', status: 'review' },
    { id: 3, name: 'A1C Test', date: 'Sep 15, 2024', status: 'normal' },
  ]

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-warm-900">Welcome back, María</h1>
            <p className="text-warm-600">Here's an overview of your health information</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-warm-600 hover:text-red-600 font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Calendar, label: 'Book Appointment', href: '/book', color: 'primary' },
            { icon: Pill, label: 'Request Refill', href: '/refill', color: 'accent' },
            { icon: MessageSquare, label: 'Send Message', href: '#', color: 'rose' },
            { icon: FileText, label: 'View Records', href: '#', color: 'amber' },
          ].map((action) => (
            <Link
              key={action.label}
              to={action.href}
              className={`card p-4 flex items-center gap-3 hover:shadow-md transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${action.color}-100 group-hover:bg-${action.color}-200 transition-colors`}>
                <action.icon className={`w-6 h-6 text-${action.color}-600`} />
              </div>
              <span className="font-semibold text-warm-900">{action.label}</span>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="p-5 border-b border-warm-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-warm-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  Upcoming Appointments
                </h2>
                <Link to="/book" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Schedule New
                </Link>
              </div>
              <div className="divide-y divide-warm-100">
                {appointments.map((apt) => (
                  <div key={apt.id} className="p-5 flex items-center justify-between hover:bg-warm-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary-50 rounded-xl flex flex-col items-center justify-center">
                        <span className="text-xs text-primary-600 font-medium">{apt.date.split(' ')[0]}</span>
                        <span className="text-lg font-bold text-primary-700">{apt.date.split(' ')[1].replace(',', '')}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-warm-900">{apt.type}</h3>
                        <p className="text-sm text-warm-600">{apt.provider}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-warm-400" />
                          <span className="text-sm text-warm-500">{apt.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'confirmed' 
                          ? 'bg-success-50 text-success-700' 
                          : 'bg-amber-50 text-amber-700'
                      }`}>
                        {apt.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                      <ChevronRight className="w-5 h-5 text-warm-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="card">
            <div className="p-5 border-b border-warm-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-warm-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-600" />
                Messages
                <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">1</span>
              </h2>
            </div>
            <div className="divide-y divide-warm-100">
              {messages.map((msg) => (
                <div key={msg.id} className={`p-4 hover:bg-warm-50 transition-colors cursor-pointer ${msg.unread ? 'bg-primary-50/50' : ''}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      {msg.unread && <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />}
                      <div>
                        <h4 className={`text-sm ${msg.unread ? 'font-bold text-warm-900' : 'font-medium text-warm-700'}`}>
                          {msg.subject}
                        </h4>
                        <p className="text-xs text-warm-500">From: {msg.from}</p>
                      </div>
                    </div>
                    <span className="text-xs text-warm-400">{msg.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-warm-100">
              <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1">
                View All Messages <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Lab Results */}
        <div className="mt-6 card">
          <div className="p-5 border-b border-warm-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-warm-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary-600" />
              Recent Lab Results
            </h2>
          </div>
          <div className="divide-y divide-warm-100">
            {results.map((result) => (
              <div key={result.id} className="p-5 flex items-center justify-between hover:bg-warm-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    result.status === 'normal' ? 'bg-success-50' : 'bg-amber-50'
                  }`}>
                    {result.status === 'normal' 
                      ? <CheckCircle className="w-5 h-5 text-success-600" />
                      : <AlertCircle className="w-5 h-5 text-amber-600" />
                    }
                  </div>
                  <div>
                    <h3 className="font-medium text-warm-900">{result.name}</h3>
                    <p className="text-sm text-warm-500">{result.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    result.status === 'normal' 
                      ? 'bg-success-50 text-success-700' 
                      : 'bg-amber-50 text-amber-700'
                  }`}>
                    {result.status === 'normal' ? 'Normal' : 'Review with Doctor'}
                  </span>
                  <ChevronRight className="w-5 h-5 text-warm-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Mode:</strong> This is a simulated patient portal for demonstration purposes. 
            No real patient data is stored or displayed.
          </p>
        </div>
      </div>
    </div>
  )
}

export function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <PortalLogin onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <Routes>
      <Route path="/" element={<PortalDashboard onLogout={() => setIsLoggedIn(false)} />} />
      <Route path="*" element={<Navigate to="/portal" replace />} />
    </Routes>
  )
}
