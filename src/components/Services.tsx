const services = [
  {
    title: 'Generálkivitelezés',
    description:
      'Teljes körű lebonyolítás egy felelőssel: alapozástól a műszaki átadásig minden lépés nálunk fut össze.',
  },
  {
    title: 'Felújítás és átalakítás',
    description:
      'Lakó- és irodaépületek korszerűsítése lakott környezetben is, ütemezett, por- és zajcsökkentett technológiával.',
  },
  {
    title: 'Műszaki ellenőrzés',
    description:
      'Független szakértői felügyelet a saját kivitelezője mellé: mérjük a minőséget, a határidőt és a költséget.',
  },
]

function Services() {
  return (
    <section className="services" id="szolgaltatasok">
      <h2>Amiben segítünk</h2>
      <ul className="service-list">
        {services.map((service) => (
          <li className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services
