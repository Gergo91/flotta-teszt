import heroImg from '../assets/hero.jpg'

function Hero() {
  return (
    <section className="hero">
      <img className="hero-image" src={heroImg} alt="" width="1536" height="1024" />
      <div className="hero-content">
        <p className="eyebrow">Generálkivitelezés 2004 óta</p>
        <h1>Épületek, amik kiállják az időt</h1>
        <p className="lead">
          Tervezéstől a kulcsátadásig egy csapat kíséri végig a projektet.
          Fix határidő, átlátható költségvetés, heti állapotjelentés.
        </p>
        <a className="button" href="#kapcsolat">
          Kérek ajánlatot
        </a>
      </div>
    </section>
  )
}

export default Hero
