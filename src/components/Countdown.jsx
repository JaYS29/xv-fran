import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Countdown.css";

const TARGET = new Date("2026-05-16T20:30:00-03:00");

function pad(n) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());
  const ref = useScrollReveal({ stagger: 0.1, y: 30 });

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Días", value: time.days },
    { label: "Horas", value: pad(time.hours) },
    { label: "Minutos", value: pad(time.minutes) },
    { label: "Segundos", value: pad(time.seconds) },
  ];

  return (
    <section className="countdown-section clip-top-left" ref={ref}>
      <div className="cd-inner">
        <p className="cd-eyebrow" data-reveal>
          Solo faltan
        </p>
        <div className="cd-units" data-reveal>
          {units.map((u, i) => (
            <div className="cd-unit" key={u.label}>
              <div className="cd-number">{u.value}</div>
              <div className="cd-label">{u.label}</div>
            </div>
          ))}
        </div>
        <div className="cd-rule" data-reveal />
      </div>
    </section>
  );
}
