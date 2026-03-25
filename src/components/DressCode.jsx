import { useScrollReveal } from "../hooks/useScrollReveal";
import "./DressCode.css";

export default function DressCode() {
  const ref = useScrollReveal({ stagger: 0.14 });

  return (
    <section className="dresscode-section clip-top-right" ref={ref}>
      <div className="dc-inner">
        <p className="dc-eyebrow" data-reveal>
          Dress Code
        </p>
        <div className="dc-rule" data-reveal />
        <h2 className="dc-title" data-reveal>
          Elegante Sport
        </h2>
        <div className="dc-rule" data-reveal />
        <p className="dc-no-label" data-reveal>
          Por favor evitar los colores
        </p>
        <div className="dc-colors" data-reveal>
          <span>Blanco</span>
          <span className="dc-sep">—</span>
          <span>Verde</span>
          <span className="dc-sep">—</span>
          <span>Azul</span>
        </div>
      </div>
    </section>
  );
}
