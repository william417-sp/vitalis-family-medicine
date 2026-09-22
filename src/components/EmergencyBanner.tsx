import { AlertTriangle, Phone } from 'lucide-react'

export function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span>
          <strong>Medical Emergency?</strong> Call{' '}
          <a 
            href="tel:911" 
            className="underline underline-offset-2 hover:text-red-100 transition-colors font-bold"
          >
            911
          </a>{' '}
          immediately
        </span>
        <span className="hidden sm:inline mx-2">|</span>
        <span className="hidden sm:inline">
          After-hours nurse line:{' '}
          <a 
            href="tel:+17875559111" 
            className="underline underline-offset-2 hover:text-red-100 transition-colors"
          >
            <Phone className="w-3 h-3 inline mr-1" aria-hidden="true" />
            (787) 555-9111
          </a>
        </span>
      </div>
    </div>
  )
}
