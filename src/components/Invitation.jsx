import { useState } from "react";
import RSVPModal from "./RSVPModal";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Invitation.css";

export default function Invitation() {
  const [showModal, setShowModal] = useState(false);
  const ref = useScrollReveal({ stagger: 0.15 });

  return (
    <>
      <section className="invitation-section clip-top-left" ref={ref}>
        <div className="inv-inner">
          <p className="inv-eyebrow" data-reveal>
            XV Años · 2026
          </p>
          <h2 className="inv-headline" data-reveal>
            Te invito a celebrar
            <br />
            mis quince años
          </h2>
          <div className="inv-rule" data-reveal />
          <p className="inv-sub" data-reveal>
            Confirmame tu asistencia por WhatsApp
          </p>
          <button
            className="inv-btn"
            data-reveal
            onClick={() => setShowModal(true)}
          >
            Confirmar asistencia
          </button>
        </div>
      </section>
      {showModal && <RSVPModal onClose={() => setShowModal(false)} />}
    </>
  );
}
