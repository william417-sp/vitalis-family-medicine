import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { PatientPortal } from './pages/PatientPortal'
import { BookAppointment } from './pages/BookAppointment'
import { PatientForms } from './pages/PatientForms'
import { InsuranceBilling } from './pages/InsuranceBilling'
import { PrescriptionRefill } from './pages/PrescriptionRefill'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portal/*" element={<PatientPortal />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/forms" element={<PatientForms />} />
        <Route path="/insurance" element={<InsuranceBilling />} />
        <Route path="/refill" element={<PrescriptionRefill />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}

export default App
