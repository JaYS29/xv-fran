import { motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ photoUrl }) {
  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{
          background: photoUrl
            ? `url(${photoUrl}) center/cover no-repeat`
            : "linear-gradient(175deg, #0c0c0c 0%, #1a1a1a 55%, #0e0e0e 100%)",
        }}
      />
      {/* subtle grain overlay */}
      <div className="hero-grain" />
      <div className="hero-vignette" />

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero-name" variants={fadeUp}>
          Fran
        </motion.h1>
        <motion.p className="hero-xv" variants={fadeUp}>
          XV Años
        </motion.p>
        <motion.div className="hero-rule" variants={scaleIn} />
        <motion.p className="hero-date" variants={fadeUp}>
          Sábado 16 de Mayo
        </motion.p>{" "}
        <motion.p className="hero-date" variants={fadeUp}>
          2026
        </motion.p>{" "}
        <br />
        <motion.p className="hero-time" variants={fadeUp}>
          20:30hs a 04:00hs
        </motion.p>
      </motion.div>
    </section>
  );
}
