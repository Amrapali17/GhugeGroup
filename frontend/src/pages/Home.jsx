
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Globe2,
  Layers3,
  Building2,
  Compass,
  MoveUpRight,
} from "lucide-react";

/* ----------------------------------------
   ANIMATION SETTINGS
---------------------------------------- */

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

function Reveal({ children, delay = 0, className = "" }) {
  const ref = React.useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={reveal}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------
   MAIN COMPONENT
---------------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const businesses = [
    {
      number: "01",
      name: "Laxmi Gas",
      category: "Energy & Distribution",
      status: "Operating",
      description:
        "Building dependable energy and distribution solutions through operational excellence.",
      letter: "L",
      className: "gas",
      link: null,
      icon: <Building2 size={25} strokeWidth={1.3} />,
    },
    {
      number: "02",
      name: "UpLyftBusiness",
      category: "Digital & Technology",
      status: "Operating",
      description:
        "Helping businesses grow through digital experiences, technology and creative solutions.",
      letter: "U",
      className: "uplyft",
      link: "https://www.uplyftbusiness.com",
      icon: <Globe2 size={25} strokeWidth={1.3} />,
    },
    {
      number: "03",
      name: "Sports Academy",
      category: "Sports & Development",
      status: "Coming Soon",
      description:
        "A future initiative focused on sports, discipline, development and opportunity.",
      letter: "S",
      className: "sports",
      link: null,
      icon: <Compass size={25} strokeWidth={1.3} />,
    },
  ];

  return (
    <div className="ghuge-home">

      {/* SCROLL PROGRESS */}

      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-symbol">G</span>

          <span className="brand-name">
            GHUGE
            <small>GROUP</small>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#story" onClick={closeMenu}>The Group</a>
          <a href="#businesses" onClick={closeMenu}>Our Businesses</a>
          <a href="#philosophy" onClick={closeMenu}>Our Vision</a>
          <a href="/leadership" onClick={closeMenu}>Leadership</a>

          <a
            href="#contact"
            className="nav-mobile-contact"
            onClick={closeMenu}
          >
            Let's Connect <ArrowUpRight size={17} />
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Connect <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}

      <section className="hero" id="home">
        <div className="hero-grid-pattern" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-inner">

          <div className="hero-content">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow-dot" />
              AN INDEPENDENT BUSINESS GROUP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.12, ease }}
            >
              Built with
              <br />
              vision. Driven
              <br />
              by <em>ambition.</em>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              A growing group of businesses united by a shared
              vision to create meaningful progress, lasting value
              and opportunities for the future.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
            >
              <a href="#businesses" className="hero-button">
                Explore the Group
                <ArrowUpRight size={18} />
              </a>

              <a href="#story" className="hero-text-link">
                Discover our story
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              className="hero-trust-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <span className="trust-line" />
              <span>BUILDING WITH PURPOSE. GROWING WITH INTENT.</span>
            </motion.div>
          </div>

          {/* ABSTRACT BRAND EMBLEM — NO PHOTOGRAPH */}

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.2, ease }}
          >
            <div className="visual-top-label">
              <span>ESTABLISHING</span>
              <span>NEW POSSIBILITIES</span>
            </div>

            <div className="emblem-stage">
              <div className="emblem-orbit orbit-one" />
              <div className="emblem-orbit orbit-two" />
              <div className="emblem-orbit orbit-three" />

              <motion.div
                className="emblem-orbit-dot"
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span />
              </motion.div>

              <motion.div
                className="hero-emblem"
                animate={reduceMotion ? {} : {
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="emblem-inner">
                  <span>G</span>
                  <div className="emblem-divider" />
                  <small>GHUGE GROUP</small>
                </div>
              </motion.div>
            </div>

            <div className="visual-bottom-label">
              <span className="visual-bottom-line" />
              <span>ONE VISION. MANY POSSIBILITIES.</span>
            </div>

            <div className="visual-side-note">
              <span>01</span>
              <span>GROUP</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>INDIA · BUILDING FOR TOMORROW</span>

          <a href="#story">
            SCROLL TO EXPLORE
            <span className="scroll-arrow">↓</span>
          </a>
        </div>
      </section>

      {/* BRAND MARQUEE */}

      <section className="marquee">
        <div className="marquee-track">
          {[0, 1].map((item) => (
            <div className="marquee-content" key={item}>
              <span>VISION</span>
              <b>✳</b>
              <span>INNOVATION</span>
              <b>✳</b>
              <span>GROWTH</span>
              <b>✳</b>
              <span>LEGACY</span>
              <b>✳</b>
              <span>OPPORTUNITY</span>
              <b>✳</b>
            </div>
          ))}
        </div>
      </section>

      {/* GROUP STORY */}

      <section className="group-story section" id="story">
        <div className="section-container story-grid">

          <Reveal className="story-label">
            <span className="section-kicker">
              <span /> WHO WE ARE
            </span>

            <span className="story-index">
              01 / THE GROUP
            </span>
          </Reveal>

          <Reveal className="story-main">
            <h2>
              Different ventures.
              <br />
              <em>One bigger vision.</em>
            </h2>

            <p className="story-lead">
              GHUGE GROUP is a growing business group bringing
              together ventures across different industries under
              a common vision of progress.
            </p>

            <p className="story-copy">
              We believe in building businesses with purpose,
              creating opportunities and developing ideas into
              meaningful enterprises. Each venture has its own
              identity, while contributing to a larger ambition.
            </p>

            <a href="#businesses" className="underlined-link">
              Explore our businesses
              <ArrowUpRight size={17} />
            </a>
          </Reveal>

          <Reveal className="story-decoration">
            <div className="story-mark">G.</div>

            <div className="story-decoration-caption">
              <Sparkles size={15} />
              <span>GROWING WITH PURPOSE</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GROUP PRINCIPLES */}

      <section className="principles">
        <div className="section-container principles-grid">

          <Reveal className="principle-item">
            <span className="principle-number">01</span>
            <div className="principle-icon">
              <Compass size={22} strokeWidth={1.4} />
            </div>
            <h3>Purpose</h3>
            <p>
              Every venture begins with a clear reason to exist
              and a meaningful direction.
            </p>
          </Reveal>

          <Reveal className="principle-item" delay={0.12}>
            <span className="principle-number">02</span>
            <div className="principle-icon">
              <Layers3 size={22} strokeWidth={1.4} />
            </div>
            <h3>Possibility</h3>
            <p>
              We look beyond boundaries and remain open to
              ideas, industries and opportunities.
            </p>
          </Reveal>

          <Reveal className="principle-item" delay={0.24}>
            <span className="principle-number">03</span>
            <div className="principle-icon">
              <MoveUpRight size={22} strokeWidth={1.4} />
            </div>
            <h3>Progress</h3>
            <p>
              We value consistent effort, thoughtful decisions
              and sustainable growth.
            </p>
          </Reveal>

        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="philosophy section" id="philosophy">
        <div className="philosophy-glow" />
        <div className="philosophy-outline" />

        <div className="section-container philosophy-inner">
          <Reveal>
            <span className="section-kicker light-kicker">
              <span /> WHAT DRIVES US
            </span>
          </Reveal>

          <Reveal>
            <h2>
              Think beyond
              <br />
              <em>the ordinary.</em>
            </h2>
          </Reveal>

          <div className="philosophy-bottom">
            <Reveal>
              <p>
                Our approach is rooted in ambition, adaptability
                and the belief that meaningful businesses are
                built through consistent effort and a long-term vision.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="philosophy-symbol">
                <Layers3 size={29} strokeWidth={1.2} />
              </div>
            </Reveal>
          </div>

          <div className="philosophy-index">
            OUR APPROACH <span>—</span> LONG-TERM THINKING
          </div>
        </div>
      </section>

      {/* BUSINESS PORTFOLIO */}

      <section className="portfolio section" id="businesses">
        <div className="section-container">

          <div className="portfolio-top">
            <Reveal>
              <span className="section-kicker">
                <span /> OUR PORTFOLIO
              </span>

              <h2>
                Businesses built
                <br />
                for <em>possibilities.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="portfolio-intro">
                Every venture represents a different opportunity.
                Together, they shape the evolving GHUGE GROUP ecosystem.
              </p>
            </Reveal>
          </div>

          <div className="business-grid">
            {businesses.map((business, index) => (
              <Reveal
                key={business.number}
                delay={index * 0.12}
                className="business-reveal"
              >
                <motion.div
                  className={`business-card ${business.className}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="business-card-top">
                    <span>{business.number} / VENTURE</span>

                    <span className="business-status">
                      <i /> {business.status}
                    </span>
                  </div>

                  <div className="business-art">
                    <div className="business-art-ring ring-one" />
                    <div className="business-art-ring ring-two" />

                    <div className="business-art-icon">
                      {business.icon}
                    </div>

                    <div className="business-art-letter">
                      {business.letter}
                    </div>

                    <span className="business-art-spark">✳</span>
                  </div>

                  <div className="business-card-bottom">
                    <div>
                      <span className="business-category">
                        {business.category}
                      </span>

                      <h3>{business.name}</h3>

                      <p>{business.description}</p>
                    </div>

                    {business.link ? (
                      <a
                        href={business.link}
                        target="_blank"
                        rel="noreferrer"
                        className="business-arrow"
                        aria-label={`Visit ${business.name}`}
                      >
                        <ArrowUpRight size={21} />
                      </a>
                    ) : (
                      <span
                        className="business-arrow business-arrow-static"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={21} />
                      </span>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="portfolio-note">
            <span>MORE TO COME</span>

            <p>
              Our journey continues as we explore new industries,
              ideas and opportunities.
            </p>

            <Sparkles size={19} />
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP DIRECTION */}

      <section className="founder section" id="leadership">
        <div className="founder-decoration">
          <div className="founder-circle founder-circle-one" />
          <div className="founder-circle founder-circle-two" />
          <div className="founder-circle founder-circle-three" />
        </div>

        <div className="section-container founder-grid">

          <Reveal className="founder-visual">
            <div className="founder-monogram">
              <div className="founder-monogram-inner">
                <span>G</span>
                <div className="founder-monogram-line" />
                <small>GHUGE GROUP</small>
              </div>
            </div>

            <span className="founder-visual-caption">
              BUILT ON VISION
            </span>
          </Reveal>

          <Reveal className="founder-content">
            <span className="section-kicker light-kicker">
              <span /> LEADERSHIP & DIRECTION
            </span>

            <h2>
              Strong foundations.
              <br />
              <em>Forward thinking.</em>
            </h2>

            <p>
              Every growing organisation needs a clear direction,
              strong values and the determination to keep moving
              forward. At GHUGE GROUP, our focus is on building
              businesses with a long-term perspective.
            </p>

            <div className="founder-divider" />

            <a href="/leadership" className="founder-link">
              Discover our leadership
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact section" id="contact">
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="section-container contact-inner">
          <Reveal>
            <span className="section-kicker light-kicker">
              <span /> LET'S BUILD SOMETHING
            </span>
          </Reveal>

          <Reveal>
            <h2>
              The future is
              <br />
              <em>built together.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              Have an idea, a business opportunity or a reason
              to connect? We would be glad to hear from you.
            </p>

            <a
              href="mailto:info@ghugegroup.com"
              className="contact-button"
            >
              Get in touch
              <ArrowUpRight size={19} />
            </a>
          </Reveal>

          <div className="contact-bottom-note">
            GHUGE GROUP <span>·</span> INDIA
          </div>
        </div>
      </section>

      {/* STYLES */}

      <style>{styles}</style>
    </div>
  );
}

/* ----------------------------------------
   STYLES
---------------------------------------- */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

:root {
  --orange: #E96A24;
  --orange-dark: #C94B12;
  --orange-mid: #F28A42;
  --orange-light: #F8B078;
  --peach: #FCE6D5;
  --ivory: #FFF9F3;
  --cream: #F7EFE6;
  --ink: #783311;
  --muted: #98684E;
  --white: #FFFFFF;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  background: var(--ivory);
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}

.ghuge-home {
  width: 100%;
  overflow: hidden;
  background: var(--ivory);
}

.section {
  position: relative;
  padding: 125px 7%;
}

.section-container {
  max-width: 1380px;
  margin: 0 auto;
}

/* SCROLL PROGRESS */

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 200;
  transform-origin: 0%;
  background: linear-gradient(90deg, #C94B12, #F8B078);
}

/* NAVIGATION */

.navbar {
  height: 86px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,249,243,.96);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(201,75,18,.12);
  backdrop-filter: blur(18px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
}

.brand-symbol {
  width: 43px;
  height: 43px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  background: linear-gradient(135deg, #C94B12, #F8B078);
  box-shadow: 0 7px 18px rgba(201,75,18,.16);
}

.brand-name {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1.1;
  color: var(--ink);
}

.brand-name small {
  display: block;
  font-size: 9px;
  letter-spacing: 5px;
  margin-top: 4px;
  font-weight: 500;
  color: var(--orange);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-links a {
  font-size: 12px;
  font-weight: 600;
  color: #98684E;
  transition: color .3s ease;
}

.nav-links a:hover {
  color: var(--orange);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  padding: 14px 20px;
  border-radius: 3px;
  background: linear-gradient(110deg, #C94B12, #F28A42);
  transition: transform .3s, box-shadow .3s;
}

.nav-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(201,75,18,.2);
}

.nav-mobile-contact,
.menu-toggle {
  display: none;
}

/* HERO */

.hero {
  min-height: 740px;
  height: min(830px, calc(100vh - 86px));
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: white;
  background:
    radial-gradient(ellipse at 77% 45%, rgba(255,230,207,.4), transparent 38%),
    linear-gradient(115deg, #C94B12 0%, #E96A24 48%, #F28A42 78%, #F8B078 100%);
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  opacity: .11;
  background-image:
    linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px);
  background-size: 75px 75px;
  mask-image: linear-gradient(90deg, transparent, black 45%, black);
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero-glow-one {
  width: 480px;
  height: 480px;
  right: 7%;
  top: 4%;
  background: radial-gradient(circle, rgba(255,237,219,.3), transparent 70%);
}

.hero-glow-two {
  width: 380px;
  height: 380px;
  left: -12%;
  bottom: -20%;
  background: radial-gradient(circle, rgba(255,195,135,.25), transparent 70%);
}

.hero-inner {
  width: 100%;
  max-width: 1380px;
  margin: auto;
  padding: 30px 7%;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 45px;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 680px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 35px;
}

.eyebrow-dot {
  width: 7px;
  height: 7px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgba(255,255,255,.18);
}

.hero h1 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(55px, 6.6vw, 91px);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -3px;
}

.hero h1 em {
  font-weight: 500;
  color: #FFE5CB;
}

.hero-description {
  max-width: 460px;
  font-size: 14px;
  line-height: 1.95;
  color: rgba(255,255,255,.9);
  margin: 30px 0 34px;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 27px;
}

.hero-button {
  padding: 17px 23px;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  background: white;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 700;
  transition: transform .3s, box-shadow .3s;
}

.hero-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(120,49,17,.16);
}

.hero-text-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.hero-text-link svg {
  transition: transform .3s;
}

.hero-text-link:hover svg {
  transform: translateX(5px);
}

.hero-trust-line {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 55px;
  color: rgba(255,255,255,.72);
  font-size: 8px;
  letter-spacing: 2px;
  font-weight: 600;
}

.trust-line {
  width: 35px;
  height: 1px;
  background: rgba(255,255,255,.8);
}

/* HERO EMBLEM */

.hero-visual {
  min-height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-top-label {
  position: absolute;
  top: 28px;
  right: 5px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
  color: rgba(255,255,255,.72);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 2px;
}

.emblem-stage {
  width: 500px;
  height: 500px;
  position: relative;
  display: grid;
  place-items: center;
}

.emblem-orbit {
  position: absolute;
  border: 1px solid rgba(255,255,255,.36);
  border-radius: 50%;
  pointer-events: none;
}

.orbit-one {
  width: 330px;
  height: 330px;
}

.orbit-two {
  width: 410px;
  height: 410px;
  transform: rotate(35deg) scaleY(.75);
  border-style: dashed;
  border-color: rgba(255,255,255,.32);
}

.orbit-three {
  width: 475px;
  height: 475px;
  border-color: rgba(255,255,255,.16);
}

.emblem-orbit-dot {
  position: absolute;
  width: 410px;
  height: 410px;
  border-radius: 50%;
  z-index: 4;
  pointer-events: none;
}

.emblem-orbit-dot span {
  position: absolute;
  top: 7px;
  left: 50%;
  width: 11px;
  height: 11px;
  background: #FFF4E9;
  border-radius: 50%;
  box-shadow: 0 0 18px white;
}

.hero-emblem {
  width: 235px;
  height: 235px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 3;
  background: linear-gradient(145deg, #FFE8D2, #F8B078 48%, #E96A24);
  box-shadow:
    0 35px 90px rgba(120,49,17,.2),
    inset 0 4px 18px rgba(255,255,255,.7);
}

.emblem-inner {
  width: 193px;
  height: 193px;
  border: 1px solid rgba(255,255,255,.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(140deg, #F28A42, #C94B12);
  box-shadow: inset 0 0 30px rgba(255,255,255,.18);
}

.emblem-inner > span {
  font-family: 'Playfair Display', serif;
  font-size: 116px;
  line-height: .9;
  color: white;
  text-shadow: 0 8px 20px rgba(120,49,17,.17);
}

.emblem-divider {
  width: 38px;
  height: 1px;
  background: rgba(255,255,255,.8);
  margin-top: 7px;
}

.emblem-inner small {
  font-size: 8px;
  letter-spacing: 4px;
  color: white;
  margin-top: 9px;
}

.visual-bottom-label {
  position: absolute;
  bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgba(255,255,255,.85);
}

.visual-bottom-line {
  height: 1px;
  width: 32px;
  background: white;
}

.visual-side-note {
  position: absolute;
  right: -4px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 8px;
  letter-spacing: 2px;
  color: rgba(255,255,255,.65);
}

.visual-side-note span:first-child {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  color: white;
}

.hero-bottom {
  position: absolute;
  bottom: 27px;
  left: 7%;
  right: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255,255,255,.83);
  z-index: 3;
}

.hero-bottom a {
  display: flex;
  gap: 12px;
  align-items: center;
}

.scroll-arrow {
  font-size: 16px;
}

/* MARQUEE */

.marquee {
  overflow: hidden;
  padding: 24px 0;
  background: linear-gradient(100deg, #C94B12, #F28A42, #E96A24);
  color: white;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeMove 32s linear infinite;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 52px;
  padding-right: 52px;
  white-space: nowrap;
}

.marquee-content span {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  letter-spacing: 3px;
}

.marquee-content b {
  font-size: 17px;
  color: #FFE5CB;
}

@keyframes marqueeMove {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* STORY */

.group-story {
  background: var(--ivory);
}

.story-grid {
  display: grid;
  grid-template-columns: .65fr 1.45fr .7fr;
  gap: 45px;
  align-items: start;
}

.section-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
}

.section-kicker > span {
  width: 27px;
  height: 1px;
  background: var(--orange);
}

.story-index {
  display: block;
  margin-top: 22px;
  color: #BA876A;
  font-size: 9px;
  letter-spacing: 2px;
}

.story-main h2,
.portfolio-top h2,
.founder-content h2,
.contact h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 4.8vw, 66px);
  font-weight: 500;
  line-height: 1.13;
  letter-spacing: -1.5px;
  margin: 0;
}

.story-main h2 em,
.portfolio-top h2 em {
  color: var(--orange);
  font-weight: 500;
}

.story-lead {
  max-width: 610px;
  margin: 32px 0 17px;
  color: #814323;
  font-size: 17px;
  line-height: 1.8;
  font-weight: 500;
}

.story-copy {
  max-width: 580px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
}

.underlined-link {
  display: inline-flex;
  gap: 15px;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--orange);
  margin-top: 20px;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 700;
}

.story-decoration {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.story-mark {
  font-family: 'Playfair Display', serif;
  font-size: 185px;
  line-height: 1;
  color: #F4B17F;
  opacity: .7;
}

.story-decoration-caption {
  display: flex;
  gap: 9px;
  align-items: center;
  color: var(--orange);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

/* PRINCIPLES */

.principles {
  padding: 75px 7%;
  background: #F8EFE6;
  border-top: 1px solid #F1DDCD;
  border-bottom: 1px solid #F1DDCD;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 55px;
}

.principle-item {
  position: relative;
  padding: 12px 28px 12px 0;
}

.principle-item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: -27px;
  top: 12px;
  bottom: 12px;
  width: 1px;
  background: #E8CEB9;
}

.principle-number {
  color: #C28A68;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 700;
}

.principle-icon {
  margin-top: 23px;
  color: var(--orange);
}

.principle-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: 25px;
  font-weight: 500;
  margin: 14px 0 8px;
  color: var(--ink);
}

.principle-item p {
  max-width: 290px;
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

/* PHILOSOPHY */

.philosophy {
  color: white;
  overflow: hidden;
  background: linear-gradient(115deg, #C94B12 0%, #E96A24 50%, #F28A42 100%);
}

.philosophy-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  right: -120px;
  top: -220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,239,219,.28), transparent 68%);
}

.philosophy-outline {
  position: absolute;
  width: 470px;
  height: 470px;
  right: -100px;
  bottom: -260px;
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50%;
  box-shadow: 0 0 0 45px rgba(255,255,255,.025),
              0 0 0 90px rgba(255,255,255,.02);
}

.philosophy-inner {
  position: relative;
  z-index: 2;
}

.light-kicker {
  color: rgba(255,255,255,.9);
}

.light-kicker > span {
  background: white;
}

.philosophy h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(65px, 8.5vw, 112px);
  font-weight: 500;
  line-height: 1.03;
  letter-spacing: -3px;
  margin: 60px 0 50px;
}

.philosophy h2 em,
.founder-content h2 em,
.contact h2 em {
  color: #FFE5CB;
  font-weight: 500;
}

.philosophy-bottom {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
}

.philosophy-bottom p {
  max-width: 490px;
  margin: 0;
  font-size: 14px;
  line-height: 2;
  color: rgba(255,255,255,.9);
}

.philosophy-symbol {
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.55);
  border-radius: 50%;
  color: white;
}

.philosophy-index {
  margin-top: 65px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.25);
  color: rgba(255,255,255,.7);
  font-size: 8px;
  letter-spacing: 2px;
}

.philosophy-index span {
  margin: 0 10px;
  color: white;
}

/* PORTFOLIO */

.portfolio {
  background: #FFF9F3;
}

.portfolio-top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  margin-bottom: 65px;
}

.portfolio-top h2 {
  margin-top: 25px;
}

.portfolio-intro {
  max-width: 340px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
  margin-bottom: 5px;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.business-reveal {
  height: 100%;
}

.business-card {
  display: flex;
  flex-direction: column;
  min-height: 490px;
  height: 100%;
  padding: 24px;
  background: #F8EFE6;
  border: 1px solid #F2D9C7;
  transition: box-shadow .4s, border-color .4s;
}

.business-card:hover {
  box-shadow: 0 25px 60px rgba(201,75,18,.12);
  border-color: #E9A477;
}

.business-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #B27B5B;
}

.business-status {
  display: flex;
  align-items: center;
  gap: 7px;
  letter-spacing: .5px;
  color: var(--orange-dark);
  white-space: nowrap;
}

.business-status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #E96A24;
}

.business-card.sports .business-status i {
  background: #D9954D;
}

.business-art {
  height: 220px;
  margin: 25px 0;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #F9C79F, #F28A42);
}

.business-card.uplyft .business-art {
  background: linear-gradient(135deg, #F7B77E, #E96A24);
}

.business-card.sports .business-art {
  background: linear-gradient(135deg, #FFE0C3, #ED9555);
}

.business-art-ring {
  position: absolute;
  border: 1px solid rgba(255,255,255,.55);
  border-radius: 50%;
  transition: transform .8s ease;
}

.ring-one {
  width: 175px;
  height: 175px;
}

.ring-two {
  width: 220px;
  height: 220px;
  border-style: dashed;
  opacity: .65;
}

.business-card:hover .ring-one {
  transform: scale(1.16) rotate(25deg);
}

.business-card:hover .ring-two {
  transform: scale(.92) rotate(-18deg);
}

.business-art-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  color: rgba(255,255,255,.8);
}

.business-art-letter {
  position: relative;
  z-index: 1;
  font-family: 'Playfair Display', serif;
  font-size: 125px;
  color: white;
  text-shadow: 0 10px 25px rgba(120,49,17,.14);
}

.business-art-spark {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 25px;
  color: white;
}

.business-card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 15px;
  flex: 1;
}

.business-category {
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--orange-dark);
  font-weight: 700;
}

.business-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 500;
  margin: 10px 0;
  color: var(--ink);
}

.business-card p {
  font-size: 11px;
  line-height: 1.8;
  color: var(--muted);
  max-width: 280px;
  margin: 0;
}

.business-arrow {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: white;
  color: var(--orange);
  transition: transform .3s, background .3s, color .3s;
}

.business-card:hover .business-arrow {
  transform: rotate(45deg);
  background: var(--orange);
  color: white;
}

.business-arrow-static {
  opacity: .7;
}

.portfolio-note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid #EED8C7;
  margin-top: 45px;
  padding-top: 25px;
}

.portfolio-note span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--orange);
}

.portfolio-note p {
  color: var(--muted);
  font-size: 12px;
}

.portfolio-note svg {
  color: var(--orange);
}

/* LEADERSHIP */

.founder {
  color: white;
  overflow: hidden;
  background: linear-gradient(120deg, #C94B12, #E96A24 55%, #F5A064);
}

.founder-decoration {
  position: absolute;
  right: -150px;
  top: -160px;
  width: 620px;
  height: 620px;
  pointer-events: none;
}

.founder-circle {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 50%;
}

.founder-circle-two {
  inset: 65px;
  border-style: dashed;
}

.founder-circle-three {
  inset: 130px;
  border-color: rgba(255,255,255,.15);
}

.founder-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  align-items: center;
  gap: 100px;
  position: relative;
  z-index: 2;
}

.founder-visual {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 22px;
}

.founder-monogram {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  padding: 13px;
  background: linear-gradient(145deg, #FFE5CB, #F8B078 48%, #C94B12);
  box-shadow: 0 30px 70px rgba(120,49,17,.15);
}

.founder-monogram-inner {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255,255,255,.65);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(145deg, #F28A42, #C94B12);
}

.founder-monogram span {
  font-family: 'Playfair Display', serif;
  font-size: 175px;
  line-height: 1;
  color: white;
}

.founder-monogram-line {
  width: 75px;
  height: 1px;
  background: white;
  margin: 8px 0;
}

.founder-monogram small {
  font-size: 9px;
  letter-spacing: 4px;
}

.founder-visual-caption {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
  color: rgba(255,255,255,.8);
}

.founder-content h2 {
  margin: 35px 0 25px;
}

.founder-content p {
  max-width: 490px;
  color: rgba(255,255,255,.9);
  font-size: 13px;
  line-height: 2.1;
}

.founder-divider {
  width: 65px;
  height: 1px;
  background: white;
  margin: 35px 0 20px;
}

.founder-link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #FFE5CB;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255,255,255,.65);
  transition: gap .3s ease;
}

.founder-link:hover {
  gap: 20px;
}

/* CONTACT */

.contact {
  background: linear-gradient(115deg, #E96A24, #F28A42 55%, #F8B078);
  color: white;
  text-align: center;
  overflow: hidden;
}

.contact-orb {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: 50%;
  pointer-events: none;
}

.contact-orb-one {
  width: 550px;
  height: 550px;
  box-shadow:
    0 0 0 50px rgba(255,255,255,.035),
    0 0 0 100px rgba(255,255,255,.025);
}

.contact-orb-two {
  width: 700px;
  height: 700px;
  border-color: rgba(255,255,255,.1);
}

.contact-inner {
  position: relative;
  z-index: 2;
}

.contact .section-kicker {
  justify-content: center;
}

.contact h2 {
  font-size: clamp(58px, 8vw, 100px);
  margin: 45px 0 25px;
}

.contact-inner > div > p {
  max-width: 460px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 2;
  color: rgba(255,255,255,.9);
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 25px;
  padding: 17px 25px;
  margin-top: 35px;
  background: white;
  color: var(--orange-dark);
  font-size: 12px;
  font-weight: 700;
  transition: transform .3s, box-shadow .3s;
}

.contact-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(120,49,17,.16);
}

.contact-bottom-note {
  margin-top: 75px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.25);
  color: rgba(255,255,255,.75);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 3px;
}

.contact-bottom-note span {
  padding: 0 10px;
  color: white;
}

/* RESPONSIVE */

@media (max-width: 1050px) {
  .nav-links {
    gap: 20px;
  }

  .hero-inner {
    gap: 15px;
  }

  .hero h1 {
    font-size: 70px;
  }

  .hero-visual {
    transform: scale(.86);
  }

  .story-grid {
    grid-template-columns: .5fr 1.5fr;
  }

  .story-decoration {
    display: none;
  }

  .founder-grid {
    gap: 50px;
  }

  .founder-monogram {
    width: 270px;
    height: 270px;
  }

  .founder-monogram span {
    font-size: 150px;
  }

  .business-grid {
    gap: 14px;
  }

  .business-card {
    padding: 18px;
  }
}

@media (max-width: 760px) {
  .section {
    padding: 85px 7%;
  }

  .navbar {
    height: 75px;
    padding: 0 6%;
  }

  .nav-cta {
    display: none;
  }

  .menu-toggle {
    display: grid;
    place-items: center;
    background: transparent;
    border: none;
    color: var(--orange-dark);
    cursor: pointer;
    padding: 8px;
  }

  .nav-links {
    position: fixed;
    inset: 75px 0 0;
    background: #FFF9F3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    transform: translateX(100%);
    transition: transform .4s ease;
  }

  .nav-links.nav-open {
    transform: translateX(0);
  }

  .nav-links a {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    color: var(--ink);
  }

  .nav-mobile-contact {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--orange) !important;
  }

  .hero {
    height: auto;
    min-height: 930px;
    padding: 75px 0 90px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    padding: 0 7%;
    gap: 0;
  }

  .hero h1 {
    font-size: clamp(53px, 12vw, 75px);
    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 13px;
    max-width: 430px;
  }

  .hero-trust-line {
    margin-top: 35px;
    font-size: 7px;
  }

  .hero-visual {
    min-height: 370px;
    transform: scale(.78);
    margin: -5px 0 -20px;
  }

  .hero-bottom {
    bottom: 20px;
    font-size: 8px;
    left: 6%;
    right: 6%;
  }

  .visual-top-label {
    right: 0;
  }

  .visual-side-note {
    right: 0;
  }

  .story-grid {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .story-main h2 {
    font-size: 47px;
  }

  .story-lead {
    font-size: 15px;
  }

  .principles {
    padding: 65px 7%;
  }

  .principles-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .principle-item {
    padding: 0 0 28px;
    border-bottom: 1px solid #E8CEB9;
  }

  .principle-item:not(:last-child)::after {
    display: none;
  }

  .principle-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .principle-icon {
    margin-top: 15px;
  }

  .philosophy h2 {
    font-size: 65px;
    margin: 45px 0;
  }

  .philosophy-bottom {
    align-items: start;
  }

  .philosophy-symbol {
    flex-shrink: 0;
    width: 52px;
    height: 52px;
  }

  .portfolio-top {
    display: block;
    margin-bottom: 40px;
  }

  .portfolio-top h2 {
    font-size: 48px;
  }

  .portfolio-intro {
    margin-top: 25px;
  }

  .business-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .business-card {
    min-height: 440px;
    padding: 22px;
  }

  .business-art {
    height: 205px;
  }

  .portfolio-note {
    align-items: start;
  }

  .portfolio-note svg {
    flex-shrink: 0;
  }

  .founder-grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .founder-monogram {
    width: 250px;
    height: 250px;
  }

  .founder-monogram span {
    font-size: 140px;
  }

  .founder-content h2 {
    font-size: 48px;
  }

  .contact h2 {
    font-size: 59px;
  }
}

@media (max-width: 420px) {
  .hero {
    min-height: 870px;
  }

  .hero-eyebrow {
    font-size: 8px;
    letter-spacing: 2px;
  }

  .hero-visual {
    transform: scale(.65);
    margin-left: -25px;
    margin-right: -25px;
  }

  .hero-actions {
    gap: 18px;
  }

  .hero-button {
    padding: 15px 17px;
  }

  .hero-bottom {
    letter-spacing: 1px;
  }

  .philosophy h2 {
    font-size: 55px;
  }

  .story-main h2 {
    font-size: 41px;
  }

  .contact h2 {
    font-size: 49px;
  }

  .portfolio-note p {
    font-size: 10px;
  }

  .business-card-top {
    font-size: 7px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;