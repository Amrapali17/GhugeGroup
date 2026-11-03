
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Crown,
  Network,
  Compass,
  Building2,
  MoveUpRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
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

const leaders = [
  {
    id: "01",
    name: "Somnath Ghuge",
    role: "THE FOUNDATION",
    title: "Father · Family Foundation",
    description:
      "The foundation of the Ghuge family story. His place at the roots of the family represents the values, support and foundation from which the next generation moves forward.",
    initials: "SG",
    style: "father",
  },
  {
    id: "02",
    name: "Harshal Ghuge",
    role: "THE NEXT GENERATION",
    title: "Elder Son · Entrepreneur",
    description:
      "An entrepreneur representing the next generation of the Ghuge family, contributing to its continuing journey of ambition, enterprise and growth.",
    initials: "HG",
    style: "harshal",
  },
  {
    id: "03",
    name: "Vedant Ghuge",
    role: "THE VISION",
    title: "Youngest Son · Founder & Entrepreneur",
    description:
      "The founder of GHUGE GROUP, driven by the ambition to build a recognised group with multiple businesses, explore new industries and create something that grows beyond one venture.",
    initials: "VG",
    style: "vedant",
  },
];

function LeaderCard({ leader, index }) {
  return (
    <motion.article
      className={`leader-card ${leader.style}`}
      variants={reveal}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="leader-card-top">
        <span>{leader.id} / GHUGE FAMILY</span>
        <span className="leader-card-line" />
      </div>

      <div className="leader-portrait">
        <div className="portrait-orbit portrait-orbit-one" />
        <div className="portrait-orbit portrait-orbit-two" />
        <div className="portrait-initials">{leader.initials}</div>
        <span className="portrait-caption">GHUGE GROUP</span>
      </div>

      <div className="leader-info">
        <span className="leader-role">{leader.role}</span>
        <h3>{leader.name}</h3>
        <span className="leader-title">{leader.title}</span>
        <p>{leader.description}</p>
      </div>
    </motion.article>
  );
}

export default function Leadership() {
  return (
    <>
      <style>{styles}</style>

      <main className="leadership-page">

        {/* HERO */}
        <section className="leadership-hero">
          <div className="leadership-hero-pattern" />

          <div className="leadership-hero-inner">
            <motion.div
              className="leadership-hero-copy"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className="leadership-eyebrow" variants={reveal}>
                <span />
                THE PEOPLE BEHIND THE VISION
              </motion.div>

              <motion.h1 variants={reveal}>
                Rooted in family.
                <br />
                <em>Driven by vision.</em>
              </motion.h1>

              <motion.p variants={reveal}>
                Every great journey has a foundation. GHUGE GROUP represents
                a family story of ambition, entrepreneurship and the vision
                to build something meaningful for generations to come.
              </motion.p>

              <motion.a
                href="#leadership-story"
                className="leadership-scroll"
                variants={reveal}
              >
                DISCOVER OUR STORY
                <ArrowDown size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              className="leadership-hero-art"
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease, delay: 0.2 }}
            >
              <div className="hero-art-ring ring-a" />
              <div className="hero-art-ring ring-b" />
              <div className="hero-art-ring ring-c" />

              <div className="hero-art-center">
                <span>GG</span>
                <small>GHUGE GROUP</small>
              </div>

              <span className="hero-art-label art-label-top">
                FAMILY
              </span>
              <span className="hero-art-label art-label-bottom">
                LEGACY
              </span>
            </motion.div>
          </div>

          <div className="leadership-hero-bottom">
            <span>FAMILY</span>
            <span>ENTREPRENEURSHIP</span>
            <span>LONG-TERM VISION</span>
          </div>
        </section>

        {/* FAMILY STORY */}
        <section className="leadership-intro" id="leadership-story">
          <Reveal>
            <span className="leadership-kicker">01 / OUR STORY</span>
            <h2>
              A foundation that
              <br />
              inspires <em>the future.</em>
            </h2>
          </Reveal>

          <Reveal className="leadership-intro-text">
            <p>
              GHUGE GROUP is built around a vision that goes beyond a single
              business. At its heart is a family, a shared journey and the
              ambition to create opportunities across industries.
            </p>
            <p>
              With the foundation of one generation and the entrepreneurial
              drive of the next, the journey is about building something
              lasting — a group that can continue to grow and evolve.
            </p>
          </Reveal>
        </section>

        {/* FAMILY TREE */}
        <section className="family-tree-section">
          <div className="family-tree-heading">
            <Reveal>
              <span className="leadership-kicker">02 / THE GHUGE FAMILY</span>
              <h2>
                One family.
                <br />
                <em>One growing vision.</em>
              </h2>
              <p>
                A family foundation connected to the next generation of
                entrepreneurship.
              </p>
            </Reveal>
          </div>

          <div className="family-tree">
            <div className="tree-root">
              <motion.div
                className="tree-node father-node"
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
              >
                <span className="tree-node-label">THE FOUNDATION</span>
                <div className="tree-node-initial">SG</div>
                <h3>Somnath Ghuge</h3>
                <p>Father · Family Foundation</p>
              </motion.div>
            </div>

            <div className="tree-connector">
              <motion.div
                className="tree-vertical-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.25 }}
              />
              <motion.div
                className="tree-horizontal-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: 0.65 }}
              />
            </div>

            <motion.div
              className="tree-children"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="tree-child" variants={reveal}>
                <div className="child-connector" />
                <div className="tree-node child-node">
                  <span className="tree-node-label">ELDER SON</span>
                  <div className="tree-node-initial">HG</div>
                  <h3>Harshal Ghuge</h3>
                  <p>Entrepreneur</p>
                  <span className="tree-node-note">
                    THE NEXT GENERATION
                  </span>
                </div>
              </motion.div>

              <motion.div className="tree-child" variants={reveal}>
                <div className="child-connector" />
                <div className="tree-node child-node vedant-node">
                  <span className="tree-node-label">YOUNGEST SON</span>
                  <div className="tree-node-initial">VG</div>
                  <h3>Vedant Ghuge</h3>
                  <p>Founder & Entrepreneur</p>
                  <span className="tree-node-note">
                    FOUNDER · GHUGE GROUP
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="tree-caption">
            <span />
            A FAMILY FOUNDATION. A NEW GENERATION OF ENTREPRENEURS.
          </div>
        </section>

        {/* LEADERSHIP PROFILES */}
        <section className="leadership-profiles">
          <div className="profiles-heading">
            <Reveal>
              <span className="leadership-kicker">03 / THE PEOPLE</span>
              <h2>
                The people behind
                <br />
                <em>the journey.</em>
              </h2>
            </Reveal>
          </div>

          <motion.div
            className="leaders-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {leaders.map((leader, index) => (
              <LeaderCard
                key={leader.id}
                leader={leader}
                index={index}
              />
            ))}
          </motion.div>
        </section>

        {/* VEDANT VISION */}
        <section className="vision-section">
          <div className="vision-watermark">VG</div>

          <div className="vision-inner">
            <Reveal className="vision-heading">
              <span className="leadership-kicker">
                04 / THE VISION BEHIND GHUGE GROUP
              </span>

              <h2>
                Think beyond
                <br />
                one business.
                <br />
                <em>Build a legacy.</em>
              </h2>
            </Reveal>

            <Reveal className="vision-copy">
              <div className="vision-quote-mark">“</div>
              <p>
                The vision is to build GHUGE GROUP into a recognised name —
                a group that stands for ambition, entrepreneurship and
                continuous growth.
              </p>
              <p>
                Not limited to one industry or one idea, but built to bring
                multiple businesses, new opportunities and future ventures
                together under one identity.
              </p>

              <div className="vision-signature">
                <span />
                <div>
                  <strong>Vedant Ghuge</strong>
                  <small>FOUNDER & ENTREPRENEUR · GHUGE GROUP</small>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="leadership-principles">
          <Reveal className="principles-heading">
            <span className="leadership-kicker">05 / WHAT DRIVES US</span>
            <h2>
              Built on ambition.
              <br />
              <em>Guided by purpose.</em>
            </h2>
          </Reveal>

          <motion.div
            className="principles-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="principle" variants={reveal}>
              <span>01</span>
              <Crown size={25} />
              <h3>Think bigger</h3>
              <p>
                Look beyond immediate possibilities and imagine what can be
                built over time.
              </p>
            </motion.div>

            <motion.div className="principle" variants={reveal}>
              <span>02</span>
              <Building2 size={25} />
              <h3>Build with purpose</h3>
              <p>
                Create businesses with identity, direction and a meaningful
                place in their industries.
              </p>
            </motion.div>

            <motion.div className="principle" variants={reveal}>
              <span>03</span>
              <Network size={25} />
              <h3>Grow together</h3>
              <p>
                Bring people, ideas and opportunities together to create
                lasting growth.
              </p>
            </motion.div>

            <motion.div className="principle" variants={reveal}>
              <span>04</span>
              <Compass size={25} />
              <h3>Look ahead</h3>
              <p>
                Keep exploring new directions and building for the future.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* CLOSING */}
        <section className="leadership-closing">
          <div className="closing-decoration">GH</div>

          <Reveal className="closing-content">
            <span className="leadership-kicker">
              THE JOURNEY CONTINUES
            </span>

            <h2>
              A name to build.
              <br />
              <em>A future to create.</em>
            </h2>

            <p>
              The ambition is bigger than today. The vision is to keep
              building, keep growing and create a group that means something
              for generations to come.
            </p>

            <a href="/businesses" className="closing-link">
              EXPLORE OUR BUSINESSES
              <ArrowUpRight size={18} />
            </a>
          </Reveal>

          <div className="closing-footer">
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

.leadership-page {
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

  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

.leadership-page * {
  box-sizing: border-box;
}

.leadership-page a {
  text-decoration: none;
  color: inherit;
}

.leadership-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2.5px;
  color: var(--wine-soft);
}

/* HERO */

.leadership-hero {
  min-height: 740px;
  background: var(--wine);
  color: var(--cream);
  padding: 125px 8% 30px;
  position: relative;
  overflow: hidden;
}

.leadership-hero-pattern {
  position: absolute;
  inset: 0;
  opacity: .12;
  background-image:
    linear-gradient(rgba(244,232,218,.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244,232,218,.15) 1px, transparent 1px);
  background-size: 85px 85px;
  mask-image: linear-gradient(to right, transparent, black);
}

.leadership-hero-inner {
  max-width: 1300px;
  min-height: 545px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  position: relative;
  z-index: 1;
}

.leadership-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--gold);
  font-size: 9px;
  letter-spacing: 2.5px;
  font-weight: 700;
}

.leadership-eyebrow span {
  width: 27px;
  height: 1px;
  background: var(--gold);
}

.leadership-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(57px, 6.5vw, 91px);
  line-height: 1.06;
  letter-spacing: -3.5px;
  font-weight: 400;
  margin: 35px 0 25px;
}

.leadership-hero h1 em {
  color: var(--gold-light);
  font-weight: 400;
}

.leadership-hero-copy > p {
  max-width: 480px;
  font-size: 13px;
  line-height: 2;
  color: rgba(244,232,218,.68);
}

.leadership-scroll {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  margin-top: 30px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--gold);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.7px;
  transition: gap .3s ease;
}

.leadership-scroll:hover {
  gap: 28px;
}

.leadership-hero-art {
  height: 440px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-art-ring {
  position: absolute;
  border: 1px solid rgba(199,164,123,.25);
  border-radius: 50%;
}

.ring-a {
  width: 210px;
  height: 210px;
  border-style: dashed;
  animation: leadershipRotate 35s linear infinite;
}

.ring-b {
  width: 325px;
  height: 325px;
  animation: leadershipRotate 50s linear infinite reverse;
}

.ring-c {
  width: 425px;
  height: 425px;
  border-color: rgba(199,164,123,.12);
}

.hero-art-center {
  width: 155px;
  height: 155px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  background: radial-gradient(circle, #51232D, #351820 75%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 80px rgba(199,164,123,.12);
  z-index: 1;
}

.hero-art-center span {
  font-family: 'Playfair Display', serif;
  color: var(--gold-light);
  font-size: 54px;
  letter-spacing: -5px;
}

.hero-art-center small {
  font-size: 8px;
  letter-spacing: 2px;
}

.hero-art-label {
  position: absolute;
  background: var(--wine);
  border: 1px solid rgba(199,164,123,.4);
  color: var(--gold-light);
  padding: 9px 14px;
  font-size: 8px;
  letter-spacing: 2px;
}

.art-label-top {
  top: 16%;
  right: 13%;
}

.art-label-bottom {
  bottom: 15%;
  left: 12%;
}

@keyframes leadershipRotate {
  to { transform: rotate(360deg); }
}

.leadership-hero-bottom {
  max-width: 1300px;
  margin: 30px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(244,232,218,.18);
  display: flex;
  justify-content: space-between;
  color: rgba(244,232,218,.5);
  font-size: 8px;
  letter-spacing: 2px;
}

/* INTRO */

.leadership-intro {
  max-width: 1300px;
  margin: auto;
  padding: 130px 8%;
  display: grid;
  grid-template-columns: 1fr .8fr;
  gap: 100px;
  align-items: end;
}

.leadership-intro h2,
.family-tree-heading h2,
.profiles-heading h2,
.vision-heading h2,
.principles-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(43px, 5vw, 65px);
  line-height: 1.13;
  font-weight: 400;
  letter-spacing: -2px;
  margin: 25px 0 0;
}

.leadership-intro h2 em,
.family-tree-heading h2 em,
.profiles-heading h2 em,
.vision-heading h2 em,
.principles-heading h2 em {
  color: var(--wine-soft);
  font-weight: 400;
}

.leadership-intro-text p {
  font-size: 13px;
  line-height: 2;
  color: var(--muted);
  margin: 0 0 17px;
}

/* FAMILY TREE */

.family-tree-section {
  background: #EDE0D3;
  padding: 110px 8% 95px;
  text-align: center;
}

.family-tree-heading {
  max-width: 700px;
  margin: 0 auto;
}

.family-tree-heading .leadership-kicker {
  justify-content: center;
}

.family-tree-heading p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
  margin-top: 20px;
}

.family-tree {
  max-width: 900px;
  margin: 65px auto 0;
}

.tree-root {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.tree-node {
  width: 290px;
  min-height: 255px;
  background: var(--wine);
  color: var(--cream);
  padding: 23px 20px;
  position: relative;
  border: 1px solid rgba(199,164,123,.55);
  box-shadow: 0 15px 45px rgba(53,24,32,.09);
}

.tree-node-label {
  display: block;
  color: var(--gold-light);
  font-size: 8px;
  letter-spacing: 2px;
}

.tree-node-initial {
  width: 75px;
  height: 75px;
  margin: 18px auto 12px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-light);
  font-family: 'Playfair Display', serif;
  font-size: 30px;
}

.tree-node h3 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 400;
  margin: 8px 0;
}

.tree-node p {
  color: rgba(244,232,218,.65);
  font-size: 10px;
  margin: 0;
}

.tree-connector {
  height: 90px;
  width: 50%;
  margin: auto;
  position: relative;
}

.tree-vertical-line {
  width: 1px;
  height: 45px;
  position: absolute;
  top: 0;
  left: 50%;
  background: var(--gold);
  transform-origin: top;
}

.tree-horizontal-line {
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--gold);
  transform-origin: left;
}

.tree-children {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  position: relative;
}

.tree-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.child-connector {
  height: 45px;
  width: 1px;
  background: var(--gold);
  margin-top: -45px;
  margin-bottom: 0;
}

.child-node {
  width: 100%;
  max-width: 330px;
  min-height: 280px;
  padding: 25px 18px;
}

.vedant-node {
  background: var(--wine-deep);
  border-color: var(--gold);
  box-shadow: 0 18px 50px rgba(53,24,32,.16);
}

.tree-node-note {
  display: inline-block;
  color: var(--gold-light);
  font-size: 8px;
  letter-spacing: 1.4px;
  margin-top: 17px;
}

.tree-caption {
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.8px;
}

.tree-caption span {
  width: 25px;
  height: 1px;
  background: var(--gold);
}

/* PROFILES */

.leadership-profiles {
  padding: 125px 8%;
  max-width: 1500px;
  margin: auto;
}

.profiles-heading {
  margin-bottom: 55px;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.leader-card {
  background: #EDE0D3;
  padding: 20px;
  overflow: hidden;
  transition: box-shadow .4s ease;
}

.leader-card:hover {
  box-shadow: 0 20px 45px rgba(53,24,32,.1);
}

.leader-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.4px;
}

.leader-card-line {
  width: 32px;
  height: 1px;
  background: var(--gold);
}

.leader-portrait {
  height: 265px;
  margin: 20px 0;
  background: var(--wine);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.leader-card.harshall .leader-portrait {
  background: var(--wine-mid);
}

.leader-card.vedant .leader-portrait {
  background: var(--wine-deep);
}

.portrait-orbit {
  position: absolute;
  width: 190px;
  height: 190px;
  border: 1px solid rgba(199,164,123,.25);
  border-radius: 50%;
}

.portrait-orbit-one {
  transform: scale(1);
  transition: transform .7s ease;
}

.portrait-orbit-two {
  width: 240px;
  height: 240px;
  border-style: dashed;
  opacity: .6;
  transition: transform .7s ease;
}

.leader-card:hover .portrait-orbit-one {
  transform: scale(1.18);
}

.leader-card:hover .portrait-orbit-two {
  transform: rotate(35deg) scale(1.05);
}

.portrait-initials {
  font-family: 'Playfair Display', serif;
  font-size: 86px;
  color: var(--gold-light);
  letter-spacing: -5px;
  z-index: 1;
}

.portrait-caption {
  position: absolute;
  bottom: 15px;
  left: 17px;
  color: rgba(244,232,218,.55);
  font-size: 8px;
  letter-spacing: 2px;
}

.leader-role {
  font-size: 8px;
  color: var(--wine-soft);
  letter-spacing: 1.8px;
  font-weight: 700;
}

.leader-info h3 {
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  font-weight: 400;
  margin: 10px 0 5px;
}

.leader-title {
  font-size: 10px;
  color: var(--gold);
}

.leader-info p {
  font-size: 11px;
  line-height: 1.9;
  color: var(--muted);
  margin: 17px 0 5px;
}

/* VISION */

.vision-section {
  background: var(--wine);
  color: var(--cream);
  padding: 125px 8%;
  position: relative;
  overflow: hidden;
}

.vision-watermark {
  position: absolute;
  right: 4%;
  top: -5%;
  font-family: 'Playfair Display', serif;
  font-size: clamp(260px, 40vw, 540px);
  line-height: 1;
  color: rgba(244,232,218,.025);
  pointer-events: none;
}

.vision-inner {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 100px;
  position: relative;
  z-index: 1;
}

.vision-heading .leadership-kicker {
  color: var(--gold);
}

.vision-heading h2 {
  font-size: clamp(55px, 6.5vw, 86px);
  margin-top: 35px;
  line-height: 1.08;
}

.vision-heading h2 em {
  color: var(--gold-light);
}

.vision-copy {
  align-self: end;
  padding-bottom: 10px;
}

.vision-quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 100px;
  line-height: .8;
  color: var(--gold);
}

.vision-copy > p {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  line-height: 1.75;
  color: rgba(244,232,218,.83);
}

.vision-signature {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 40px;
}

.vision-signature > span {
  width: 40px;
  height: 1px;
  background: var(--gold);
}

.vision-signature strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-weight: 400;
}

.vision-signature small {
  display: block;
  margin-top: 5px;
  font-size: 8px;
  letter-spacing: 1.5px;
  color: var(--gold-light);
}

/* PRINCIPLES */

.leadership-principles {
  padding: 125px 8%;
  max-width: 1500px;
  margin: auto;
}

.principles-heading {
  margin-bottom: 65px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(81,35,45,.2);
  border-bottom: 1px solid rgba(81,35,45,.2);
}

.principle {
  padding: 30px 22px;
  border-right: 1px solid rgba(81,35,45,.16);
  position: relative;
}

.principle:first-child {
  padding-left: 0;
}

.principle:last-child {
  border-right: 0;
}

.principle > span {
  display: block;
  font-size: 9px;
  color: var(--gold);
  letter-spacing: 1.5px;
  margin-bottom: 30px;
}

.principle > svg {
  color: var(--wine-soft);
  stroke-width: 1.3;
}

.principle h3 {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 400;
  margin: 18px 0 10px;
}

.principle p {
  font-size: 11px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
}

/* CLOSING */

.leadership-closing {
  background: var(--wine-deep);
  color: var(--cream);
  padding: 105px 8% 30px;
  min-height: 560px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.closing-decoration {
  position: absolute;
  right: 5%;
  top: -40px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(250px, 42vw, 560px);
  color: rgba(244,232,218,.025);
  line-height: 1;
  pointer-events: none;
}

.closing-content {
  max-width: 1300px;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 1;
}

.closing-content .leadership-kicker {
  color: var(--gold);
}

.closing-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(55px, 7vw, 88px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -3px;
  margin: 30px 0 20px;
}

.closing-content h2 em {
  color: var(--gold-light);
}

.closing-content p {
  max-width: 480px;
  color: rgba(244,232,218,.65);
  font-size: 12px;
  line-height: 2;
}

.closing-link {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  border-bottom: 1px solid var(--gold);
  padding: 13px 0;
  margin-top: 20px;
  color: var(--gold-light) !important;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.8px;
  transition: gap .3s ease;
}

.closing-link:hover {
  gap: 28px;
}

.closing-footer {
  max-width: 1300px;
  width: 100%;
  margin: 75px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(244,232,218,.17);
  display: flex;
  justify-content: space-between;
  color: rgba(244,232,218,.45);
  font-size: 8px;
  letter-spacing: 1.8px;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .leadership-hero-inner {
    grid-template-columns: 1fr;
  }

  .leadership-hero-art {
    height: 370px;
  }

  .leadership-intro,
  .vision-inner {
    gap: 50px;
  }

  .leaders-grid {
    grid-template-columns: 1fr 1fr;
  }

  .leader-card:last-child {
    grid-column: span 2;
  }

  .principles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .principle:nth-child(2) {
    border-right: 0;
  }

  .principle:nth-child(1),
  .principle:nth-child(2) {
    border-bottom: 1px solid rgba(81,35,45,.16);
  }
}

@media (max-width: 650px) {
  .leadership-hero {
    padding: 105px 7% 25px;
  }

  .leadership-hero h1 {
    font-size: 56px;
    letter-spacing: -2.5px;
  }

  .leadership-hero-art {
    height: 320px;
  }

  .ring-a {
    width: 165px;
    height: 165px;
  }

  .ring-b {
    width: 245px;
    height: 245px;
  }

  .ring-c {
    width: 320px;
    height: 320px;
  }

  .hero-art-center {
    width: 125px;
    height: 125px;
  }

  .hero-art-center span {
    font-size: 44px;
  }

  .leadership-hero-bottom {
    flex-wrap: wrap;
    gap: 12px;
    font-size: 7px;
  }

  .leadership-intro {
    padding: 85px 7%;
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .leadership-intro h2,
  .family-tree-heading h2,
  .profiles-heading h2,
  .principles-heading h2 {
    font-size: 46px;
  }

  .family-tree-section {
    padding: 85px 6%;
  }

  .tree-node {
    width: 250px;
  }

  .tree-children {
    gap: 15px;
  }

  .child-node {
    width: 100%;
    padding: 20px 9px;
  }

  .child-node h3 {
    font-size: 18px;
  }

  .child-node p {
    font-size: 9px;
  }

  .tree-node-note {
    font-size: 6px;
    letter-spacing: 1px;
  }

  .tree-connector {
    width: 65%;
  }

  .tree-caption {
    font-size: 7px;
    line-height: 1.8;
  }

  .leadership-profiles {
    padding: 85px 7%;
  }

  .leaders-grid {
    grid-template-columns: 1fr;
  }

  .leader-card:last-child {
    grid-column: auto;
  }

  .leader-portrait {
    height: 280px;
  }

  .vision-section {
    padding: 90px 7%;
  }

  .vision-inner {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .vision-heading h2 {
    font-size: 57px;
  }

  .vision-copy > p {
    font-size: 18px;
  }

  .leadership-principles {
    padding: 90px 7%;
  }

  .principles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .principle {
    padding: 25px 12px;
  }

  .principle:first-child {
    padding-left: 0;
  }

  .principle h3 {
    font-size: 18px;
  }

  .principle p {
    font-size: 10px;
  }

  .leadership-closing {
    padding: 85px 7% 25px;
    min-height: 520px;
  }

  .closing-content h2 {
    font-size: 56px;
  }

  .closing-footer {
    flex-direction: column;
    gap: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .leadership-page *,
  .leadership-page *::before,
  .leadership-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;
