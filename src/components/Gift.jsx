import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Gift.css";

export default function Gift() {
  const ref = useScrollReveal({ stagger: 0.14 });

  return (
    <section className="gift-section clip-top-right" ref={ref}>
      <div className="gift-inner">
        <p className="gift-eyebrow" data-reveal>
          Regalo
        </p>
        <div className="gift-rule" data-reveal />
        <p className="gift-message" data-reveal>
          Tu presencia es mi mejor regalo, pero si deseas colaborar con mis
          sueños, puedes hacerlo acá...
        </p>
        <div className="gift-rule" data-reveal />
        <p className="gift-detail" data-reveal>
          Alias: fran.casas.2011
        </p>
        <p className="gift-detail" data-reveal>
          CVU: 0000003100003121356803
        </p>
      </div>
    </section>
  );
}
