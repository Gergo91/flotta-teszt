import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Services from './components/Services'
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <span className="wordmark">Flotta Építő</span>
        <nav>
          <a href="#szolgaltatasok">Szolgáltatások</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>

      <footer className="site-footer">
        <p>
          Demo oldal a flotta-teszt projekthez. Nem valódi vállalkozás, az
          űrlap nem küld el semmit.
        </p>
      </footer>
    </>
  )
}

export default App
