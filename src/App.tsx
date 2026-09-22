import {
  Header,
  Hero,
  Services,
  TrustStrip,
  Providers,
  HoursLocation,
  ContactForm,
  Footer,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustStrip />
        <Providers />
        <HoursLocation />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
