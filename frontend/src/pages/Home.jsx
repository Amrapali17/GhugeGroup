
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Plus,
} from "lucide-react";

const ventures = [
  {
    number: "01",
    name: "Laxmi Gas",
    category: "ENERGY & DISTRIBUTION",
    description:
      "An established gas business serving everyday energy requirements.",
    status: "OPERATING",
    symbol: "L",
    detail: "ENERGY",
  },
  {
    number: "02",
    name: "UpLyftBusiness",
    category: "DIGITAL & TECHNOLOGY",
    description:
      "Digital experiences and technology solutions for businesses.",
    status: "OPERATING",
    symbol: "U",
    detail: "DIGITAL",
    href: "https://www.uplyftbusiness.com",
  },
  {
    number: "03",
    name: "Sports Academy",
    category: "SPORTS & DEVELOPMENT",
    description:
      "A future initiative focused on sports and development.",
    status: "COMING SOON",
    symbol: "S",
    detail: "SPORTS",
  },
];

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span className="eyebrow-line" />
      {children}
    </div>
  );
}

/* CUSTOM BRAND SYMBOL — NO IMAGE ASSETS */

function BrandMark({ large = false }) {
  return (
    <div className={`brand-mark ${large ? "brand-mark-large" : ""}`}>
      <svg
        viewBox="0 0 180 180"
        role="img"
        aria-label="GHUGE GROUP geometric G emblem"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0D6B1" />
            <stop offset="48%" stopColor="#B98B60" />
            <stop offset="100%" stopColor="#E4C49C" />
          </linearGradient>
        </defs>

        <circle
          cx="90"
          cy="90"
          r="78"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="0.8"
          opacity="0.65"
        />
        <circle
          cx="90"
          cy="90"
          r="67"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="0.6"
          strokeDasharray="2 6"
          opacity="0.5"
        />
        <path
          d="M119 53 C105 39 78 39 61 54 C43 70 39 99 53 119 C68 141 99 146 120 130 C133 120 140 101 137 84 L94 84"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="square"
        />
        <path
          d="M92 84 L138 84 L138 112"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        <circle cx="90" cy="90" r="3" fill="#E4C49C" />
      </svg>
    </div>
  );
}

/* NAVIGATION */

function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    ["THE GROUP", "#group"],
    ["PORTFOLIO", "#portfolio"],
    ["LEADERSHIP", "#leadership"],
    ["CONTACT", "#contact"],
  ];

  return (
    <header className="site-nav">
      <a href="#home" className="nav-brand" aria-label="GHUGE GROUP home">
        <span className="nav-brand-symbol">G.</span>
        <span>
          GHUGE
          <small>GROUP</small>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta">
        LET'S CONNECT <ArrowUpRight size={14} />
      </a>

      <button
        className="nav-menu-button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}

/* HERO */

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grain" />
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content">
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span />
          AN INDEPENDENT BUSINESS HOUSE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease }}
        >
          GHUGE
          <br />
          <em>GROUP.</em>
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ width: 0 }}
          animate={{ width: 78 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          Built with vision.
          <br />
          <span>Driven by ambition.</span>
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A group of independent businesses, brought together by
          enterprise, purpose and the ambition to create what comes next.
        </motion.p>

        <motion.a
          href="#group"
          className="hero-explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          EXPLORE GHUGE GROUP
          <span><ArrowDown size={15} /></span>
        </motion.a>
      </div>

      <motion.div
        className="hero-symbol-wrap"
        initial={{ opacity: 0, scale: 0.78, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, ease }}
      >
        <motion.div
          className="symbol-orbit orbit-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="symbol-orbit orbit-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="symbol-orbit orbit-three"
          animate={{ rotate: 360 }}
          transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        />
        <div className="hero-symbol-core">
          <BrandMark large />
        </div>
        <span className="orbit-caption orbit-caption-top">VISION</span>
        <span className="orbit-caption orbit-caption-bottom">ENTERPRISE</span>
        <span className="orbit-dot orbit-dot-one" />
        <span className="orbit-dot orbit-dot-two" />
      </motion.div>

      <div className="hero-bottom">
        <span>INDEPENDENT VENTURES · ONE VISION</span>
        <span>SCROLL TO DISCOVER ↓</span>
      </div>

      <div className="hero-side-index">01 — THE BEGINNING</div>
    </section>
  );
}

/* GROUP INTRODUCTION */

function GroupStory() {
  return (
    <section className="group-story" id="group">
      <div className="story-topline">
        <Eyebrow>WHO WE ARE</Eyebrow>
        <span className="story-reference">GHUGE GROUP / 001</span>
      </div>

      <Reveal className="story-main">
        <div className="story-number">01</div>
        <h2>
          One vision.
          <br />
          <em>Many directions.</em>
        </h2>
      </Reveal>

      <div className="story-description-row">
        <div className="story-vertical-label">OUR PERSPECTIVE</div>
        <Reveal>
          <p className="story-large-copy">
            We believe in building businesses with their own identity,
            purpose and potential.
          </p>
          <p className="story-small-copy">
            GHUGE GROUP is the parent business group bringing together
            independent ventures across different fields. Each business
            has its own direction, while contributing to a wider vision
            of entrepreneurship and growth.
          </p>
        </Reveal>
      </div>

      <div className="story-decoration" aria-hidden="true">
        <span>G</span>
        <span>G</span>
        <span>G</span>
      </div>

      <div className="story-bottomline">
        <span>BUILT ON ENTERPRISE</span>
        <span>DEFINED BY POSSIBILITY</span>
      </div>
    </section>
  );
}

/* PHILOSOPHY */

function Philosophy() {
  return (
    <section className="philosophy">
      <div className="philosophy-inner">
        <Reveal>
          <Eyebrow light>OUR PHILOSOPHY</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2>
            Different industries.
            <br />
            <em>Different opportunities.</em>
            <br />
            One forward vision.
          </h2>
        </Reveal>

        <div className="philosophy-bottom">
          <span className="philosophy-index">THE GHUGE GROUP APPROACH</span>
          <p>
            We see every venture as an opportunity to build something
            meaningful. Our focus is on developing businesses with
            clarity, independence and a long-term outlook.
          </p>
        </div>

        <div className="philosophy-orbit" aria-hidden="true">
          <div />
          <div />
          <div />
          <span>G</span>
        </div>
      </div>
    </section>
  );
}

/* PORTFOLIO */

function Portfolio() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-heading">
        <Reveal>
          <Eyebrow>THE PORTFOLIO</Eyebrow>
          <h2>
            Our businesses.
            <br />
            <em>Our individual identities.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            A growing collection of independent ventures, each operating
            in its own field and building its own identity.
          </p>
        </Reveal>
      </div>

      <div className="portfolio-layout">
        <div className="portfolio-index">
          <span>SELECT A VENTURE</span>

          {ventures.map((venture, index) => (
            <button
              key={venture.number}
              className={active === index ? "portfolio-tab active" : "portfolio-tab"}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
            >
              <span>{venture.number}</span>
              {venture.name}
              <ArrowUpRight size={15} />
            </button>
          ))}

          <div className="portfolio-index-note">
            THREE VENTURES
            <br />
            ONE GROUP
          </div>
        </div>

        <motion.div
          className="portfolio-display"
          key={active}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="portfolio-display-top">
            <span>{ventures[active].category}</span>
            <span>{ventures[active].number} / 03</span>
          </div>

          <div className="portfolio-art">
            <div className="portfolio-art-ring ring-a" />
            <div className="portfolio-art-ring ring-b" />
            <div className="portfolio-art-ring ring-c" />
            <div className="portfolio-art-cross cross-a" />
            <div className="portfolio-art-cross cross-b" />
            <span className="portfolio-art-letter">
              {ventures[active].symbol}
            </span>
            <span className="portfolio-art-detail">
              {ventures[active].detail}
            </span>
            <span className="portfolio-art-coordinate">
              GG — {ventures[active].number}
            </span>
          </div>

          <div className="portfolio-display-bottom">
            <div>
              <span className="portfolio-status">
                <i /> {ventures[active].status}
              </span>
              <h3>{ventures[active].name}</h3>
              <p>{ventures[active].description}</p>
            </div>

            {ventures[active].href ? (
              <a
                href={ventures[active].href}
                target="_blank"
                rel="noreferrer"
                className="portfolio-open"
                aria-label={`Visit ${ventures[active].name}`}
              >
                <ArrowUpRight size={22} />
              </a>
            ) : (
              <span className="portfolio-open portfolio-open-static">
                <ArrowUpRight size={22} />
              </span>
            )}
          </div>
        </motion.div>
      </div>

      <div className="portfolio-footnote">
        <span>01 — 03</span>
        <span>AN EVOLVING PORTFOLIO</span>
      </div>
    </section>
  );
}

/* FOUNDER */

function Founder() {
  return (
    <section className="founder" id="leadership">
      <div className="founder-background-mark">G</div>

      <div className="founder-top">
        <Eyebrow light>LEADERSHIP</Eyebrow>
        <span>THE PEOPLE BEHIND THE VISION</span>
      </div>

      <Reveal className="founder-heading">
        <h2>
          Every journey
          <br />
          begins with <em>a vision.</em>
        </h2>
      </Reveal>

      <div className="founder-profile">
        <Reveal>
          <div className="founder-monogram">
            <span>V</span>
            <i />
            <small>FOUNDER</small>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="founder-information">
            <span className="founder-label">FOUNDER · GHUGE GROUP</span>
            <h3>Vedant Ghuge</h3>
            <div className="founder-line" />
            <p>
              The founder of GHUGE GROUP, bringing an entrepreneurial
              vision to building businesses, exploring opportunities
              and shaping what comes next.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="founder-bottom">
        <span>VISION</span>
        <span>INITIATIVE</span>
        <span>FORWARD THINKING</span>
      </div>
    </section>
  );
}

/* FAMILY CONNECTION */

function Family() {
  return (
    <section className="family">
      <div className="family-heading">
        <Reveal>
          <Eyebrow>ROOTS & FOUNDATIONS</Eyebrow>
          <h2>
            The people.
            <br />
            <em>The foundation.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p>
            Family is part of the story behind GHUGE GROUP. Its roots
            and relationships form a meaningful part of the journey.
          </p>
        </Reveal>
      </div>

      <div className="family-visual">
        <motion.div
          className="family-person family-parent"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>FATHER</span>
          <strong>Somnath Ghuge</strong>
        </motion.div>

        <motion.div
          className="family-stem"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        />

        <motion.div
          className="family-horizontal"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
        />

        <div className="family-sons">
          <motion.div
            className="family-person"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span>SON</span>
            <strong>Harshal Ghuge</strong>
          </motion.div>

          <motion.div
            className="family-person family-vedant"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.95 }}
          >
            <span>SON · FOUNDER</span>
            <strong>Vedant Ghuge</strong>
          </motion.div>
        </div>
      </div>

      <div className="family-caption">
        <span>A FAMILY CONNECTION</span>
        <span>PART OF THE GHUGE GROUP STORY</span>
      </div>
    </section>
  );
}

/* CONTACT */

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-decoration">
        <BrandMark large />
      </div>

      <div className="contact-content">
        <Reveal>
          <Eyebrow light>THE NEXT CHAPTER</Eyebrow>
          <h2>
            Let's build
            <br />
            <em>what comes next.</em>
          </h2>
          <p>
            For business conversations, collaborations and partnership
            opportunities, connect with us.
          </p>
          <a href="mailto:connect@uplyftbusiness.com" className="contact-link">
            START A CONVERSATION
            <span><ArrowUpRight size={18} /></span>
          </a>
          <small>
            Contact currently uses the UpLyftBusiness email address.
          </small>
        </Reveal>
      </div>
    </section>
  );
}

/* FOOTER */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="footer-brand">
          <span>G.</span>
          GHUGE GROUP
        </a>

        <div className="footer-links">
          <a href="#group">THE GROUP</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#leadership">LEADERSHIP</a>
          <a href="#contact">CONTACT</a>
        </div>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} GHUGE GROUP</span>
        <span>BUILT WITH VISION. DRIVEN BY AMBITION.</span>
        <span>INDEPENDENT VENTURES · ONE VISION</span>
      </div>
    </footer>
  );
}

/* PAGE */

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="ghuge-site">
      <style>{styles}</style>

      <motion.div className="scroll-progress" style={{ width: progress }} />

      <Navigation />

      <main>
        <Hero />
        <GroupStory />
        <Philosophy />
        <Portfolio />
        <Founder />
        <Family />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* STYLES */

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

:root {
  --wine: #351820;
  --wine-deep: #241419;
  --wine-mid: #51232D;
  --wine-soft: #713844;
  --cream: #F4E8DA;
  --cream-dark: #E9D8C9;
  --gold: #C7A47B;
  --gold-light: #E4C49C;
  --rose: #C99B91;
  --ink: #291B1E;
  --muted: #897775;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 78px;
}

body {
  margin: 0;
}

.ghuge-site {
  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
}

.ghuge-site * {
  box-sizing: border-box;
}

.ghuge-site a {
  text-decoration: none;
}

.ghuge-site button {
  font: inherit;
}

.scroll-progress {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--gold);
}

/* BRAND MARK */

.brand-mark {
  width: 42px;
  height: 42px;
}

.brand-mark svg {
  display: block;
  width: 100%;
  height: 100%;
}

.brand-mark-large {
  width: 100%;
  height: 100%;
}

/* EYEBROW */

.eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--wine);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 3px;
}

.eyebrow-line {
  display: block;
  width: 29px;
  height: 1px;
  background: var(--gold);
}

.eyebrow-light {
  color: var(--gold-light);
}

/* NAVIGATION */

.site-nav {
  height: 78px;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(244,232,218,.96);
  border-bottom: 1px solid rgba(81,35,45,.12);
  backdrop-filter: blur(18px);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 11px;
  color: var(--wine);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
}

.nav-brand-symbol {
  font: 38px 'Playfair Display',serif;
  color: var(--wine);
}

.nav-brand small {
  display: block;
  font-size: 8px;
  letter-spacing: 5px;
  margin-top: 4px;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a,
.nav-cta {
  color: #655151;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.5px;
  transition: color .3s;
}

.nav-links a:hover,
.nav-cta:hover {
  color: var(--gold);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--gold);
  padding-bottom: 9px;
}

.nav-menu-button {
  display: none;
  background: none;
  border: 0;
  color: var(--wine);
  cursor: pointer;
}

/* HERO */

.hero {
  min-height: 790px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 100px 10%;
  color: var(--cream);
  background:
    radial-gradient(ellipse at 75% 45%, rgba(113,56,68,.4), transparent 42%),
    linear-gradient(115deg, #241419, #351820 55%, #45232D);
}

.hero:after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(90deg, rgba(36,20,25,.4), transparent 80%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  opacity: .13;
  background-image:
    linear-gradient(rgba(228,196,156,.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(228,196,156,.18) 1px, transparent 1px);
  background-size: 100px 100px;
  mask-image: radial-gradient(ellipse at 80% 50%, black, transparent 75%);
}

.hero-grain {
  position: absolute;
  inset: 0;
  opacity: .09;
  background-image: repeating-linear-gradient(
    0deg,
    transparent 0,
    rgba(255,255,255,.04) 1px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  width: 480px;
  height: 480px;
  right: 10%;
  top: 20%;
  border-radius: 50%;
  background: rgba(201,155,145,.1);
  filter: blur(100px);
}

.hero-content {
  width: 58%;
  position: relative;
  z-index: 5;
}

.hero-kicker {
  display: flex;
  align-items: center;
  gap: 13px;
  color: var(--gold-light);
  font-size: 9px;
  letter-spacing: 3px;
}

.hero-kicker span {
  width: 30px;
  height: 1px;
  background: var(--gold);
}

.hero h1 {
  font: 500 clamp(85px, 12vw, 155px)/.82 'Playfair Display',serif;
  letter-spacing: -7px;
  margin: 48px 0 35px;
}

.hero h1 em {
  color: var(--rose);
  font-weight: 400;
}

.hero-divider {
  height: 1px;
  background: var(--gold);
  margin: 40px 0 28px;
}

.hero-tagline {
  font: 31px/1.25 'Playfair Display',serif;
  margin: 0;
}

.hero-tagline span {
  color: var(--gold-light);
  font-style: italic;
}

.hero-description {
  max-width: 390px;
  color: rgba(244,232,218,.68);
  font-size: 12px;
  line-height: 2;
  margin-top: 23px;
}

.hero-explore {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-top: 39px;
  padding-bottom: 13px;
  color: var(--cream);
  font-size: 9px;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--gold);
  transition: gap .3s;
}

.hero-explore:hover {
  gap: 30px;
}

.hero-explore span {
  display: grid;
  place-items: center;
  color: var(--gold);
}

.hero-symbol-wrap {
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  width: 48%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  z-index: 2;
}

.symbol-orbit {
  position: absolute;
  border: 1px solid rgba(199,164,123,.28);
  border-radius: 50%;
}

.orbit-one {
  width: 90%;
  height: 48%;
  transform: rotate(-38deg);
}

.orbit-two {
  width: 74%;
  height: 92%;
  border-color: rgba(201,155,145,.25);
}

.orbit-three {
  width: 84%;
  height: 84%;
  border-style: dashed;
  border-color: rgba(244,232,218,.14);
}

.hero-symbol-core {
  width: 48%;
  aspect-ratio: 1;
  padding: 22px;
  border: 1px solid rgba(199,164,123,.7);
  border-radius: 50%;
  background: radial-gradient(circle at 35% 25%, #70414A, #351820 72%);
  box-shadow:
    0 0 90px rgba(201,155,145,.13),
    inset 0 0 40px rgba(255,255,255,.04);
}

.orbit-caption {
  position: absolute;
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 4px;
}

.orbit-caption-top {
  top: 12%;
  right: 23%;
}

.orbit-caption-bottom {
  bottom: 12%;
  left: 20%;
}

.orbit-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold-light);
  box-shadow: 0 0 18px var(--gold);
}

.orbit-dot-one {
  top: 19%;
  left: 28%;
}

.orbit-dot-two {
  bottom: 20%;
  right: 18%;
}

.hero-bottom {
  position: absolute;
  bottom: 27px;
  left: 7%;
  right: 7%;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  color: rgba(244,232,218,.42);
  font-size: 8px;
  letter-spacing: 2px;
}

.hero-side-index {
  position: absolute;
  right: 20px;
  top: 50%;
  writing-mode: vertical-rl;
  color: rgba(244,232,218,.35);
  font-size: 8px;
  letter-spacing: 3px;
}

/* GROUP STORY */

.group-story {
  position: relative;
  padding: 120px 12% 75px;
  min-height: 760px;
  overflow: hidden;
  background: var(--cream);
}

.story-topline,
.story-bottomline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.story-reference,
.story-bottomline {
  color: #A38D82;
  font-size: 8px;
  letter-spacing: 2px;
}

.story-main {
  position: relative;
  z-index: 2;
  margin-top: 105px;
  display: flex;
  align-items: flex-start;
  gap: 55px;
}

.story-number {
  padding-top: 15px;
  color: var(--gold);
  font: 22px 'Playfair Display',serif;
}

.story-main h2,
.portfolio-heading h2,
.family-heading h2 {
  margin: 0;
  font: 500 clamp(55px, 7vw, 94px)/1.1 'Playfair Display',serif;
  letter-spacing: -2.5px;
}

.story-main h2 em,
.portfolio-heading h2 em,
.family-heading h2 em {
  color: var(--wine-soft);
  font-weight: 400;
}

.story-description-row {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
  max-width: 780px;
  margin: 65px 0 70px auto;
}

.story-vertical-label {
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 3px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  justify-self: start;
}

.story-large-copy {
  font: 25px/1.5 'Playfair Display',serif;
  color: var(--wine);
  margin: 0 0 18px;
}

.story-small-copy {
  max-width: 500px;
  color: var(--muted);
  font-size: 11px;
  line-height: 2.1;
}

.story-decoration {
  position: absolute;
  right: -15px;
  bottom: -180px;
  display: flex;
  gap: 0;
  font: 330px/.8 'Playfair Display',serif;
  color: rgba(81,35,45,.025);
  pointer-events: none;
}

.story-decoration span:nth-child(2) {
  transform: translateX(-85px);
}

.story-decoration span:nth-child(3) {
  transform: translateX(-170px);
}

.story-bottomline {
  border-top: 1px solid rgba(81,35,45,.16);
  padding-top: 22px;
}

/* PHILOSOPHY */

.philosophy {
  position: relative;
  overflow: hidden;
  padding: 125px 12%;
  color: var(--cream);
  background:
    radial-gradient(ellipse at 90% 50%, rgba(113,56,68,.4), transparent 42%),
    var(--wine);
}

.philosophy-inner {
  position: relative;
  z-index: 2;
}

.philosophy h2 {
  max-width: 930px;
  margin: 55px 0 70px;
  font: 500 clamp(47px, 6.7vw, 84px)/1.17 'Playfair Display',serif;
  letter-spacing: -2px;
}

.philosophy h2 em {
  color: var(--rose);
  font-weight: 400;
}

.philosophy-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  border-top: 1px solid rgba(228,196,156,.25);
  padding-top: 25px;
}

.philosophy-index {
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 2px;
}

.philosophy-bottom p {
  max-width: 420px;
  margin: 0;
  color: rgba(244,232,218,.68);
  font-size: 11px;
  line-height: 2.1;
}

.philosophy-orbit {
  position: absolute;
  width: 440px;
  height: 440px;
  right: -130px;
  top: 70px;
  opacity: .13;
  pointer-events: none;
}

.philosophy-orbit div {
  position: absolute;
  inset: 0;
  border: 1px solid var(--gold);
  border-radius: 50%;
}

.philosophy-orbit div:nth-child(2) {
  inset: 45px;
}

.philosophy-orbit div:nth-child(3) {
  inset: 90px;
}

.philosophy-orbit span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font: 220px 'Playfair Display',serif;
  color: var(--gold);
}

/* PORTFOLIO */

.portfolio {
  padding: 120px 12% 75px;
  background: var(--cream-dark);
}

.portfolio-heading {
  display: grid;
  grid-template-columns: 1.35fr .65fr;
  align-items: end;
  gap: 50px;
}

.portfolio-heading h2 {
  margin-top: 38px;
}

.portfolio-heading > div:last-child p {
  max-width: 300px;
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 11px;
  line-height: 2.1;
}

.portfolio-layout {
  display: grid;
  grid-template-columns: .75fr 1.25fr;
  gap: 65px;
  align-items: center;
  margin-top: 85px;
}

.portfolio-index > span {
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 3px;
}

.portfolio-tab {
  width: 100%;
  display: grid;
  grid-template-columns: 35px 1fr 20px;
  align-items: center;
  gap: 12px;
  padding: 23px 0;
  text-align: left;
  border: 0;
  border-bottom: 1px solid rgba(81,35,45,.16);
  background: transparent;
  color: #846F6A;
  font: 21px 'Playfair Display',serif;
  cursor: pointer;
  transition: color .3s, padding .3s;
}

.portfolio-tab:first-of-type {
  margin-top: 20px;
}

.portfolio-tab > span {
  font: 9px 'DM Sans',sans-serif;
  color: var(--gold);
}

.portfolio-tab svg {
  opacity: 0;
  transition: opacity .3s, transform .3s;
}

.portfolio-tab.active,
.portfolio-tab:hover {
  color: var(--wine);
  padding-left: 8px;
}

.portfolio-tab.active svg,
.portfolio-tab:hover svg {
  opacity: 1;
  transform: translate(2px,-2px);
}

.portfolio-index-note {
  margin-top: 40px;
  color: #A18C80;
  font-size: 8px;
  line-height: 2;
  letter-spacing: 2px;
}

.portfolio-display {
  min-width: 0;
}

.portfolio-display-top {
  display: flex;
  justify-content: space-between;
  color: #A18C80;
  font-size: 8px;
  letter-spacing: 2px;
  padding-bottom: 15px;
}

.portfolio-art {
  position: relative;
  aspect-ratio: 1.4;
  overflow: hidden;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 50% 48%, rgba(113,56,68,.9), transparent 38%),
    linear-gradient(135deg, #28171D, #51232D 60%, #29191D);
}

.portfolio-art:before,
.portfolio-art:after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.portfolio-art:before {
  background-image:
    linear-gradient(rgba(228,196,156,.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(228,196,156,.12) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: .25;
}

.portfolio-art:after {
  border: 1px solid rgba(228,196,156,.22);
  inset: 15px;
}

.portfolio-art-ring {
  position: absolute;
  border: 1px solid rgba(228,196,156,.35);
  border-radius: 50%;
}

.ring-a {
  width: 65%;
  height: 65%;
}

.ring-b {
  width: 45%;
  height: 45%;
  border-style: dashed;
}

.ring-c {
  width: 85%;
  height: 85%;
  border-color: rgba(228,196,156,.15);
}

.portfolio-art-letter {
  position: relative;
  z-index: 2;
  color: var(--cream);
  font: 190px/.9 'Playfair Display',serif;
  text-shadow: 0 0 50px rgba(228,196,156,.2);
}

.portfolio-art-detail {
  position: absolute;
  bottom: 27px;
  left: 30px;
  color: var(--gold-light);
  font-size: 8px;
  letter-spacing: 4px;
}

.portfolio-art-coordinate {
  position: absolute;
  top: 28px;
  right: 30px;
  color: rgba(244,232,218,.5);
  font-size: 8px;
  letter-spacing: 2px;
}

.portfolio-art-cross {
  position: absolute;
  width: 1px;
  height: 110%;
  background: rgba(228,196,156,.13);
  transform: rotate(45deg);
}

.cross-a {
  left: 25%;
}

.cross-b {
  right: 25%;
  transform: rotate(-45deg);
}

.portfolio-display-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding-top: 27px;
}

.portfolio-status {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #947C6D;
  font-size: 8px;
  letter-spacing: 2px;
}

.portfolio-status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

.portfolio-display-bottom h3 {
  color: var(--wine);
  font: 36px 'Playfair Display',serif;
  margin: 12px 0 8px;
}

.portfolio-display-bottom p {
  color: var(--muted);
  font-size: 10px;
  line-height: 1.9;
  max-width: 350px;
  margin: 0;
}

.portfolio-open {
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(81,35,45,.3);
  border-radius: 50%;
  color: var(--wine);
  transition: background .3s, color .3s, transform .3s;
}

a.portfolio-open:hover {
  background: var(--wine);
  color: var(--cream);
  transform: rotate(45deg);
}

.portfolio-open-static {
  opacity: .45;
}

.portfolio-footnote {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(81,35,45,.16);
  padding-top: 20px;
  margin-top: 80px;
  color: #A18C80;
  font-size: 8px;
  letter-spacing: 2px;
}

/* FOUNDER */

.founder {
  position: relative;
  overflow: hidden;
  padding: 125px 12% 45px;
  color: var(--cream);
  background:
    radial-gradient(ellipse at 85% 55%, rgba(113,56,68,.35), transparent 43%),
    var(--wine-deep);
}

.founder-background-mark {
  position: absolute;
  right: -30px;
  top: 20px;
  color: rgba(228,196,156,.035);
  font: 620px/.9 'Playfair Display',serif;
  pointer-events: none;
}

.founder-top {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.founder-top > span {
  color: rgba(244,232,218,.38);
  font-size: 8px;
  letter-spacing: 2px;
}

.founder-heading {
  position: relative;
  margin-top: 65px;
}

.founder-heading h2 {
  font: 500 clamp(54px, 7vw, 90px)/1.1 'Playfair Display',serif;
  letter-spacing: -2px;
  margin: 0;
}

.founder-heading em {
  color: var(--rose);
  font-weight: 400;
}

.founder-profile {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
  max-width: 800px;
  margin: 90px 0 75px;
}

.founder-monogram {
  width: 175px;
  height: 175px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 35% 30%, #633641, #28171D 75%);
  box-shadow: 0 0 70px rgba(199,164,123,.08);
}

.founder-monogram:before,
.founder-monogram:after {
  content: "";
  position: absolute;
  border: 1px solid rgba(199,164,123,.3);
  border-radius: 50%;
  inset: 10px;
}

.founder-monogram:after {
  inset: -12px;
  border-style: dashed;
}

.founder-monogram > span {
  color: var(--gold-light);
  font: 120px 'Playfair Display',serif;
}

.founder-monogram small {
  position: absolute;
  bottom: 35px;
  color: var(--gold-light);
  font-size: 7px;
  letter-spacing: 3px;
}

.founder-information {
  max-width: 390px;
}

.founder-label {
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 3px;
}

.founder-information h3 {
  font: 36px 'Playfair Display',serif;
  margin: 15px 0;
}

.founder-line {
  height: 1px;
  width: 50px;
  background: var(--gold);
  margin: 20px 0;
}

.founder-information p {
  color: rgba(244,232,218,.65);
  font-size: 11px;
  line-height: 2.1;
}

.founder-bottom {
  position: relative;
  border-top: 1px solid rgba(228,196,156,.2);
  padding-top: 22px;
  display: flex;
  gap: 50px;
  color: var(--gold);
  font-size: 8px;
  letter-spacing: 2px;
}

/* FAMILY */

.family {
  padding: 120px 12% 75px;
  background: var(--cream);
}

.family-heading {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  align-items: end;
  gap: 50px;
}

.family-heading h2 {
  margin-top: 35px;
}

.family-heading > div:last-child p {
  max-width: 310px;
  color: var(--muted);
  font-size: 11px;
  line-height: 2.1;
  margin: 0 0 8px;
}

.family-visual {
  max-width: 650px;
  margin: 90px auto 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.family-person {
  min-width: 235px;
  padding: 21px 18px;
  border-bottom: 1px solid var(--gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  text-align: center;
}

.family-person > span {
  color: #A58B7E;
  font-size: 8px;
  letter-spacing: 3px;
}

.family-person strong {
  color: var(--wine);
  font: 23px 'Playfair Display',serif;
}

.family-stem {
  width: 1px;
  height: 50px;
  background: var(--gold);
  transform-origin: top;
}

.family-horizontal {
  width: 245px;
  height: 1px;
  background: var(--gold);
  transform-origin: center;
}

.family-sons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
  position: relative;
  width: min(100%, 530px);
}

.family-sons:before,
.family-sons:after {
  content: "";
  position: absolute;
  top: -25px;
  width: 1px;
  height: 25px;
  background: var(--gold);
}

.family-sons:before {
  left: calc(50% - 32px);
}

.family-sons:after {
  left: calc(50% + 32px);
}

.family-vedant {
  background: rgba(201,155,145,.1);
}

.family-caption {
  border-top: 1px solid rgba(81,35,45,.16);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  color: #A18C80;
  font-size: 8px;
  letter-spacing: 2px;
}

/* CONTACT */

.contact {
  position: relative;
  overflow: hidden;
  min-height: 580px;
  padding: 125px 12%;
  color: var(--cream);
  background:
    radial-gradient(ellipse at 85% 50%, rgba(113,56,68,.35), transparent 43%),
    var(--wine);
}

.contact-content {
  position: relative;
  z-index: 2;
}

.contact h2 {
  margin: 45px 0 22px;
  font: 500 clamp(55px, 7vw, 91px)/1.1 'Playfair Display',serif;
  letter-spacing: -2px;
}

.contact h2 em {
  color: var(--rose);
  font-weight: 400;
}

.contact-content p {
  max-width: 400px;
  color: rgba(244,232,218,.65);
  font-size: 11px;
  line-height: 2;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 25px;
  margin-top: 28px;
  padding-bottom: 13px;
  border-bottom: 1px solid var(--gold);
  color: var(--gold-light);
  font-size: 9px;
  letter-spacing: 2px;
  transition: gap .3s;
}

.contact-link:hover {
  gap: 37px;
}

.contact-link span {
  display: grid;
  place-items: center;
}

.contact-content small {
  display: block;
  margin-top: 24px;
  color: rgba(244,232,218,.35);
  font-size: 9px;
}

.contact-decoration {
  position: absolute;
  width: 430px;
  height: 430px;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  opacity: .14;
}

/* FOOTER */

.footer {
  padding: 35px 7% 23px;
  color: var(--cream);
  background: #1D1316;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding-bottom: 30px;
}

.footer-brand {
  color: var(--cream);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
}

.footer-brand span {
  color: var(--gold);
  font: 37px 'Playfair Display',serif;
}

.footer-links {
  display: flex;
  gap: 23px;
}

.footer-links a,
.back-top {
  color: rgba(244,232,218,.6);
  font-size: 8px;
  letter-spacing: 1.4px;
  transition: color .3s;
}

.footer-links a:hover,
.back-top:hover {
  color: var(--gold);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-top: 1px solid rgba(244,232,218,.13);
  padding-top: 19px;
  color: rgba(244,232,218,.34);
  font-size: 8px;
  letter-spacing: 1px;
}

/* TABLET */

@media(max-width: 900px) {
  .hero {
    padding-left: 7%;
    padding-right: 7%;
  }

  .hero-content {
    width: 62%;
  }

  .hero-symbol-wrap {
    right: -9%;
    width: 50%;
    opacity: .8;
  }

  .hero h1 {
    font-size: 112px;
  }

  .group-story,
  .philosophy,
  .portfolio,
  .founder,
  .family,
  .contact {
    padding-left: 8%;
    padding-right: 8%;
  }

  .portfolio-layout {
    gap: 35px;
  }

  .footer-links {
    gap: 13px;
  }
}

/* MOBILE */

@media(max-width: 650px) {
  html {
    scroll-padding-top: 70px;
  }

  .site-nav {
    height: 70px;
    padding: 0 20px;
  }

  .nav-menu-button {
    display: block;
  }

  .nav-cta {
    margin-left: auto;
    margin-right: 18px;
    font-size: 8px;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 15px 25px 22px;
    background: var(--cream);
    border-bottom: 1px solid rgba(81,35,45,.15);
  }

  .nav-links-open {
    display: flex;
  }

  .nav-links a {
    padding: 15px 0;
    border-bottom: 1px solid rgba(81,35,45,.1);
  }

  .hero {
    min-height: 820px;
    padding: 82px 25px 60px;
    align-items: flex-start;
  }

  .hero-content {
    width: 100%;
  }

  .hero-kicker {
    font-size: 7px;
    letter-spacing: 2px;
  }

  .hero h1 {
    font-size: clamp(77px, 19vw, 108px);
    letter-spacing: -5px;
    margin-top: 38px;
  }

  .hero-tagline {
    font-size: 25px;
  }

  .hero-description {
    max-width: 320px;
    font-size: 11px;
  }

  .hero-symbol-wrap {
    width: 85%;
    right: -4%;
    top: auto;
    bottom: 0;
    opacity: .72;
  }

  .hero-symbol-core {
    width: 42%;
    padding: 13px;
  }

  .orbit-caption {
    font-size: 7px;
  }

  .hero-bottom {
    display: none;
  }

  .hero-side-index {
    display: none;
  }

  .group-story,
  .philosophy,
  .portfolio,
  .founder,
  .family,
  .contact {
    padding-left: 25px;
    padding-right: 25px;
  }

  .group-story {
    padding-top: 85px;
    padding-bottom: 65px;
    min-height: auto;
  }

  .story-reference {
    font-size: 7px;
  }

  .story-main {
    margin-top: 70px;
    gap: 18px;
  }

  .story-number {
    font-size: 17px;
  }

  .story-main h2,
  .portfolio-heading h2,
  .family-heading h2 {
    font-size: 49px;
    letter-spacing: -1.5px;
  }

  .story-description-row {
    grid-template-columns: 25px 1fr;
    gap: 18px;
    margin-top: 45px;
    margin-bottom: 55px;
  }

  .story-large-copy {
    font-size: 22px;
  }

  .story-small-copy {
    font-size: 10px;
  }

  .story-bottomline {
    font-size: 7px;
    gap: 15px;
  }

  .story-decoration {
    font-size: 200px;
    bottom: -70px;
  }

  .story-decoration span:nth-child(2) {
    transform: translateX(-50px);
  }

  .story-decoration span:nth-child(3) {
    transform: translateX(-100px);
  }

  .philosophy {
    padding-top: 85px;
    padding-bottom: 85px;
  }

  .philosophy h2 {
    font-size: 47px;
    margin: 45px 0;
  }

  .philosophy-bottom {
    flex-direction: column;
    gap: 20px;
  }

  .philosophy-orbit {
    width: 270px;
    height: 270px;
    right: -170px;
    top: 120px;
  }

  .philosophy-orbit span {
    font-size: 140px;
  }

  .portfolio {
    padding-top: 85px;
    padding-bottom: 60px;
  }

  .portfolio-heading {
    display: block;
  }

  .portfolio-heading h2 {
    margin-top: 30px;
  }

  .portfolio-heading > div:last-child p {
    margin-top: 24px;
  }

  .portfolio-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 45px;
    margin-top: 55px;
  }

  .portfolio-tab {
    font-size: 19px;
    padding: 19px 0;
  }

  .portfolio-index-note {
    margin-top: 20px;
  }

  .portfolio-art {
    aspect-ratio: 1.12;
  }

  .portfolio-art-letter {
    font-size: 145px;
  }

  .portfolio-display-bottom h3 {
    font-size: 30px;
  }

  .portfolio-display-bottom p {
    max-width: 250px;
  }

  .portfolio-footnote {
    margin-top: 55px;
  }

  .founder {
    padding-top: 85px;
    padding-bottom: 35px;
  }

  .founder-top > span {
    max-width: 120px;
    text-align: right;
    line-height: 1.7;
  }

  .founder-heading {
    margin-top: 50px;
  }

  .founder-heading h2,
  .contact h2 {
    font-size: 52px;
  }

  .founder-profile {
    grid-template-columns: 1fr;
    gap: 45px;
    margin: 65px 0;
  }

  .founder-monogram {
    width: 135px;
    height: 135px;
  }

  .founder-monogram > span {
    font-size: 95px;
  }

  .founder-monogram small {
    bottom: 25px;
  }

  .founder-information h3 {
    font-size: 31px;
  }

  .founder-bottom {
    flex-wrap: wrap;
    gap: 17px 25px;
    font-size: 7px;
  }

  .founder-background-mark {
    font-size: 300px;
    right: -90px;
  }

  .family {
    padding-top: 85px;
    padding-bottom: 60px;
  }

  .family-heading {
    display: block;
  }

  .family-heading > div:last-child p {
    margin-top: 25px;
  }

  .family-visual {
    margin-top: 60px;
  }

  .family-person {
    min-width: 0;
    width: 100%;
    padding: 18px 5px;
  }

  .family-person strong {
    font-size: 18px;
  }

  .family-sons {
    gap: 13px;
  }

  .family-horizontal {
    width: 53%;
  }

  .family-caption {
    font-size: 7px;
    gap: 10px;
  }

  .contact {
    min-height: 520px;
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .contact h2 {
    margin-top: 40px;
  }

  .contact-decoration {
    width: 250px;
    height: 250px;
    right: -130px;
    top: 75%;
  }

  .footer {
    padding: 30px 25px 20px;
  }

  .footer-top {
    flex-wrap: wrap;
    gap: 22px;
  }

  .footer-links {
    order: 3;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px 22px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 11px;
    font-size: 7px;
  }
}

/* REDUCED MOTION ACCESSIBILITY */

@media(prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .ghuge-site *,
  .ghuge-site *:before,
  .ghuge-site *:after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;
