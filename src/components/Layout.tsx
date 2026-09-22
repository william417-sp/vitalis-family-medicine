import { Outlet } from 'react-router-dom'
import { EmergencyBanner } from './EmergencyBanner'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <EmergencyBanner />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
