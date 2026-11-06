import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Compass,
  Target,
  Layers3,
  MoveUpRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const principles = [
  {
    number: "01",
    title: "Think Beyond",
    description:
      "We look beyond immediate opportunities and focus on possibilities that create lasting value.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Build with Purpose",
    description:
      "Every venture begins with a clear direction, thoughtful decisions and a reason to grow.",
    icon: Target,
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "We believe progress comes from shared effort, continuous learning and the courage to evolve.",
    icon: Layers3,
  },
];

const approachItems = [
  "Independent thinking",
  "Purpose-led ventures",
  "Long-term perspective",
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

.about-page {
  --orange: #E96A24;
  --orange-dark: #C94B12;
  --orange-mid: #F28A42;
  --orange-light: #F8B078;
  --cream: #FFF9F3;
  --peach: #FCE6D5;
  --muted: #98684E;
  --ink: #783311;

  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

.about-page * {
  box-sizing: border-box;
}

.about-page a {
  color: inherit;
  text-decoration: none;
}

.about-page .serif {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}

.about-page .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.8px;
  text-transform: uppercase;
}

.about-page .eyebrow::before {
  content: "";
  width: 28px;
  height: 1px;
  background: currentColor;
}

/* HERO */

.about-hero {
  min-height: 650px;
  padding: 110px 9% 95px;
  display: flex;
  align-items: center;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  color: var(--cream);
  background:
    radial-gradient(ellipse at 78% 42%, rgba(255,220,187,.28), transparent 38%),
    linear-gradient(115deg, #C94B12 0%, #E96A24 53%, #F28A42 100%);
}

.about-hero::before {
  content: "";
  position: absolute;
  width: 570px;
  height: 570px;
  right: -100px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid rgba(255,249,243,.15);
  border-radius: 50%;
  z-index: -1;
}

.about-hero::after {
  content: "";
  position: absolute;
  width: 430px;
  height: 430px;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid rgba(255,249,243,.13);
  border-radius: 50%;
  z-index: -1;
}

.about-hero-glow {
  position: absolute;
  width: 450px;
  height: 450px;
  right: 2%;
  top: 10%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,230,207,.25), transparent 68%);
  filter: blur(10px);
  animation: heroGlow 8s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes heroGlow {
  from { transform: scale(.85); opacity: .5; }
  to { transform: scale(1.2); opacity: 1; }
}

.about-hero-content {
  max-width: 820px;
  position: relative;
  z-index: 2;
}

.about-hero .eyebrow {
  color: #FFE5CB;
}

.about-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(58px, 7.8vw, 100px);
  line-height: 1.04;
  letter-spacing: -2.8px;
  font-weight: 400;
  margin: 30px 0 24px;
}

.about-hero h1 em {
  color: #FFE5CB;
  font-weight: 400;
}

.about-hero-description {
  max-width: 480px;
  color: rgba(255,249,243,.87);
  font-size: 14px;
  line-height: 2;
}

.about-hero-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 38px;
}

.about-hero-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,249,243,.7);
  font-size: 11px;
  letter-spacing: .5px;
  transition: gap .3s ease;
}

.about-hero-link:hover {
  gap: 21px;
}

.about-hero-note {
  color: rgba(255,249,243,.7);
  font-size: 10px;
  letter-spacing: 1.5px;
}

.about-hero-monogram {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Playfair Display', serif;
  font-size: clamp(300px, 38vw, 510px);
  line-height: .8;
  color: rgba(255,249,243,.09);
  pointer-events: none;
  user-select: none;
}

.about-hero-bottom {
  position: absolute;
  left: 9%;
  right: 9%;
  bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255,249,243,.68);
  font-size: 9px;
  letter-spacing: 2px;
}

.about-hero-bottom span:last-child {
  display: flex;
  align-items: center;
  gap: 10px;
}

.about-hero-bottom span:last-child::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #FFE5CB;
}

/* STORY */

.about-story-section {
  padding: 125px 10%;
  display: grid;
  grid-template-columns: .72fr 1.28fr;
  gap: 100px;
  align-items: start;
}

.about-story-label {
  position: sticky;
  top: 120px;
}

.about-story-label p {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 1.5px;
  margin-top: 18px;
}

.about-story-content h2 {
  font-size: clamp(42px, 5.2vw, 67px);
  line-height: 1.13;
  letter-spacing: -1.5px;
  margin: 0 0 30px;
}

.about-story-content h2 span {
  color: var(--orange);
}

.about-story-content p {
  max-width: 650px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2.05;
  margin: 0 0 17px;
}

.about-story-highlight {
  margin-top: 35px;
  padding: 22px 25px;
  border-left: 2px solid var(--orange);
  background: #FFF1E5;
  color: var(--ink);
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-style: italic;
  line-height: 1.6;
}

/* DIVIDER */

.about-divider {
  height: 1px;
  margin: 0 10%;
  background: rgba(201,75,18,.18);
  transform-origin: left;
}

/* PHILOSOPHY */

.about-philosophy {
  padding: 115px 10% 120px;
  background: #FCE6D5;
}

.about-philosophy-heading {
  max-width: 720px;
  margin-bottom: 65px;
}

.about-philosophy-heading h2 {
  font-size: clamp(42px, 5.5vw, 68px);
  line-height: 1.12;
  letter-spacing: -1.5px;
  margin: 23px 0 20px;
}

.about-philosophy-heading h2 span {
  color: var(--orange);
}

.about-philosophy-heading p {
  max-width: 470px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.about-principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgba(201,75,18,.22);
}

.about-principle {
  min-height: 250px;
  padding: 30px 30px 20px 0;
  transition: transform .4s ease;
}

.about-principle + .about-principle {
  padding-left: 30px;
  border-left: 1px solid rgba(201,75,18,.22);
}

.about-principle:hover {
  transform: translateY(-7px);
}

.about-principle-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--orange);
}

.about-principle-top span {
  font-size: 10px;
  letter-spacing: 2px;
}

.about-principle-top svg {
  opacity: .75;
}

.about-principle h3 {
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  font-weight: 400;
  margin: 34px 0 13px;
}

.about-principle p {
  max-width: 290px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

/* APPROACH */

.about-approach {
  padding: 120px 10%;
  background: var(--cream);
}

.about-approach-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.about-approach-heading h2 {
  font-size: clamp(42px, 5.2vw, 65px);
  line-height: 1.15;
  letter-spacing: -1px;
  margin: 25px 0;
}

.about-approach-heading h2 span {
  color: var(--orange);
}

.about-approach-heading p {
  max-width: 410px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
}

.about-approach-list {
  border-top: 1px solid rgba(201,75,18,.2);
}

.about-approach-item {
  min-height: 72px;
  padding: 18px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(201,75,18,.2);
  transition: padding .3s ease;
}

.about-approach-item:hover {
  padding-left: 13px;
}

.about-approach-item span:first-child {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}

.about-approach-item span:last-child {
  color: var(--orange);
  font-size: 10px;
  letter-spacing: 1.5px;
}

/* CTA */

.about-cta {
  position: relative;
  overflow: hidden;
  padding: 90px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  color: var(--cream);
  background:
    radial-gradient(ellipse at 85% 20%, rgba(255,220,187,.25), transparent 35%),
    linear-gradient(110deg, #C94B12, #E96A24 65%, #F28A42);
}

.about-cta::after {
  content: "G";
  position: absolute;
  right: 22%;
  top: -110px;
  font-family: 'Playfair Display', serif;
  font-size: 330px;
  color: rgba(255,249,243,.08);
  pointer-events: none;
}

.about-cta-content {
  position: relative;
  z-index: 1;
}

.about-cta .eyebrow {
  color: #FFE5CB;
}

.about-cta h2 {
  font-size: clamp(42px, 5.5vw, 68px);
  line-height: 1.12;
  letter-spacing: -1px;
  margin: 23px 0 0;
}

.about-cta h2 em {
  color: #FFE5CB;
  font-weight: 400;
}

.about-cta-link {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255,249,243,.75);
  color: var(--cream);
  font-size: 11px;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: gap .3s ease;
}

.about-cta-link:hover {
  gap: 27px;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .about-hero {
    min-height: 590px;
    padding: 100px 7% 90px;
  }

  .about-hero-monogram {
    right: -3%;
    opacity: .8;
  }

  .about-story-section {
    padding: 90px 7%;
    grid-template-columns: 1fr 2fr;
    gap: 45px;
  }

  .about-philosophy,
  .about-approach {
    padding: 90px 7%;
  }

  .about-approach-inner {
    gap: 55px;
  }

  .about-cta {
    padding: 80px 7%;
  }

  .about-hero-bottom {
    left: 7%;
    right: 7%;
  }
}

@media (max-width: 650px) {
  .about-hero {
    min-height: 590px;
    padding: 95px 7% 90px;
  }

  .about-hero h1 {
    font-size: clamp(49px, 12vw, 68px);
    letter-spacing: -1.5px;
  }

  .about-hero-description {
    font-size: 13px;
    max-width: 390px;
  }

  .about-hero-monogram {
    font-size: 260px;
    right: -15%;
    top: 53%;
  }

  .about-hero::before {
    width: 350px;
    height: 350px;
    right: -180px;
  }

  .about-hero::after {
    width: 260px;
    height: 260px;
    right: -130px;
  }

  .about-hero-bottom {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .about-hero-note {
    font-size: 9px;
  }

  .about-story-section {
    padding: 75px 7%;
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-story-label {
    position: static;
  }

  .about-story-content h2 {
    font-size: 43px;
  }

  .about-story-highlight {
    font-size: 17px;
  }

  .about-divider {
    margin: 0 7%;
  }

  .about-philosophy,
  .about-approach {
    padding: 75px 7%;
  }

  .about-philosophy-heading {
    margin-bottom: 40px;
  }

  .about-philosophy-heading h2,
  .about-approach-heading h2 {
    font-size: 43px;
  }

  .about-principles {
    grid-template-columns: 1fr;
  }

  .about-principle,
  .about-principle + .about-principle {
    min-height: auto;
    padding: 25px 0;
    border-left: 0;
    border-bottom: 1px solid rgba(201,75,18,.22);
  }

  .about-principle h3 {
    margin-top: 20px;
  }

  .about-approach-inner {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .about-approach-item span:first-child {
    font-size: 18px;
  }

  .about-cta {
    padding: 75px 7%;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }

  .about-cta h2 {
    font-size: 47px;
  }

  .about-cta::after {
    right: -5%;
    top: -30px;
    font-size: 240px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-page *,
  .about-page *::before,
  .about-page *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow" />

        <motion.div
          className="about-hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="eyebrow" variants={reveal}>
            Discover GHUGE GROUP
          </motion.div>

          <motion.h1 variants={reveal}>
            More than a
            <br />
            business. <em>A vision.</em>
          </motion.h1>

          <motion.p
            className="about-hero-description"
            variants={reveal}
          >
            A group built on ambition, driven by ideas, and shaped by
            the belief that meaningful businesses are built with purpose.
          </motion.p>

          <motion.div className="about-hero-actions" variants={reveal}>
            <a href="#about-story" className="about-hero-link">
              Discover our story
              <ArrowDown size={15} />
            </a>
            <span className="about-hero-note">
              BUILT WITH PURPOSE
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-hero-monogram"
          initial={{ opacity: 0, scale: .8, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease }}
        >
          G
        </motion.div>

        <div className="about-hero-bottom">
          <span>GHUGE GROUP / ABOUT US</span>
          <span>INDEPENDENT VENTURES. SHARED VISION.</span>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story-section" id="about-story">
        <Reveal className="about-story-label">
          <div className="eyebrow">01 / Our Story</div>
          <p>Who we are</p>
        </Reveal>

        <Reveal className="about-story-content" delay={0.12}>
          <h2 className="serif">
            Built with vision.
            <br />
            <span>Driven by ambition.</span>
          </h2>

          <p>
            GHUGE GROUP represents a vision of building and growing
            businesses across different industries. We believe every
            meaningful venture begins with an idea, but its success
            comes from the people, commitment and thinking behind it.
          </p>

          <p>
            Our focus is on creating opportunities, developing
            independent ventures and building something that can
            grow with purpose over time.
          </p>

          <div className="about-story-highlight">
            Different businesses. Different opportunities.
            One shared vision.
          </div>
        </Reveal>
      </section>

      <motion.div
        className="about-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease }}
      />

      {/* PHILOSOPHY */}
      <section className="about-philosophy">
        <Reveal className="about-philosophy-heading">
          <div className="eyebrow">02 / Our Philosophy</div>

          <h2 className="serif">
            The way we think
            <br />
            shapes <span>what we build.</span>
          </h2>

          <p>
            Our approach is guided by simple beliefs that influence
            how we recognise opportunities and build businesses.
          </p>
        </Reveal>

        <motion.div
          className="about-principles"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="about-principle"
                variants={reveal}
                key={item.number}
              >
                <div className="about-principle-top">
                  <span>{item.number} / PRINCIPLE</span>
                  <Icon size={22} strokeWidth={1.4} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* APPROACH */}
      <section className="about-approach">
        <div className="about-approach-inner">
          <Reveal className="about-approach-heading">
            <div className="eyebrow">03 / Our Approach</div>

            <h2 className="serif">
              Independent ventures.
              <br />
              <span>One shared vision.</span>
            </h2>

            <p>
              GHUGE GROUP brings together ventures with their own
              identities, goals and areas of focus. Each business
              follows its own direction while being part of a larger
              vision of growth and opportunity.
            </p>
          </Reveal>

          <motion.div
            className="about-approach-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {approachItems.map((item, index) => (
              <motion.div
                className="about-approach-item"
                variants={reveal}
                key={item}
              >
                <span>{item}</span>
                <span>0{index + 1}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="about-cta">
        <Reveal className="about-cta-content">
          <div className="eyebrow">The journey continues</div>

          <h2 className="serif">
            Let's build
            <br />
            <em>what comes next.</em>
          </h2>
        </Reveal>

        <motion.a
          href="/contact"
          className="about-cta-link"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8, ease }}
        >
          Get in touch
          <ArrowUpRight size={18} />
        </motion.a>
      </section>
    </main>
  );
}