import { useScrollReveal } from '../hooks/useScrollReveal'
import './Location.css'

const MAPS_DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=Adolfo+Alsina+1729,+Lomas+de+Zamora,+Buenos+Aires,+Argentina'

export default function Location() {
  const ref = useScrollReveal({ stagger: 0.13 })

  return (
    <section className="location-section clip-top-right" ref={ref}>
      <div className="loc-inner">
        <p className="loc-eyebrow" data-reveal>Donde</p>
        <div className="loc-rule" data-reveal />
        <h2 className="loc-venue" data-reveal>Club Social Árabe</h2>
        <p className="loc-address" data-reveal>
          Adolfo Alsina 1729 · Lomas de Zamora
        </p>

        <div className="loc-map-wrap" data-reveal>
          <iframe
            title="Club Social Árabe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5!2d-58.3945!3d-34.7620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd37e2c3a4a47%3A0x0!2sAdolfo+Alsina+1729%2C+Lomas+de+Zamora%2C+Provincia+de+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1716000000000"
            width="100%"
            height="360"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="loc-btn"
          data-reveal
        >
          Llevarme a la fiesta
        </a>
      </div>
    </section>
  )
}
