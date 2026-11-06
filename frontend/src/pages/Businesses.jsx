
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  MoveUpRight,
  Building2,
  Layers3,
  Compass,
  Sparkles,
  Globe2,
  CircleDot,
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
    transition: { staggerChildren: 0.14 },
  },
};

const businesses = [
  {
    number: "01",
    symbol: "L",
    name: "Laxmi Gas",
    category: "GAS EQUIPMENT & WHOLESALE",
    description:
      "A retail and wholesale business offering gas stoves, gas-related equipment and essential accessories for household and commercial use.",
    status: "OPERATING",
    type: "energy",
    path: "/businesses/laxmi-gas",
    icon: Building2,
    accent: "Retail & Distribution",
  },
  {
    number: "02",
    symbol: "U",
    name: "UpLyftBusiness",
    category: "DIGITAL & TECHNOLOGY",
    description:
      "A digital solutions and technology venture helping businesses build their online presence through websites, digital marketing, branding and creative services.",
    status: "OPERATING",
    type: "digital",
    path: "/businesses/uplyftbusiness",
    icon: Globe2,
    accent: "Digital Solutions",
  },
  {
    number: "03",
    symbol: "S",
    name: "Sports Academy",
    category: "SPORTS & RECREATION",
    description:
      "An upcoming sports facility planned for badminton, skating and other activities, bringing together training, practice and recreational play.",
    status: "COMING SOON",
    type: "sports",
    path: "/businesses/sports-academy",
    icon: Compass,
    accent: "Sports & Development",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={reduceMotion ? { duration: 0 } : { delay }}
    >
      {children}
    </motion.div>
  );
}

function BusinessCard({ business, index }) {
  const Icon = business.icon;

  return (
    <motion.article
      className={`venture-card ${business.type}`}
      variants={reveal}
      whileHover={{ y: -9 }}
      transition={{ duration: 0.4, ease }}
    >
      <Link to={business.path} className="venture-card-link">
        <div className="venture-card-top">
          <span className="venture-number">{business.number}</span>

          <span
            className={`venture-status ${
              business.status === "COMING SOON" ? "upcoming" : ""
            }`}
          >
            <span className="venture-status-dot" />
            {business.status}
          </span>
        </div>

        <div className="venture-art">
          <div className="venture-art-ring ring-a" />
          <div className="venture-art-ring ring-b" />
          <div className="venture-art-ring ring-c" />

          <motion.div
            className="venture-art-letter"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.12, ease }}
          >
            {business.symbol}
          </motion.div>

          <div className="venture-art-icon">
            <Icon size={19} strokeWidth={1.5} />
          </div>
        </div>

        <div className="venture-card-content">
          <div className="venture-card-copy">
            <span className="venture-category">{business.category}</span>
            <h3>{business.name}</h3>
            <p>{business.description}</p>
          </div>

          <div className="venture-card-bottom">
            <span className="venture-accent">{business.accent}</span>
            <span className="venture-arrow">
              <MoveUpRight size={19} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Businesses() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <style>{styles}</style>

      <main className="businesses-page">
        {/* HERO */}
        <section className="business-hero">
          <div className="hero-background-grid" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="business-hero-inner">
            <motion.div
              className="business-hero-copy"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className="business-eyebrow" variants={reveal}>
                <span className="eyebrow-line" />
                THE GHUGE GROUP PORTFOLIO
              </motion.div>

              <motion.h1 variants={reveal}>
                Different
                <br />
                businesses.
                <br />
                <em>One vision.</em>
              </motion.h1>

              <motion.p variants={reveal}>
                Independent ventures. Distinct identities. One shared
                ambition to build meaningful businesses and explore new
                opportunities.
              </motion.p>

              <motion.div className="hero-actions" variants={reveal}>
                <a href="#our-businesses" className="hero-explore">
                  EXPLORE OUR BUSINESSES
                  <ArrowDown size={16} />
                </a>
                <span className="hero-action-note">A GROWING PORTFOLIO</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="business-hero-visual"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scale: 0.86, rotate: 8 }
              }
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.25, delay: 0.25, ease }}
            >
              <motion.div
                className="hero-orbit orbit-one"
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="hero-orbit orbit-two"
                animate={reduceMotion ? {} : { rotate: -360 }}
                transition={{
                  duration: 48,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="hero-orbit orbit-three" />

              <motion.div
                className="hero-center"
                animate={reduceMotion ? {} : { y: [0, -9, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span>GG</span>
                <small>GHUGE GROUP</small>
              </motion.div>

              <div className="orbit-node node-one">
                <Building2 size={17} />
              </div>
              <div className="orbit-node node-two">
                <Globe2 size={17} />
              </div>
              <div className="orbit-node node-three">
                <Compass size={17} />
              </div>

              <span className="orbit-caption caption-one">GAS</span>
              <span className="orbit-caption caption-two">DIGITAL</span>
              <span className="orbit-caption caption-three">SPORTS</span>
            </motion.div>
          </div>

          <div className="business-hero-footer">
            <span>INDEPENDENT VENTURES</span>
            <span className="footer-center-line" />
            <span>SHARED DIRECTION</span>
            <span className="footer-center-line" />
            <span>BUILT TO EVOLVE</span>
          </div>

          <div className="hero-index">01 — 04</div>
        </section>

        {/* INTRO */}
        <section className="portfolio-intro">
          <Reveal className="portfolio-intro-left">
            <span className="section-kicker">
              <span>01</span> / OUR PORTFOLIO
            </span>

            <h2>
              Built across
              <br />
              <em>different directions.</em>
            </h2>
          </Reveal>

          <Reveal className="portfolio-intro-right" delay={0.12}>
            <div className="intro-mark">
              <Sparkles size={19} />
            </div>

            <p>
              GHUGE GROUP brings together businesses and initiatives across
              different fields. Each venture has its own purpose, identity
              and direction, while contributing to a larger vision of growth.
            </p>

            <div className="intro-signature">
              <span />
              ONE GROUP. MULTIPLE POSSIBILITIES.
            </div>
          </Reveal>
        </section>

        {/* BUSINESS PORTFOLIO */}
        <section className="business-list-section" id="our-businesses">
          <div className="business-section-heading">
            <Reveal>
              <span className="section-kicker">
                <span>02</span> / OUR BUSINESSES
              </span>
              <h2>Our ventures<span>.</span></h2>
            </Reveal>

            <Reveal className="portfolio-total">
              <span className="portfolio-total-number">03</span>
              <span>
                CURRENT PORTFOLIO
                <br />
                INITIATIVES
              </span>
            </Reveal>
          </div>

          <motion.div
            className="venture-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {businesses.map((business, index) => (
              <BusinessCard
                key={business.number}
                business={business}
                index={index}
              />
            ))}
          </motion.div>

          <Reveal className="portfolio-footnote">
            <span className="footnote-line" />
            SELECT A VENTURE TO EXPLORE ITS PROFILE
            <ArrowUpRight size={14} />
          </Reveal>
        </section>

        {/* APPROACH */}
        <section className="group-approach">
          <div className="approach-heading">
            <Reveal>
              <span className="section-kicker">
                <span>03</span> / THE GROUP APPROACH
              </span>
              <h2>
                Different paths.
                <br />
                <em>Shared ambition.</em>
              </h2>
            </Reveal>
          </div>

          <div className="approach-content">
            <Reveal className="approach-description">
              <span className="approach-quote-mark">“</span>
              <p>
                Growth can take many forms. We believe in building
                independent ventures with their own purpose, while moving
                forward with a shared ambition.
              </p>
              <span className="approach-caption">
                THE GHUGE GROUP PHILOSOPHY
              </span>
            </Reveal>

            <motion.div
              className="approach-points"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="approach-point" variants={reveal}>
                <div className="approach-icon">
                  <Building2 size={20} />
                </div>
                <div className="approach-point-copy">
                  <span>01</span>
                  <h3>Independent identities</h3>
                  <p>
                    Every venture develops its own identity, purpose and
                    direction.
                  </p>
                </div>
                <ArrowUpRight className="point-arrow" size={18} />
              </motion.div>

              <motion.div className="approach-point" variants={reveal}>
                <div className="approach-icon">
                  <Layers3 size={20} />
                </div>
                <div className="approach-point-copy">
                  <span>02</span>
                  <h3>Multiple industries</h3>
                  <p>
                    Exploring opportunities across different sectors and
                    markets.
                  </p>
                </div>
                <ArrowUpRight className="point-arrow" size={18} />
              </motion.div>

              <motion.div className="approach-point" variants={reveal}>
                <div className="approach-icon">
                  <Compass size={20} />
                </div>
                <div className="approach-point-copy">
                  <span>03</span>
                  <h3>Long-term direction</h3>
                  <p>
                    Building with a vision that continues to evolve over
                    time.
                  </p>
                </div>
                <ArrowUpRight className="point-arrow" size={18} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FUTURE */}
        <section className="business-future">
          <div className="future-pattern" />
          <div className="future-monogram">GG</div>

          <Reveal className="future-content">
            <span className="section-kicker">
              <span>04</span> / WHAT COMES NEXT
            </span>

            <h2>
              The portfolio
              <br />
              is <em>still growing.</em>
            </h2>

            <p>
              New ideas. New industries. New possibilities. GHUGE GROUP
              continues to look ahead, with a vision to explore and develop
              opportunities for the future.
            </p>

            <Link to="/contact" className="future-link">
              CONNECT WITH US
              <ArrowUpRight size={18} />
            </Link>
          </Reveal>

          <div className="future-bottom">
            <span>GHUGE GROUP</span>
            <span>BUILT WITH VISION. DRIVEN BY AMBITION.</span>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.businesses-page {
  --orange: #E96A24;
  --orange-dark: #C94B12;
  --orange-mid: #F28A42;
  --orange-light: #F8B078;
  --cream: #FFF9F3;
  --peach: #FCE6D5;
  --peach-deep: #F4D5BD;
  --ink: #783311;
  --muted: #98684E;
  --line: rgba(120, 51, 17, .15);

  width: 100%;
  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
}

.businesses-page *,
.businesses-page *::before,
.businesses-page *::after {
  box-sizing: border-box;
}

.businesses-page a {
  color: inherit;
  text-decoration: none;
}

/* SHARED */

.businesses-page .section-kicker {
  display: flex;
  align-items: center;
  gap: 11px;
  color: var(--orange-dark);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2.2px;
}

.section-kicker > span {
  color: var(--orange);
}

.businesses-page h2,
.businesses-page h3,
.businesses-page p {
  margin-top: 0;
}

/* HERO */

.business-hero {
  min-height: 690px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 95px 8% 28px;
  background:
    radial-gradient(ellipse at 76% 48%, rgba(248,176,120,.27), transparent 36%),
    linear-gradient(125deg, #F28A42 0%, #E96A24 54%, #D95718 100%);
  color: var(--cream);
}

.hero-background-grid {
  position: absolute;
  inset: 0;
  z-index: -2;
  opacity: .13;
  background-image:
    linear-gradient(rgba(255,249,243,.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,249,243,.22) 1px, transparent 1px);
  background-size: 75px 75px;
  mask-image: linear-gradient(90deg, transparent, black 40%, black);
}

.hero-glow {
  position: absolute;
  z-index: -1;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

.hero-glow-one {
  top: -270px;
  right: 10%;
  background: rgba(255,249,243,.12);
}

.hero-glow-two {
  bottom: -340px;
  left: 23%;
  background: rgba(255,214,180,.15);
}

.business-hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  min-height: 530px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.04fr .96fr;
  align-items: center;
}

.business-hero-copy {
  padding: 28px 0 48px;
}

.business-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #FFF0E2;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

.eyebrow-line {
  width: 29px;
  height: 1px;
  background: #FFF0E2;
}

.business-hero h1 {
  margin: 34px 0 23px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(65px, 7.3vw, 102px);
  font-weight: 400;
  letter-spacing: -4.5px;
  line-height: .98;
}

.business-hero h1 em {
  color: #FFE7D2;
  font-weight: 400;
}

.business-hero-copy > p {
  max-width: 440px;
  margin-bottom: 0;
  color: rgba(255,249,243,.88);
  font-size: 13px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 32px;
}

.hero-explore {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(255,249,243,.75);
  color: var(--cream);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  transition: gap .3s ease;
}

.hero-explore:hover {
  gap: 25px;
}

.hero-action-note {
  color: rgba(255,249,243,.65);
  font-size: 8px;
  letter-spacing: 1.5px;
}

/* HERO ORBIT */

.business-hero-visual {
  position: relative;
  width: 100%;
  max-width: 510px;
  height: 475px;
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(255,249,243,.42);
  border-radius: 50%;
}

.orbit-one {
  width: 205px;
  height: 205px;
}

.orbit-two {
  width: 325px;
  height: 325px;
  border-style: dashed;
  border-color: rgba(255,249,243,.32);
}

.orbit-three {
  width: 435px;
  height: 435px;
  border-color: rgba(255,249,243,.2);
}

.hero-center {
  position: relative;
  z-index: 3;
  width: 145px;
  height: 145px;
  border: 1px solid rgba(255,249,243,.85);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 35% 30%, #F8B078, #D95718 78%);
  box-shadow:
    0 0 0 12px rgba(255,249,243,.055),
    0 0 75px rgba(255,249,243,.22);
}

.hero-center span {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -5px;
  color: #FFF9F3;
}

.hero-center small {
  margin-top: 7px;
  color: #FFF0E2;
  font-size: 7px;
  letter-spacing: 2px;
}

.orbit-node {
  position: absolute;
  z-index: 4;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,249,243,.72);
  border-radius: 50%;
  color: #FFF9F3;
  background: #E96A24;
  box-shadow: 0 8px 25px rgba(120,51,17,.12);
}

.node-one {
  top: 14%;
  right: 24%;
}

.node-two {
  right: 3%;
  bottom: 29%;
}

.node-three {
  bottom: 11%;
  left: 24%;
}

.orbit-caption {
  position: absolute;
  z-index: 4;
  padding: 7px 10px;
  border: 1px solid rgba(255,249,243,.4);
  background: rgba(201,75,18,.52);
  color: #FFF9F3;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.caption-one {
  top: 12%;
  left: 18%;
}

.caption-two {
  top: 49%;
  right: 0;
}

.caption-three {
  bottom: 8%;
  right: 27%;
}

.business-hero-footer {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 22px auto 0;
  padding-top: 18px;
  border-top: 1px solid rgba(255,249,243,.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: rgba(255,249,243,.76);
  font-size: 8px;
  letter-spacing: 1.8px;
}

.footer-center-line {
  width: 25px;
  height: 1px;
  background: rgba(255,249,243,.45);
}

.hero-index {
  position: absolute;
  right: 3%;
  top: 50%;
  transform: rotate(90deg);
  color: rgba(255,249,243,.55);
  font-size: 8px;
  letter-spacing: 2px;
}

/* PORTFOLIO INTRO */

.portfolio-intro {
  max-width: 1280px;
  margin: auto;
  padding: 105px 8% 100px;
  display: grid;
  grid-template-columns: 1fr .78fr;
  gap: 90px;
  align-items: end;
}

.portfolio-intro h2,
.approach-heading h2 {
  margin: 25px 0 0;
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 5.1vw, 66px);
  font-weight: 400;
  letter-spacing: -2.6px;
  line-height: 1.12;
}

.portfolio-intro h2 em,
.approach-heading h2 em {
  color: var(--orange-dark);
  font-weight: 400;
}

.portfolio-intro-right {
  padding-bottom: 7px;
}

.intro-mark {
  width: 39px;
  height: 39px;
  margin-bottom: 18px;
  border: 1px solid rgba(233,106,36,.42);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange);
}

.portfolio-intro-right p {
  max-width: 455px;
  margin-bottom: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
}

.intro-signature {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 27px;
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.intro-signature span {
  width: 30px;
  height: 1px;
  background: var(--orange);
}

/* BUSINESS CARDS */

.business-list-section {
  padding: 95px 8% 88px;
  background:
    radial-gradient(circle at 90% 0%, rgba(248,176,120,.17), transparent 28%),
    #FCEBDD;
}

.business-section-heading {
  max-width: 1280px;
  margin: 0 auto 42px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.business-section-heading h2 {
  margin: 17px 0 0;
  font-family: 'Playfair Display', serif;
  font-size: 57px;
  font-weight: 400;
  letter-spacing: -2.5px;
}

.business-section-heading h2 span {
  color: var(--orange);
}

.portfolio-total {
  display: flex;
  align-items: center;
  gap: 13px;
  padding-bottom: 7px;
  color: var(--muted);
  font-size: 8px;
  line-height: 1.7;
  letter-spacing: 1.5px;
}

.portfolio-total-number {
  color: var(--orange-dark);
  font-family: 'Playfair Display', serif;
  font-size: 37px;
  line-height: 1;
}

.venture-grid {
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}

.venture-card {
  position: relative;
  min-width: 0;
  min-height: 475px;
  overflow: hidden;
  background: linear-gradient(145deg, #E96A24, #C94B12);
  color: var(--cream);
  box-shadow: 0 15px 35px rgba(120,51,17,.06);
}

.venture-card.digital {
  background: linear-gradient(145deg, #F28A42, #D95718);
}

.venture-card.sports {
  background: linear-gradient(145deg, #FCE6D5, #F4D5BD);
  color: var(--ink);
}

.venture-card-link {
  position: relative;
  z-index: 1;
  min-height: 475px;
  height: 100%;
  padding: 25px 24px 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.venture-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.venture-number {
  color: #FFE0C5;
  font-family: 'Playfair Display', serif;
  font-size: 21px;
}

.sports .venture-number {
  color: var(--orange-dark);
}

.venture-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: rgba(255,249,243,.9);
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

.venture-status.upcoming {
  color: var(--orange-dark);
}

.venture-status-dot {
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #B8D29A;
  box-shadow: 0 0 8px rgba(184,210,154,.55);
}

.upcoming .venture-status-dot {
  background: var(--orange);
  box-shadow: none;
}

.venture-art {
  position: absolute;
  top: 70px;
  right: 4px;
  width: 205px;
  height: 205px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.venture-art-ring {
  position: absolute;
  border: 1px solid rgba(255,249,243,.25);
  border-radius: 50%;
}

.ring-a {
  inset: 0;
}

.ring-b {
  inset: 22px;
  border-style: dashed;
}

.ring-c {
  inset: 45px;
  border-color: rgba(255,249,243,.35);
}

.venture-art-letter {
  position: relative;
  z-index: 1;
  color: rgba(255,249,243,.3);
  font-family: 'Playfair Display', serif;
  font-size: 133px;
  line-height: 1;
}

.venture-art-icon {
  position: absolute;
  z-index: 2;
  right: 20px;
  bottom: 24px;
  width: 37px;
  height: 37px;
  border: 1px solid rgba(255,249,243,.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF9F3;
  background: rgba(201,75,18,.35);
}

.sports .venture-art-ring {
  border-color: rgba(120,51,17,.2);
}

.sports .venture-art-letter {
  color: rgba(120,51,17,.17);
}

.sports .venture-art-icon {
  border-color: rgba(120,51,17,.35);
  color: var(--orange-dark);
  background: rgba(255,249,243,.4);
}

.venture-card-content {
  position: relative;
  z-index: 2;
  margin-top: auto;
}

.venture-category {
  color: #FFE0C5;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.6px;
}

.sports .venture-category {
  color: var(--orange-dark);
}

.venture-card h3 {
  margin: 11px 0 12px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(29px, 2.7vw, 39px);
  font-weight: 400;
  letter-spacing: -1.2px;
  line-height: 1.1;
}

.venture-card-copy p {
  min-height: 91px;
  max-width: 350px;
  margin: 0;
  color: rgba(255,249,243,.84);
  font-size: 11px;
  line-height: 1.85;
}

.sports .venture-card-copy p {
  color: rgba(120,51,17,.78);
}

.venture-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 22px;
  padding-top: 17px;
  border-top: 1px solid rgba(255,249,243,.3);
}

.sports .venture-card-bottom {
  border-color: rgba(120,51,17,.2);
}

.venture-accent {
  color: rgba(255,249,243,.8);
  font-size: 8px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.sports .venture-accent {
  color: var(--muted);
}

.venture-arrow {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid rgba(255,249,243,.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF9F3;
  transition:
    transform .35s ease,
    background .35s ease,
    color .35s ease;
}

.sports .venture-arrow {
  border-color: rgba(120,51,17,.45);
  color: var(--orange-dark);
}

.venture-card:hover .venture-arrow {
  transform: rotate(45deg);
  background: #FFF9F3;
  color: var(--orange-dark);
}

.venture-card:focus-within {
  outline: 2px solid var(--orange-dark);
  outline-offset: 4px;
}

.portfolio-footnote {
  max-width: 1280px;
  margin: 27px auto 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.footnote-line {
  width: 26px;
  height: 1px;
  background: var(--orange);
}

/* APPROACH */

.group-approach {
  max-width: 1450px;
  margin: auto;
  padding: 110px 8% 120px;
}

.approach-heading {
  margin-bottom: 60px;
}

.approach-content {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 95px;
  align-items: start;
}

.approach-description {
  position: relative;
  padding-top: 9px;
}

.approach-quote-mark {
  display: block;
  height: 48px;
  color: var(--orange-light);
  font-family: 'Playfair Display', serif;
  font-size: 75px;
  line-height: 1;
}

.approach-description p {
  max-width: 410px;
  margin: 10px 0 25px;
  color: var(--orange-dark);
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  line-height: 1.65;
}

.approach-caption {
  color: var(--muted);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.6px;
}

.approach-points {
  border-top: 1px solid var(--line);
}

.approach-point {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 19px;
  padding: 23px 4px;
  border-bottom: 1px solid var(--line);
}

.approach-icon {
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  border: 1px solid rgba(233,106,36,.45);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange-dark);
  transition: background .3s ease, color .3s ease;
}

.approach-point:hover .approach-icon {
  background: var(--orange);
  color: white;
}

.approach-point-copy {
  flex: 1;
}

.approach-point-copy > span {
  color: var(--orange);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.approach-point h3 {
  margin: 6px 0;
  color: var(--ink);
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 400;
}

.approach-point p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

.point-arrow {
  margin: 5px 0 0 10px;
  color: var(--orange-light);
  transition: transform .3s ease, color .3s ease;
}

.approach-point:hover .point-arrow {
  transform: translate(3px, -3px);
  color: var(--orange-dark);
}

/* FUTURE */

.business-future {
  position: relative;
  isolation: isolate;
  min-height: 510px;
  overflow: hidden;
  padding: 80px 8% 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:
    radial-gradient(ellipse at 75% 30%, rgba(248,176,120,.22), transparent 35%),
    linear-gradient(120deg, #D95718, #E96A24 65%, #F28A42);
  color: var(--cream);
}

.future-pattern {
  position: absolute;
  z-index: -1;
  inset: 0;
  opacity: .11;
  background-image: radial-gradient(rgba(255,249,243,.8) .7px, transparent .7px);
  background-size: 19px 19px;
  mask-image: linear-gradient(90deg, transparent, black);
}

.future-monogram {
  position: absolute;
  z-index: -1;
  top: -65px;
  right: 4%;
  color: rgba(255,249,243,.09);
  font-family: 'Playfair Display', serif;
  font-size: clamp(240px, 35vw, 450px);
  line-height: 1;
  letter-spacing: -30px;
  pointer-events: none;
}

.future-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: auto;
}

.business-future .section-kicker {
  color: #FFE0C5;
}

.business-future .section-kicker > span {
  color: #FFF9F3;
}

.future-content h2 {
  margin: 25px 0 19px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(55px, 7vw, 86px);
  font-weight: 400;
  letter-spacing: -3px;
  line-height: 1.04;
}

.future-content h2 em {
  color: #FFE0C5;
  font-weight: 400;
}

.future-content p {
  max-width: 460px;
  margin-bottom: 0;
  color: rgba(255,249,243,.86);
  font-size: 12px;
  line-height: 1.95;
}

.future-link {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-top: 27px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,249,243,.7);
  color: #FFF9F3;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.5px;
  transition: gap .3s ease;
}

.future-link:hover {
  gap: 25px;
}

.future-bottom {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  width: 100%;
  margin: 65px auto 0;
  padding-top: 17px;
  border-top: 1px solid rgba(255,249,243,.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: rgba(255,249,243,.78);
  font-size: 8px;
  letter-spacing: 1.7px;
}

/* TABLET */

@media (max-width: 1000px) {
  .business-hero {
    padding-left: 6%;
    padding-right: 6%;
  }

  .business-hero-inner {
    grid-template-columns: 1fr .85fr;
  }

  .business-hero-visual {
    transform: scale(.83);
    transform-origin: center right;
  }

  .portfolio-intro {
    gap: 50px;
  }

  .business-list-section {
    padding-left: 6%;
    padding-right: 6%;
  }

  .venture-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .venture-card,
  .venture-card-link {
    min-height: 445px;
  }

  .venture-card h3 {
    font-size: 36px;
  }

  .approach-content {
    gap: 50px;
  }
}

/* MOBILE */

@media (max-width: 650px) {
  .business-hero {
    min-height: auto;
    padding: 90px 7% 24px;
  }

  .business-hero-inner {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .business-hero-copy {
    padding: 15px 0 0;
  }

  .business-hero h1 {
    margin: 29px 0 19px;
    font-size: clamp(59px, 15vw, 76px);
    letter-spacing: -3.5px;
  }

  .business-hero-copy > p {
    max-width: 100%;
    font-size: 12px;
  }

  .hero-actions {
    gap: 17px;
    margin-top: 25px;
  }

  .hero-action-note {
    font-size: 7px;
  }

  .business-hero-visual {
    justify-self: center;
    width: 100%;
    max-width: 390px;
    height: 330px;
    margin: -2px auto -5px;
    transform: scale(.88);
    transform-origin: center;
  }

  .orbit-one {
    width: 175px;
    height: 175px;
  }

  .orbit-two {
    width: 260px;
    height: 260px;
  }

  .orbit-three {
    width: 340px;
    height: 340px;
  }

  .hero-center {
    width: 120px;
    height: 120px;
  }

  .hero-center span {
    font-size: 43px;
  }

  .node-one {
    top: 10%;
    right: 23%;
  }

  .node-two {
    right: 0;
    bottom: 28%;
  }

  .node-three {
    bottom: 8%;
    left: 21%;
  }

  .business-hero-footer {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px 13px;
    margin-top: 13px;
    font-size: 7px;
    letter-spacing: 1.2px;
  }

  .footer-center-line {
    width: 13px;
  }

  .hero-index {
    display: none;
  }

  .portfolio-intro {
    padding: 76px 7% 78px;
    grid-template-columns: 1fr;
    gap: 27px;
  }

  .portfolio-intro h2,
  .approach-heading h2 {
    font-size: 46px;
    letter-spacing: -1.8px;
  }

  .portfolio-intro-right p {
    font-size: 12px;
  }

  .business-list-section {
    padding: 75px 6% 65px;
  }

  .business-section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 29px;
  }

  .business-section-heading h2 {
    font-size: 47px;
  }

  .portfolio-total {
    padding: 0;
  }

  .venture-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .venture-card,
  .venture-card-link {
    min-height: 425px;
  }

  .venture-card-link {
    padding: 23px;
  }

  .venture-art {
    top: 58px;
    right: 5px;
    width: 180px;
    height: 180px;
  }

  .venture-art-letter {
    font-size: 116px;
  }

  .venture-card h3 {
    font-size: 37px;
  }

  .venture-card-copy p {
    min-height: auto;
    max-width: 100%;
    font-size: 11px;
  }

  .venture-card-bottom {
    margin-top: 19px;
  }

  .portfolio-footnote {
    justify-content: flex-start;
    font-size: 7px;
    letter-spacing: 1px;
  }

  .group-approach {
    padding: 80px 7% 85px;
  }

  .approach-heading {
    margin-bottom: 37px;
  }

  .approach-content {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .approach-description p {
    font-size: 22px;
  }

  .approach-point {
    gap: 14px;
    padding: 20px 0;
  }

  .approach-point h3 {
    font-size: 19px;
  }

  .point-arrow {
    display: none;
  }

  .business-future {
    min-height: 480px;
    padding: 75px 7% 22px;
  }

  .future-content h2 {
    font-size: 59px;
    letter-spacing: -2px;
  }

  .future-content p {
    font-size: 11px;
  }

  .future-monogram {
    top: 30px;
    right: -20px;
    font-size: 270px;
  }

  .future-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 45px;
    font-size: 7px;
  }
}

/* SMALL MOBILE */

@media (max-width: 380px) {
  .business-hero h1 {
    font-size: 56px;
  }

  .business-hero-visual {
    transform: scale(.78);
    margin-top: -15px;
    margin-bottom: -20px;
  }

  .portfolio-intro h2,
  .approach-heading h2 {
    font-size: 40px;
  }

  .venture-card h3 {
    font-size: 32px;
  }

  .future-content h2 {
    font-size: 51px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .businesses-page *,
  .businesses-page *::before,
  .businesses-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
`;
