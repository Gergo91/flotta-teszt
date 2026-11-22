import { useState } from 'react'
import type { FormEvent } from 'react'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  // Demo page: nothing is sent anywhere, the form only acknowledges the submit.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="kapcsolat">
      <h2>Kapcsolat</h2>
      <p className="contact-intro">
        Írja le röviden a projektet, és három munkanapon belül visszajelzünk.
      </p>

      {submitted ? (
        <p className="contact-thanks" role="status">
          Köszönjük, megkaptuk az üzenetét.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Név</label>
          <input id="name" name="name" type="text" autoComplete="name" required />

          <label htmlFor="email">E-mail cím</label>
          <input id="email" name="email" type="email" autoComplete="email" required />

          <label htmlFor="message">Miben segíthetünk?</label>
          <textarea id="message" name="message" rows={5} required />

          <button className="button" type="submit">
            Üzenet küldése
          </button>
        </form>
      )}
    </section>
  )
}

export default ContactForm
