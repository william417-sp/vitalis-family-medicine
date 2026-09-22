import { Link } from 'react-router-dom'
import { Shield, FileText, Lock, Eye, Users, Phone, ArrowLeft } from 'lucide-react'

export function PrivacyPolicy() {
  return (
    <div className="min-h-[80vh] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-warm-600 hover:text-primary-600 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-warm-900">Privacy Policy & HIPAA Notice</h1>
          <p className="text-warm-600 mt-2">
            Your privacy is important to us. Learn how we protect your health information.
          </p>
          <p className="text-sm text-warm-400 mt-4">
            Last Updated: January 1, 2024
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Lock, label: 'Privacy Policy', href: '#privacy' },
            { icon: FileText, label: 'HIPAA Notice', href: '#hipaa' },
            { icon: Eye, label: 'Your Rights', href: '#rights' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="card p-4 flex items-center gap-3 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary-600" />
              </div>
              <span className="font-semibold text-warm-900">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Privacy Policy Section */}
          <section id="privacy" className="card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-warm-900 mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-primary-600" />
              Privacy Policy
            </h2>
            
            <div className="prose prose-warm max-w-none">
              <h3 className="text-lg font-semibold text-warm-900 mt-6 mb-3">Information We Collect</h3>
              <p className="text-warm-600 mb-4">
                Vitalis Family Medicine collects personal and health information necessary to provide you 
                with quality healthcare services. This includes:
              </p>
              <ul className="list-disc list-inside text-warm-600 space-y-2 mb-6">
                <li>Personal identification information (name, date of birth, contact details)</li>
                <li>Medical history, diagnoses, treatment information, and test results</li>
                <li>Insurance and billing information</li>
                <li>Appointment and communication records</li>
              </ul>

              <h3 className="text-lg font-semibold text-warm-900 mt-6 mb-3">How We Use Your Information</h3>
              <p className="text-warm-600 mb-4">
                Your information is used to:
              </p>
              <ul className="list-disc list-inside text-warm-600 space-y-2 mb-6">
                <li>Provide and coordinate your healthcare treatment</li>
                <li>Process insurance claims and billing</li>
                <li>Communicate with you about appointments and health matters</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and patient care</li>
              </ul>

              <h3 className="text-lg font-semibold text-warm-900 mt-6 mb-3">Information Security</h3>
              <p className="text-warm-600 mb-4">
                We implement appropriate physical, technical, and administrative safeguards to protect 
                your personal health information. Our electronic systems are encrypted, access is 
                restricted to authorized personnel, and we regularly review our security practices.
              </p>
            </div>
          </section>

          {/* HIPAA Notice Section */}
          <section id="hipaa" className="card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-warm-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary-600" />
              Notice of Privacy Practices (HIPAA)
            </h2>
            
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-primary-800">
                <strong>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND 
                DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</strong>
              </p>
            </div>

            <div className="prose prose-warm max-w-none">
              <h3 className="text-lg font-semibold text-warm-900 mt-6 mb-3">Uses and Disclosures of Protected Health Information</h3>
              
              <h4 className="font-semibold text-warm-800 mt-4 mb-2">For Treatment</h4>
              <p className="text-warm-600 mb-4">
                We may use and disclose your health information to provide, coordinate, or manage your 
                healthcare and related services. This includes consultations with other healthcare 
                providers involved in your care.
              </p>

              <h4 className="font-semibold text-warm-800 mt-4 mb-2">For Payment</h4>
              <p className="text-warm-600 mb-4">
                We may use and disclose your health information to obtain payment for healthcare services 
                provided to you. This includes billing your insurance company and verifying coverage.
              </p>

              <h4 className="font-semibold text-warm-800 mt-4 mb-2">For Healthcare Operations</h4>
              <p className="text-warm-600 mb-4">
                We may use and disclose your health information in connection with our healthcare 
                operations, including quality assessment, training, and administrative activities.
              </p>

              <h4 className="font-semibold text-warm-800 mt-4 mb-2">Other Permitted Uses</h4>
              <p className="text-warm-600 mb-4">
                We may also use or disclose your information as permitted or required by law, including:
              </p>
              <ul className="list-disc list-inside text-warm-600 space-y-2 mb-6">
                <li>Public health activities and reporting</li>
                <li>Health oversight activities</li>
                <li>Judicial and administrative proceedings</li>
                <li>Law enforcement purposes when required</li>
                <li>Research (with appropriate safeguards)</li>
                <li>To avert a serious threat to health or safety</li>
              </ul>
            </div>
          </section>

          {/* Patient Rights Section */}
          <section id="rights" className="card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-warm-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary-600" />
              Your Rights
            </h2>
            
            <div className="prose prose-warm max-w-none">
              <p className="text-warm-600 mb-4">
                Under HIPAA, you have the following rights regarding your health information:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: 'Right to Access',
                    description: 'You may request access to your medical records and obtain copies.'
                  },
                  {
                    title: 'Right to Amend',
                    description: 'You may request corrections to your health information if you believe it is incorrect.'
                  },
                  {
                    title: 'Right to Accounting',
                    description: 'You may request a list of certain disclosures we have made of your health information.'
                  },
                  {
                    title: 'Right to Restrict',
                    description: 'You may request restrictions on certain uses and disclosures of your information.'
                  },
                  {
                    title: 'Right to Confidential Communications',
                    description: 'You may request that we communicate with you in a specific way or at a specific location.'
                  },
                  {
                    title: 'Right to a Paper Copy',
                    description: 'You may request a paper copy of this notice at any time.'
                  },
                ].map((right) => (
                  <div key={right.title} className="bg-warm-50 rounded-xl p-4">
                    <h4 className="font-semibold text-warm-900 mb-1">{right.title}</h4>
                    <p className="text-sm text-warm-600">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="card p-6 sm:p-8 bg-warm-50">
            <h2 className="text-xl font-bold text-warm-900 mb-4">Questions or Concerns?</h2>
            <p className="text-warm-600 mb-6">
              If you have questions about this notice or our privacy practices, or if you wish to 
              exercise any of your rights, please contact our Privacy Officer:
            </p>
            <div className="space-y-3">
              <p className="text-warm-700">
                <strong>Vitalis Family Medicine - Privacy Officer</strong>
              </p>
              <p className="text-warm-600">
                1250 Avenida Ashford, Suite 302<br />
                Condado, San Juan, PR 00907
              </p>
              <a href="tel:+17875551234" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                <Phone className="w-4 h-4" />
                (787) 555-1234
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-warm-200">
              <p className="text-sm text-warm-500">
                If you believe your privacy rights have been violated, you may file a complaint with 
                our office or with the Secretary of the U.S. Department of Health and Human Services. 
                We will not retaliate against you for filing a complaint.
              </p>
            </div>
          </section>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800 text-center">
            <strong>Demo Site Notice:</strong> This is placeholder legal content for demonstration purposes. 
            A real medical practice would have this document reviewed by legal counsel and customized 
            to their specific practices and state/federal requirements.
          </p>
        </div>
      </div>
    </div>
  )
}
