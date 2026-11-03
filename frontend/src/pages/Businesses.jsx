import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowDown,
  MoveUpRight,
  Building2,
  Layers3,
  Compass,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

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
    detail: "EXPLORE BUSINESS",
    path: "/businesses/laxmi-gas",
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
    detail: "EXPLORE BUSINESS",
    path: "/businesses/uplyftbusiness",
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
    detail: "EXPLORE BUSINESS",
    path: "/businesses/sports-academy",
  },
];

function BusinessCard({ business, index }) {
  return (
    <motion.article
      className={`business-card ${business.type} ${
        index === 0 ? "business-featured" : ""
      }`}
      variants={reveal}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.35, ease }}
    >
      <Link to={business.path} className="business-card-link">
        <div className="business-card-top">
          <span className="business-number">{business.number}</span>
          <span
            className={`business-status ${
              business.status === "COMING SOON" ? "upcoming" : ""
            }`}
          >
            <span className="status-dot" />
            {business.status}
          </span>
        </div>

        <div className={`business-symbol ${business.type}`}>
          <span>{business.symbol}</span>
          <div className="symbol-ring" />
        </div>

        <div className="business-card-bottom">
          <div>
            <span className="business-category">{business.category}</span>
            <h3>{business.name}</h3>
            <p>{business.description}</p>
          </div>

          <div className="business-card-action">
            <span>{business.detail}</span>
            <span className="business-arrow">
              <MoveUpRight size={19} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Businesses() {
  return (
    <>
      <style>{styles}</style>

      <main className="businesses-page">
        <section className="business-hero">
          <div className="business-hero-grid" />

          <div className="business-hero-inner">
            <motion.div
              className="business-hero-copy"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className="business-eyebrow" variants={reveal}>
                <span />
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
                A growing group of independent ventures, connected by a shared
                vision to build, develop and create opportunities across
                industries.
              </motion.p>

              <motion.a
                href="#our-businesses"
                className="business-explore"
                variants={reveal}
              >
                EXPLORE OUR BUSINESSES
                <ArrowDown size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              className="business-hero-visual"
              initial={{ opacity: 0, scale: 0.92, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease }}
            >
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-orbit orbit-three" />

              <div className="hero-visual-center">
                <span>GG</span>
                <small>GHUGE GROUP</small>
              </div>

              <div className="orbit-label label-one">GAS & EQUIPMENT</div>
              <div className="orbit-label label-two">DIGITAL</div>
              <div className="orbit-label label-three">SPORTS</div>
            </motion.div>
          </div>

          <div className="business-hero-footer">
            <span>INDEPENDENT VENTURES</span>
            <span>SHARED DIRECTION</span>
            <span>BUILT TO EVOLVE</span>
          </div>
        </section>

        <section className="portfolio-intro">
          <div className="portfolio-intro-left">
            <Reveal>
              <span className="section-kicker">01 / OUR PORTFOLIO</span>
              <h2>
                Built across
                <br />
                <em>different directions.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal className="portfolio-intro-right">
            <p>
              GHUGE GROUP brings together businesses and initiatives across
              different fields. Each venture has its own purpose, identity and
              direction, while contributing to a larger vision of growth.
            </p>
            <div className="intro-line">
              <span />
              ONE GROUP. MULTIPLE POSSIBILITIES.
            </div>
          </Reveal>
        </section>

        <section className="business-list-section" id="our-businesses">
          <div className="business-list-heading">
            <Reveal>
              <span className="section-kicker">02 / OUR BUSINESSES</span>
              <h2>Our ventures.</h2>
            </Reveal>

            <Reveal>
              <span className="business-count">03 — PORTFOLIO INITIATIVES</span>
            </Reveal>
          </div>

          <motion.div
            className="business-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {businesses.map((business, index) => (
              <BusinessCard
                key={business.number}
                business={business}
                index={index}
              />
            ))}
          </motion.div>

          <p className="business-click-note">
            SELECT A BUSINESS TO EXPLORE ITS PROFILE
          </p>
        </section>

        <section className="group-approach">
          <div className="approach-heading">
            <Reveal>
              <span className="section-kicker">03 / THE GROUP APPROACH</span>
              <h2>
                Different paths.
                <br />
                <em>Shared ambition.</em>
              </h2>
            </Reveal>
          </div>

          <div className="approach-content">
            <Reveal className="approach-description">
              <p>
                We believe growth can take many forms. From retail and
                wholesale operations to digital services and future sports
                initiatives, every direction represents an opportunity to
                build something meaningful.
              </p>
            </Reveal>

            <motion.div
              className="approach-points"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="approach-point" variants={reveal}>
                <div className="approach-icon">
                  <Building2 size={21} />
                </div>
                <div>
                  <span>01</span>
                  <h3>Independent identities</h3>
                  <p>Every venture develops its own identity and purpose.</p>
                </div>
              </motion.div>

              <motion.div className="approach-point" variants={reveal}>
                <div className="approach-icon">
                  <Layers3 size={21} />
                </div>
                <div>
                  <span>02</span>
                  <h3>Multiple industries</h3>
                  <p>Exploring opportunities across different sectors.</p>
                </div>
              </motion.div>

              <motion.div className="approach-point" variants={reveal}>
                <div className="approach-icon">
                  <Compass size={21} />
                </div>
                <div>
                  <span>03</span>
                  <h3>Long-term direction</h3>
                  <p>Building with a vision that continues to evolve.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="business-future">
          <div className="future-decoration">GG</div>

          <Reveal className="future-content">
            <span className="section-kicker">04 / WHAT COMES NEXT</span>
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
            <a href="/contact" className="future-link">
              CONNECT WITH US
              <ArrowUpRight size={18} />
            </a>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.businesses-page {
  --wine: #351820;
  --wine-deep: #241419;
  --wine-mid: #51232D;
  --wine-soft: #713844;
  --cream: #F4E8DA;
  --gold: #C7A47B;
  --gold-light: #E4C49C;
  --ink: #291B1E;
  --muted: #897775;
  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}
.businesses-page * { box-sizing: border-box; }
.businesses-page a { color: inherit; text-decoration: none; }

.business-hero {
  min-height: 760px;
  position: relative;
  background: var(--wine);
  color: var(--cream);
  padding: 125px 8% 35px;
  overflow: hidden;
}
.business-hero-grid {
  position: absolute;
  inset: 0;
  opacity: .12;
  background-image: linear-gradient(rgba(244,232,218,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(244,232,218,.13) 1px, transparent 1px);
  background-size: 85px 85px;
  mask-image: linear-gradient(to right, transparent, black);
}
.business-hero-inner {
  max-width: 1300px;
  margin: auto;
  min-height: 570px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  position: relative;
  z-index: 1;
}
.business-hero-copy { padding: 30px 0 65px; }
.business-eyebrow, .section-kicker {
  font-size: 10px;
  letter-spacing: 2.7px;
  font-weight: 700;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 12px;
}
.business-eyebrow span { width: 27px; height: 1px; background: var(--gold); }
.business-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(62px, 7.5vw, 108px);
  line-height: .99;
  letter-spacing: -4px;
  font-weight: 400;
  margin: 38px 0 27px;
}
.business-hero h1 em, .business-future h2 em { color: var(--gold-light); font-weight: 400; }
.business-hero-copy > p {
  max-width: 440px;
  font-size: 14px;
  line-height: 1.95;
  color: rgba(244,232,218,.68);
}
.business-explore, .future-link {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  padding-bottom: 11px;
  border-bottom: 1px solid var(--gold);
  color: var(--cream);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.7px;
  transition: gap .3s ease;
}
.business-explore:hover, .future-link:hover { gap: 30px; }

.business-hero-visual {
  height: 490px;
  width: 100%;
  max-width: 540px;
  justify-self: end;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-orbit { position: absolute; border: 1px solid rgba(199,164,123,.25); border-radius: 50%; }
.orbit-one { width: 240px; height: 240px; animation: orbitRotate 30s linear infinite; }
.orbit-two { width: 360px; height: 360px; border-style: dashed; border-color: rgba(199,164,123,.2); animation: orbitRotate 45s linear infinite reverse; }
.orbit-three { width: 465px; height: 465px; border-color: rgba(199,164,123,.12); }
.hero-visual-center {
  width: 155px;
  height: 155px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #51232D, #351820 70%);
  box-shadow: 0 0 70px rgba(199,164,123,.12);
  z-index: 2;
}
.hero-visual-center span { font-family: 'Playfair Display', serif; font-size: 52px; color: var(--gold-light); letter-spacing: -4px; }
.hero-visual-center small { font-size: 8px; letter-spacing: 2px; color: var(--cream); margin-top: 3px; }
.orbit-label {
  position: absolute;
  z-index: 3;
  font-size: 9px;
  letter-spacing: 1.5px;
  color: var(--gold-light);
  background: var(--wine);
  padding: 9px 13px;
  border: 1px solid rgba(199,164,123,.35);
}
.label-one { top: 17%; right: 17%; }
.label-two { bottom: 20%; right: 5%; }
.label-three { bottom: 17%; left: 7%; }
@keyframes orbitRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.business-hero-footer {
  max-width: 1300px;
  margin: 35px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(244,232,218,.18);
  display: flex;
  justify-content: space-between;
  color: rgba(244,232,218,.48);
  font-size: 9px;
  letter-spacing: 2px;
}

.portfolio-intro {
  max-width: 1300px;
  margin: auto;
  padding: 135px 8% 125px;
  display: grid;
  grid-template-columns: 1fr .8fr;
  gap: 100px;
  align-items: end;
}
.portfolio-intro .section-kicker, .business-list-heading .section-kicker, .approach-heading .section-kicker { color: var(--wine-soft); }
.portfolio-intro h2, .approach-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(43px, 5vw, 66px);
  line-height: 1.12;
  font-weight: 400;
  letter-spacing: -2px;
  margin: 28px 0 0;
}
.portfolio-intro h2 em, .approach-heading h2 em { color: var(--wine-soft); }
.portfolio-intro-right { padding-bottom: 8px; }
.portfolio-intro-right > p { font-size: 14px; line-height: 2; color: var(--muted); max-width: 460px; }
.intro-line { display: flex; align-items: center; gap: 13px; margin-top: 35px; font-size: 9px; font-weight: 700; letter-spacing: 1.6px; color: var(--wine); }
.intro-line span { width: 35px; height: 1px; background: var(--gold); }

.business-list-section { background: #EDE0D3; padding: 105px 8% 100px; }
.business-list-heading {
  max-width: 1300px;
  margin: auto auto 48px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}
.business-list-heading h2 { font-family: 'Playfair Display', serif; font-size: 55px; font-weight: 400; margin: 17px 0 0; letter-spacing: -2px; }
.business-count { font-size: 9px; letter-spacing: 1.8px; color: var(--muted); padding-bottom: 8px; }
.business-grid { max-width: 1300px; margin: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.business-card { min-height: 465px; position: relative; overflow: hidden; padding: 30px; background: var(--wine); color: var(--cream); }
.business-card-link { display: flex; flex-direction: column; justify-content: space-between; min-height: 405px; height: 100%; }
.business-card.business-featured { grid-column: span 2; min-height: 440px; background: var(--wine-deep); }
.business-card.business-featured .business-card-link { min-height: 380px; }
.business-card.digital { background: #51232D; }
.business-card.sports { background: #E4D2C2; color: var(--wine); }
.business-card-link:focus-visible { outline: 2px solid var(--gold-light); outline-offset: -5px; }
.business-card-top { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 2; }
.business-number { font-family: 'Playfair Display', serif; font-size: 23px; color: var(--gold-light); }
.business-status { display: inline-flex; align-items: center; gap: 8px; font-size: 8px; letter-spacing: 1.5px; color: rgba(244,232,218,.72); }
.business-status.upcoming { color: var(--wine-soft); }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: #A9B78A; box-shadow: 0 0 9px rgba(169,183,138,.5); }
.upcoming .status-dot { background: var(--gold); box-shadow: none; }
.business-symbol { position: absolute; top: 45px; right: 11%; width: 210px; height: 210px; display: flex; align-items: center; justify-content: center; opacity: .8; }
.business-symbol > span { font-family: 'Playfair Display', serif; font-size: 145px; line-height: 1; color: rgba(228,196,156,.2); z-index: 1; }
.symbol-ring { position: absolute; inset: 0; border: 1px solid rgba(228,196,156,.22); border-radius: 50%; transform: scale(.82); transition: transform .6s ease; }
.business-card:hover .symbol-ring { transform: scale(1); }
.business-symbol.digital > span { color: rgba(228,196,156,.25); }
.business-symbol.sports > span { color: rgba(81,35,45,.16); }
.business-symbol.sports .symbol-ring { border-color: rgba(81,35,45,.22); }
.business-card-bottom { position: relative; z-index: 2; display: flex; align-items: end; justify-content: space-between; gap: 25px; }
.business-category { font-size: 9px; letter-spacing: 2px; color: var(--gold-light); }
.sports .business-category { color: var(--wine-soft); }
.business-card h3 { font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 48px); font-weight: 400; letter-spacing: -1.5px; margin: 12px 0; }
.business-card p { max-width: 440px; font-size: 12px; line-height: 1.9; color: rgba(244,232,218,.72); margin: 0; }
.sports p { color: rgba(41,27,30,.72); }
.business-card-action { display: flex; align-items: center; gap: 14px; flex-shrink: 0; font-size: 8px; letter-spacing: 1.5px; color: var(--gold-light); }
.sports .business-card-action { color: var(--wine); }
.business-arrow { width: 38px; height: 38px; border: 1px solid rgba(228,196,156,.55); border-radius: 50%; display: flex; justify-content: center; align-items: center; transition: background .3s ease, color .3s ease, transform .3s ease; }
.business-card:hover .business-arrow { background: var(--gold); color: var(--wine); transform: rotate(45deg); }
.sports .business-arrow { border-color: rgba(81,35,45,.4); }
.business-click-note { max-width: 1300px; margin: 28px auto 0; text-align: right; color: var(--wine-soft); font-size: 9px; letter-spacing: 1.8px; }

.group-approach { padding: 130px 8%; max-width: 1500px; margin: auto; }
.approach-heading { margin-bottom: 75px; }
.approach-content { display: grid; grid-template-columns: .9fr 1.1fr; gap: 100px; }
.approach-description p { font-family: 'Playfair Display', serif; font-size: 25px; line-height: 1.65; color: var(--wine-soft); max-width: 420px; margin: 0; }
.approach-points { border-top: 1px solid rgba(81,35,45,.2); }
.approach-point { display: flex; gap: 23px; padding: 26px 0; border-bottom: 1px solid rgba(81,35,45,.2); }
.approach-icon { width: 45px; height: 45px; border: 1px solid rgba(199,164,123,.65); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--wine-soft); flex-shrink: 0; }
.approach-point > div:last-child > span { font-size: 9px; letter-spacing: 1.5px; color: var(--gold); }
.approach-point h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 400; margin: 6px 0; color: var(--wine); }
.approach-point p { font-size: 12px; color: var(--muted); line-height: 1.7; margin: 0; }

.business-future { min-height: 570px; background: var(--wine-deep); color: var(--cream); padding: 100px 8% 30px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
.future-decoration { position: absolute; right: 5%; top: 0; font-family: 'Playfair Display', serif; font-size: clamp(260px, 40vw, 540px); line-height: 1; color: rgba(244,232,218,.025); pointer-events: none; }
.future-content { max-width: 1300px; width: 100%; margin: auto; position: relative; z-index: 1; }
.future-content h2 { font-family: 'Playfair Display', serif; font-size: clamp(55px, 7vw, 90px); line-height: 1.05; font-weight: 400; letter-spacing: -3px; margin: 30px 0 20px; }
.future-content p { max-width: 480px; color: rgba(244,232,218,.72); font-size: 13px; line-height: 2; }
.future-link { color: var(--gold-light); margin-top: 22px; }
.future-bottom { position: relative; z-index: 1; max-width: 1300px; width: 100%; margin: 75px auto 0; padding-top: 20px; border-top: 1px solid rgba(244,232,218,.18); display: flex; justify-content: space-between; color: rgba(244,232,218,.55); font-size: 9px; letter-spacing: 1.7px; }

@media (max-width: 900px) {
  .business-hero { padding: 110px 6% 30px; }
  .business-hero-inner { grid-template-columns: 1fr; }
  .business-hero-copy { padding-bottom: 0; }
  .business-hero-visual { height: 400px; justify-self: center; }
  .portfolio-intro { padding: 100px 7%; gap: 45px; }
  .business-list-section { padding: 90px 6%; }
  .business-card { padding: 24px; }
  .business-symbol { right: 3%; transform: scale(.8); }
  .approach-content { gap: 45px; }
}
@media (max-width: 650px) {
  .business-hero { padding: 105px 7% 25px; min-height: auto; }
  .business-hero h1 { font-size: 65px; letter-spacing: -3px; }
  .business-hero-copy > p { font-size: 13px; }
  .business-hero-visual { height: 330px; transform: scale(.85); transform-origin: center; margin: -10px 0; }
  .orbit-one { width: 190px; height: 190px; }
  .orbit-two { width: 285px; height: 285px; }
  .orbit-three { width: 350px; height: 350px; }
  .hero-visual-center { width: 125px; height: 125px; }
  .hero-visual-center span { font-size: 42px; }
  .business-hero-footer { gap: 15px; flex-wrap: wrap; font-size: 8px; line-height: 1.8; }
  .portfolio-intro { padding: 85px 7%; grid-template-columns: 1fr; gap: 25px; }
  .portfolio-intro h2, .approach-heading h2 { font-size: 47px; }
  .business-list-section { padding: 80px 6%; }
  .business-list-heading { align-items: start; flex-direction: column; gap: 15px; }
  .business-list-heading h2 { font-size: 45px; }
  .business-grid { grid-template-columns: 1fr; gap: 15px; }
  .business-card, .business-card.business-featured { grid-column: auto; min-height: 410px; padding: 24px; }
  .business-card-link, .business-card.business-featured .business-card-link { min-height: 360px; }
  .business-symbol { width: 165px; height: 165px; top: 55px; right: 0; }
  .business-symbol > span { font-size: 110px; }
  .business-card-bottom { align-items: start; flex-direction: column; gap: 20px; }
  .business-card h3 { font-size: 37px; }
  .business-card p { max-width: 100%; }
  .group-approach { padding: 90px 7%; }
  .approach-heading { margin-bottom: 45px; }
  .approach-content { grid-template-columns: 1fr; gap: 45px; }
  .approach-description p { font-size: 22px; }
  .business-future { min-height: 530px; padding: 85px 7% 25px; }
  .future-content h2 { font-size: 59px; }
  .future-bottom { gap: 15px; flex-direction: column; font-size: 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .businesses-page *, .businesses-page *::before, .businesses-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
`;