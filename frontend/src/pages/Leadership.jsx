
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Flag,
  Heart,
  Sparkles,
  Trophy,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -30px 0px",
      }}
      transition={{
        duration: 0.95,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

const leaders = [
  {
    id: "01",
    name: "Harshal Ghuge",
    role: "THE ELDER SON",
    title: "Roll Ball Athlete · Entrepreneur",
    image: "/images/harshal_rollball.jpeg",
    description: (
      <>
        Harshal's journey began on the Roll Ball court, where
        discipline, determination and teamwork became part of his
        everyday life.{" "}
        <strong>Representing India at the international level</strong>{" "}
        shaped his perspective and strengthened his ability to face
        challenges.
        <br />
        <br />
        Today, he carries the same commitment into his entrepreneurial
        journey, believing that{" "}
        <strong>
          consistency, perseverance and the courage to take on challenges
        </strong>{" "}
        are essential to building something meaningful.
      </>
    ),
    qualities: ["Discipline", "Determination", "Perseverance"],
  },
  {
    id: "02",
    name: "Vedant Ghuge",
    role: "THE YOUNGEST SON",
    title: "Founder · GHUGE GROUP",
    image: "/images/ved-founder.jpeg",
    description: (
      <>
        Vedant's journey brings together sport, ambition and
        entrepreneurship. His experience in Roll Ball and{" "}
        <strong>representing India at the international level</strong>{" "}
        helped shape his mindset and approach towards challenges.
        <br />
        <br />
        As the Founder of GHUGE GROUP, he aims to{" "}
        <strong>
          bring businesses, ideas and opportunities together under one
          identity
        </strong>
        , building ventures with purpose and a long-term vision.
      </>
    ),
    qualities: ["Vision", "Initiative", "Growth"],
  },
];

function FamilyNode({
  name,
  role,
  initials,
  image,
  className = "",
}) {
  return (
    <motion.div
      className={`family-node ${className}`}
      variants={reveal}
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="family-node-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <span className="family-node-role">{role}</span>
      <h3>{name}</h3>
      <span className="family-node-bottom">GHUGE FAMILY</span>
    </motion.div>
  );
}

function LeaderCard({ leader }) {
  return (
    <motion.article
      className="leader-card"
      variants={reveal}
      whileHover={{ y: -9 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="leader-card-top">
        <span>{leader.id} / GHUGE GROUP</span>
        <ArrowUpRight size={18} />
      </div>

      <div className="leader-photo-wrap">
        <img
          src={leader.image}
          alt={leader.name}
          className="leader-photo"
        />

        <div className="leader-photo-overlay" />

        <span className="leader-photo-caption">
          THE NEXT GENERATION
        </span>
      </div>

      <div className="leader-info">
        <span className="leader-role">{leader.role}</span>
        <h3>{leader.name}</h3>
        <span className="leader-title">{leader.title}</span>

        <p>{leader.description}</p>

        <div className="leader-qualities">
          {leader.qualities.map((quality) => (
            <span key={quality}>{quality}</span>
          ))}
        </div>
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
          <div className="hero-grain" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="leadership-hero-inner">
            <motion.div
              className="leadership-hero-copy"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div
                className="leadership-eyebrow"
                variants={reveal}
              >
                <span />
                THE PEOPLE BEHIND THE VISION
              </motion.div>

              <motion.h1 variants={reveal}>
                Rooted in
                <br />
                <em>family.</em>
                <br />
                Driven by
                <br />
                ambition.
              </motion.h1>

              <motion.p variants={reveal}>
                Behind GHUGE GROUP is a family journey shaped by
                encouragement, sporting experiences and the ambition
                to build something meaningful for the future.
              </motion.p>

              <motion.a
                href="#family-story"
                className="leadership-scroll"
                variants={reveal}
              >
                DISCOVER OUR STORY
                <ArrowDown size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-image-stage"
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 35,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                ease,
                delay: 0.25,
              }}
            >
              <div className="hero-image-frame">
                <img
                  src="/images/ved_dad_harshal.jpeg"
                  alt="The Ghuge family"
                />

                <div className="hero-image-shade" />

                <div className="hero-image-label">
                  <span>THE GHUGE FAMILY</span>
                  <strong>Where every journey begins.</strong>
                </div>
              </div>

              <motion.div
                className="hero-floating-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={17} />
                <span>FAMILY · SPORT · ENTERPRISE</span>
              </motion.div>

              <div className="hero-image-outline" />
            </motion.div>
          </div>

          <div className="hero-bottom">
            <span>FAMILY</span>
            <span>SPORTING LEGACY</span>
            <span>LEADERSHIP</span>
            <span>THE FUTURE</span>
          </div>
        </section>

        {/* FAMILY STORY */}
        <section className="family-story" id="family-story">
          <Reveal className="story-heading">
            <span className="section-kicker">
              01 / OUR FOUNDATION
            </span>

            <h2>
              More than a business.
              <br />
              <em>A family story.</em>
            </h2>
          </Reveal>

          <Reveal className="story-copy" delay={0.15}>
            <p>
              Every growing vision has a foundation. For GHUGE GROUP,
              that foundation is family.
            </p>

            <p>
              Somnath and Bhagyashree Ghuge have been a constant source
              of encouragement and motivation for their sons. From
              childhood sporting dreams to entrepreneurial ambitions,
              their support has helped shape the journey.
            </p>

            <div className="story-signature">
              <Heart size={17} />
              <span>ROOTED IN FAMILY. BUILT FOR THE FUTURE.</span>
            </div>
          </Reveal>
        </section>

        {/* FAMILY TREE */}
        <section className="family-tree-section">
          <div className="family-tree-heading">
            <Reveal>
              <span className="section-kicker">
                02 / THE GHUGE FAMILY
              </span>

              <h2>
                One family.
                <br />
                <em>One growing vision.</em>
              </h2>

              <p>
                The people, relationships and values behind the group.
              </p>
            </Reveal>
          </div>

          <motion.div
            className="family-tree"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.05,
            }}
          >
            <div className="parents-row">
              <FamilyNode
                name="Somnath Ghuge"
                role="FATHER · THE FOUNDATION"
                initials="SG"
                image="/images/ved_dad.jpeg"
                className="parent-node"
              />

              <FamilyNode
                name="Bhagyashree Ghuge"
                role="MOTHER · THE STRENGTH"
                initials="BG"
                className="parent-node mother-node"
              />
            </div>

            <div className="tree-connector">
              <span className="tree-vertical-line" />
              <span className="tree-horizontal-line" />
            </div>

            <div className="tree-children">
              <div className="tree-child">
                <span className="child-connector" />

                <FamilyNode
                  name="Harshal Ghuge"
                  role="ELDER SON · ENTREPRENEUR"
                  initials="HG"
                  image="/images/harshal_rollball.jpeg"
                  className="child-node"
                />
              </div>

              <div className="tree-child">
                <span className="child-connector" />

                <FamilyNode
                  name="Vedant Ghuge"
                  role="YOUNGEST SON · FOUNDER"
                  initials="VG"
                  image="/images/ved-founder.jpeg"
                  className="child-node vedant-node"
                />
              </div>
            </div>
          </motion.div>

          <div className="tree-caption">
            <span />
            A FAMILY FOUNDATION. A NEW GENERATION OF ENTREPRENEURS.
          </div>
        </section>

        {/* ROLL BALL */}
        <section className="sports-section">
          <div className="sports-heading">
            <Reveal>
              <span className="section-kicker">
                03 / THE SPORTING JOURNEY
              </span>

              <h2>
                Before the boardroom,
                <br />
                <em>there was the court.</em>
              </h2>

              <p>
                Two brothers, one sporting passion and a journey that
                helped shape the people they are today.
              </p>
            </Reveal>

            <Reveal className="sports-values" delay={0.15}>
              <Trophy size={28} />
              <span>DISCIPLINE</span>
              <span>TEAMWORK</span>
              <span>RESILIENCE</span>
            </Reveal>
          </div>

          <div className="sports-feature">
            <motion.div
              className="sports-image"
              initial={{
                opacity: 0,
                x: -50,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.08,
              }}
              transition={{
                duration: 1.1,
                ease,
              }}
            >
              <img
                src="/images/ved_harshal_rollball.jpeg"
                alt="Harshal and Vedant during their Roll Ball journey"
              />

              <span className="sports-image-label">
                THE ROLL BALL YEARS
              </span>
            </motion.div>

            <Reveal className="sports-copy" delay={0.15}>
              <span className="section-kicker">
                A SHARED BEGINNING
              </span>

              <h3>
                Two journeys.
                <br />
                One <em>sporting dream.</em>
              </h3>

              <p>
                Roll Ball became an important part of Harshal and
                Vedant's lives from a young age. Their journey involved
                years of practice, competition, teamwork and the
                opportunity to represent India at the international level.
              </p>

              <p>
                Sport taught them to stay committed, face challenges
                and work towards a shared goal. Those lessons continue
                to influence their approach to life and business.
              </p>

              <div className="sports-highlight">
                <Flag size={20} />

                <div>
                  <strong>Representing India</strong>
                  <span>
                    International-level Roll Ball journey
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INDIVIDUAL PROFILES */}
        <section
          className="leadership-profiles"
          id="next-generation"
        >
          <div className="profiles-heading">
            <Reveal>
              <span className="section-kicker">
                04 / THE NEXT GENERATION
              </span>

              <h2>
                Two journeys.
                <br />
                <em>One family legacy.</em>
              </h2>

              <p>
                Different paths, shared values and a common ambition
                to create something meaningful.
              </p>
            </Reveal>
          </div>

          <motion.div
            className="leaders-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.05,
            }}
          >
            {leaders.map((leader) => (
              <LeaderCard
                key={leader.id}
                leader={leader}
              />
            ))}
          </motion.div>
        </section>

        {/* 05 / FOUNDER'S VISION */}
        <section className="vision-section">
          <div className="vision-watermark">VG</div>

          <div className="vision-topline">
            <span>05 / THE FOUNDER'S VISION</span>
            <span>GHUGE GROUP · THE NEXT CHAPTER</span>
          </div>

          <div className="vision-inner">
            <Reveal className="vision-heading">
              <span className="vision-overline">
                A VISION BEYOND ONE VENTURE
              </span>

              <h2>
                Think beyond
                <br />
                one business.
                <br />
                <em>Build a legacy.</em>
              </h2>

              <div className="vision-founder">
                <span>THE VISION OF</span>
                <strong>Vedant Ghuge</strong>
                <small>FOUNDER · GHUGE GROUP</small>
              </div>
            </Reveal>

            <Reveal className="vision-copy" delay={0.2}>
              <div className="vision-quote">“</div>

              <p className="vision-main">
                Build a recognised business group that brings
                businesses, ideas and opportunities together
                under one identity.
              </p>

              <div className="vision-rule" />

              <p>
                The vision is not limited to one industry or one idea.
                It is about exploring new possibilities, creating
                meaningful ventures and building businesses that can
                grow with purpose.
              </p>

              <p className="vision-last-line">
                What begins with one vision can become a platform
                for many journeys.
              </p>

              <div className="vision-signature">
                <span />
                BUILT WITH VISION. DRIVEN BY AMBITION.
              </div>
            </Reveal>
          </div>

          <div className="vision-bottomline">
            <span>VISION</span>
            <span>RESPONSIBILITY</span>
            <span>LONG-TERM THINKING</span>
            <span>GROWTH</span>
          </div>
        </section>

        {/* FINAL ORANGE CLOSING SECTION */}
        <section className="leadership-closing">
          <div className="closing-watermark">GH</div>
          <div className="closing-orbit" />

          <Reveal className="closing-content">
            <span className="closing-kicker">
              THE JOURNEY CONTINUES
            </span>

            <h2>
              A name to build.
              <br />
              <em>A future to create.</em>
            </h2>

            <p>
              Rooted in family. Shaped by sport. Driven by the ambition
              to build something that continues to grow.
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

.leadership-page {
  --orange: #E96A24;
  --orange-dark: #C94B12;
  --orange-mid: #F28A42;
  --orange-light: #F8B078;
  --cream: #FFF9F3;
  --peach: #FCE6D5;
  --muted: #98684E;
  --ink: #783311;
  --deep: #783311;

  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
  scroll-behavior: smooth;
}

.leadership-page * {
  box-sizing: border-box;
}

.leadership-page a {
  color: inherit;
  text-decoration: none;
}

.leadership-page img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.leadership-page strong {
  color: var(--orange-dark);
  font-weight: 800;
}

.section-kicker {
  display: flex;
  align-items: center;
  gap: 11px;
  color: var(--orange-dark);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.2px;
}

/* HERO */

.leadership-hero {
  min-height: 730px;
  padding: 125px 8% 28px;
  background:
    radial-gradient(ellipse at 78% 45%, rgba(255,230,207,.3), transparent 40%),
    linear-gradient(115deg, #C94B12 0%, #E96A24 48%, #F28A42 100%);
  color: var(--cream);
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero-grain {
  position: absolute;
  inset: 0;
  opacity: .06;
  background-image: radial-gradient(rgba(255,255,255,.8) .7px, transparent .7px);
  background-size: 8px 8px;
  pointer-events: none;
}

.hero-orbit {
  position: absolute;
  border: 1px solid rgba(255,249,243,.2);
  border-radius: 50%;
  pointer-events: none;
  animation: leadershipOrbit 18s linear infinite;
}

.hero-orbit-one {
  width: 650px;
  height: 650px;
  right: -230px;
  top: -270px;
}

.hero-orbit-two {
  width: 440px;
  height: 440px;
  right: -120px;
  bottom: -250px;
  animation-direction: reverse;
}

@keyframes leadershipOrbit {
  to { transform: rotate(360deg); }
}

.leadership-hero-inner {
  max-width: 1300px;
  min-height: 520px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 55px;
  align-items: center;
}

.leadership-hero-copy {
  position: relative;
  z-index: 2;
}

.leadership-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #FFE5CB;
  font-size: 9px;
  letter-spacing: 2.3px;
  font-weight: 700;
}

.leadership-eyebrow span {
  width: 27px;
  height: 1px;
  background: #FFE5CB;
}

.leadership-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(58px, 6.4vw, 88px);
  line-height: 1.02;
  letter-spacing: -3px;
  font-weight: 400;
  margin: 32px 0 23px;
}

.leadership-hero h1 em {
  color: #FFE5CB;
}

.leadership-hero-copy > p {
  max-width: 460px;
  font-size: 13px;
  line-height: 2;
  color: rgba(255,249,243,.88);
}

.leadership-scroll {
  display: inline-flex;
  align-items: center;
  gap: 17px;
  margin-top: 27px;
  padding-bottom: 11px;
  border-bottom: 1px solid #FFE5CB;
  color: #FFE5CB !important;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.7px;
  transition: gap .3s ease;
}

.leadership-scroll:hover {
  gap: 26px;
}

.leadership-scroll svg {
  animation: leadershipArrow 1.7s ease-in-out infinite;
}

@keyframes leadershipArrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
}

.hero-image-stage {
  height: 475px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;
}

.hero-image-frame {
  width: 84%;
  height: 430px;
  position: relative;
  overflow: hidden;
  border-radius: 180px 180px 5px 5px;
  border: 1px solid rgba(255,229,203,.7);
  z-index: 1;
  background: var(--orange-dark);
}

.hero-image-frame img {
  object-position: center 28%;
  transition: transform 1s ease;
}

.hero-image-stage:hover .hero-image-frame img {
  transform: scale(1.055);
}

.hero-image-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(90,35,10,.75));
}

.hero-image-label {
  position: absolute;
  bottom: 27px;
  left: 25px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
}

.hero-image-label span {
  color: #FFE5CB;
  font-size: 8px;
  letter-spacing: 2px;
}

.hero-image-label strong {
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 23px;
  font-weight: 400;
}

.hero-image-outline {
  position: absolute;
  width: 88%;
  height: 455px;
  border: 1px solid rgba(255,229,203,.45);
  border-radius: 190px 190px 5px 5px;
  transform: rotate(4deg);
}

.hero-floating-card {
  position: absolute;
  right: -2%;
  bottom: 23px;
  z-index: 2;
  padding: 14px 17px;
  background: var(--cream);
  color: var(--orange-dark);
  box-shadow: 0 15px 40px rgba(90,35,10,.2);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
}

.hero-floating-card svg {
  color: var(--orange);
}

.hero-bottom {
  max-width: 1300px;
  margin: 25px auto 0;
  padding-top: 19px;
  border-top: 1px solid rgba(255,249,243,.35);
  display: flex;
  justify-content: space-between;
  color: rgba(255,249,243,.8);
  font-size: 8px;
  letter-spacing: 1.8px;
}

/* FAMILY STORY */

.family-story {
  max-width: 1300px;
  margin: auto;
  padding: 110px 8%;
  display: grid;
  grid-template-columns: 1fr .85fr;
  gap: 90px;
  align-items: end;
}

.family-story h2,
.family-tree-heading h2,
.profiles-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(45px, 5.2vw, 68px);
  line-height: 1.1;
  letter-spacing: -2px;
  font-weight: 400;
  margin: 24px 0 0;
}

.family-story h2 em,
.family-tree-heading h2 em,
.profiles-heading h2 em {
  color: var(--orange);
  font-weight: 400;
}

.story-copy p {
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
  margin: 0 0 16px;
}

.story-signature {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 27px;
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

/* FAMILY TREE */

.family-tree-section {
  background: var(--peach);
  padding: 100px 8% 90px;
  text-align: center;
}

.family-tree-heading {
  max-width: 680px;
  margin: auto;
}

.family-tree-heading .section-kicker {
  justify-content: center;
}

.family-tree-heading p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
  margin-top: 18px;
}

.family-tree {
  max-width: 850px;
  margin: 55px auto 0;
}

.parents-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  max-width: 650px;
  margin: auto;
  position: relative;
}

.parents-row::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 35px;
  background: var(--orange);
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}

.family-node {
  background: linear-gradient(145deg, #E96A24, #C94B12);
  color: var(--cream);
  padding: 22px 16px;
  border: 1px solid rgba(201,75,18,.4);
  box-shadow: 0 14px 38px rgba(120,51,17,.12);
  position: relative;
  text-align: center;
  transition: box-shadow .4s ease;
}

.family-node-image {
  width: 105px;
  height: 105px;
  margin: 0 auto 15px;
  border: 2px solid #F8B078;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--orange-dark);
}

.family-node-image img {
  object-fit: cover;
  object-position: center 25%;
}

.family-node-image span {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: #FFE5CB;
}

.family-node-role {
  display: block;
  color: #FFE5CB;
  font-size: 7px;
  letter-spacing: 1.4px;
  line-height: 1.6;
}

.family-node h3 {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 400;
  margin: 9px 0 13px;
  color: white;
}

.family-node-bottom {
  display: block;
  padding-top: 11px;
  border-top: 1px solid rgba(255,249,243,.25);
  color: rgba(255,249,243,.75);
  font-size: 7px;
  letter-spacing: 1.7px;
}

.mother-node {
  background: linear-gradient(145deg, #F28A42, #D95A19);
}

.tree-connector {
  height: 82px;
  width: 50%;
  margin: auto;
  position: relative;
}

.tree-vertical-line {
  width: 1px;
  height: 41px;
  position: absolute;
  top: 0;
  left: 50%;
  background: var(--orange);
}

.tree-horizontal-line {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--orange);
}

.tree-children {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
}

.tree-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.child-connector {
  height: 42px;
  width: 1px;
  background: var(--orange);
  margin-top: -42px;
}

.child-node {
  width: 100%;
  max-width: 325px;
}

.vedant-node {
  background: linear-gradient(145deg, #C94B12, #A83D0C);
}

.tree-caption {
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.7px;
}

.tree-caption span {
  width: 25px;
  height: 1px;
  background: var(--orange);
}

/* ROLL BALL */

.sports-section {
  max-width: 1450px;
  margin: auto;
  padding: 115px 8%;
}

.sports-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 45px;
  margin-bottom: 55px;
}

.sports-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 5.3vw, 70px);
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -2px;
  margin: 23px 0 17px;
}

.sports-heading h2 em {
  color: var(--orange);
}

.sports-heading > div:first-child p {
  max-width: 490px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.sports-values {
  min-width: 165px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  border-left: 1px solid var(--orange);
  padding: 10px 0 10px 22px;
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.7px;
}

.sports-values svg {
  margin-bottom: 5px;
}

.sports-feature {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 70px;
  align-items: center;
}

.sports-image {
  height: 470px;
  position: relative;
  overflow: hidden;
  background: var(--peach);
}

.sports-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 8%;
  transition: transform 1s ease;
}

.sports-image:hover img {
  transform: scale(1.035);
}

.sports-image-label {
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 12px 15px;
  background: var(--cream);
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.6px;
}

.sports-copy h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(39px, 4.3vw, 57px);
  line-height: 1.12;
  font-weight: 400;
  margin: 23px 0;
}

.sports-copy h3 em {
  color: var(--orange);
}

.sports-copy > p {
  color: var(--muted);
  font-size: 12px;
  line-height: 2;
  margin-bottom: 16px;
}

.sports-highlight {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 27px;
  padding-top: 19px;
  border-top: 1px solid rgba(201,75,18,.2);
  color: var(--orange);
}

.sports-highlight div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sports-highlight strong {
  color: var(--orange-dark);
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 600;
}

.sports-highlight span {
  color: var(--muted);
  font-size: 10px;
}

/* PROFILES */

.leadership-profiles {
  background: var(--peach);
  padding: 105px 8% 115px;
}

.profiles-heading {
  max-width: 1300px;
  margin: 0 auto 48px;
}

.profiles-heading p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
  margin-top: 17px;
}

.leaders-grid {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
}

.leader-card {
  background: var(--cream);
  padding: 21px;
  border: 1px solid rgba(201,75,18,.2);
  transition:
    box-shadow .4s ease,
    border-color .4s ease;
}

.leader-card:hover {
  box-shadow: 0 22px 50px rgba(120,51,17,.16);
  border-color: var(--orange);
}

.leader-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.leader-card-top svg {
  color: var(--orange);
}

.leader-photo-wrap {
  height: 390px;
  margin: 18px 0 22px;
  position: relative;
  overflow: hidden;
  background: var(--peach);
}

.leader-photo {
  object-fit: cover;
  object-position: center 25%;
  transition: transform .9s ease;
}

.leader-card:hover .leader-photo {
  transform: scale(1.045);
}

.leader-photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(120,51,17,.48), transparent 42%);
}

.leader-photo-caption {
  position: absolute;
  bottom: 16px;
  left: 18px;
  color: white;
  font-size: 8px;
  letter-spacing: 1.8px;
}

.leader-role {
  font-size: 8px;
  color: var(--orange-dark);
  letter-spacing: 1.8px;
  font-weight: 700;
}

.leader-info h3 {
  font-family: 'Playfair Display', serif;
  font-size: 31px;
  font-weight: 400;
  margin: 9px 0 5px;
  color: var(--ink);
}

.leader-title {
  font-size: 10px;
  color: var(--orange-dark);
  font-weight: 600;
}

.leader-info > p {
  font-size: 11px;
  line-height: 1.95;
  color: var(--muted);
  margin: 17px 0;
}

.leader-info > p strong {
  color: var(--orange-dark);
  font-weight: 800;
}

.leader-qualities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 15px;
  border-top: 1px solid rgba(201,75,18,.2);
}

.leader-qualities span {
  padding: 8px 10px;
  border: 1px solid rgba(201,75,18,.25);
  color: var(--orange-dark);
  font-size: 8px;
  letter-spacing: .7px;
}

/* FOUNDER VISION — FEATURE SECTION */

.vision-section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 35px 8% 75px;
  background:
    radial-gradient(ellipse at 92% 12%, rgba(248,176,120,.22), transparent 30%),
    var(--cream);
  color: var(--ink);
}

.vision-topline {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 0 20px;
  border-bottom: 1px solid rgba(201,75,18,.22);
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: var(--orange-dark);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.8px;
}

.vision-watermark {
  position: absolute;
  right: 2%;
  top: 7%;
  font-family: 'Playfair Display', serif;
  font-size: clamp(250px, 38vw, 510px);
  line-height: 1;
  color: rgba(233,106,36,.055);
  pointer-events: none;
  animation: visionFloat 8s ease-in-out infinite;
}

@keyframes visionFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}

.vision-inner {
  max-width: 1300px;
  min-height: 600px;
  margin: auto;
  padding: 85px 0 65px;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: 100px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.vision-overline {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--orange-dark);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.vision-overline::before {
  content: "";
  width: 28px;
  height: 1px;
  background: var(--orange);
}

.vision-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(58px, 7vw, 91px);
  line-height: 1.02;
  letter-spacing: -3px;
  font-weight: 400;
  margin: 34px 0 45px;
  color: var(--ink);
}

.vision-heading h2 em {
  color: var(--orange);
  font-weight: 400;
}

.vision-founder {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 20px 0 0 18px;
  border-top: 1px solid rgba(201,75,18,.25);
  border-left: 2px solid var(--orange);
  max-width: 290px;
}

.vision-founder span,
.vision-founder small {
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.8px;
  font-weight: 700;
}

.vision-founder strong {
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  font-weight: 500;
  color: var(--ink);
}

.vision-copy {
  align-self: center;
  position: relative;
  padding: 38px 0 0;
}

.vision-quote {
  font-family: 'Playfair Display', serif;
  font-size: 112px;
  line-height: .55;
  color: var(--orange);
  opacity: .85;
  margin-bottom: 22px;
}

.vision-copy > p {
  color: var(--muted);
  font-size: 13px;
  line-height: 2.1;
  margin: 0 0 22px;
}

.vision-copy > .vision-main {
  font-family: 'Playfair Display', serif;
  font-size: clamp(23px, 2.5vw, 31px);
  line-height: 1.55;
  color: var(--ink);
  font-weight: 500;
  margin-bottom: 25px;
}

.vision-rule {
  width: 55px;
  height: 2px;
  background: var(--orange);
  margin: 27px 0;
}

.vision-copy > .vision-last-line {
  color: var(--orange-dark);
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  line-height: 1.7;
  font-weight: 600;
  margin-top: 26px;
}

.vision-signature {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 35px;
  color: var(--orange-dark);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1.7px;
}

.vision-signature span {
  width: 35px;
  height: 1px;
  background: var(--orange);
}

.vision-bottomline {
  max-width: 1300px;
  margin: auto;
  padding-top: 19px;
  border-top: 1px solid rgba(201,75,18,.22);
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: var(--muted);
  font-size: 8px;
  letter-spacing: 1.8px;
  font-weight: 700;
}

/* FINAL ORANGE CLOSING */

.leadership-closing {
  background:
    radial-gradient(ellipse at 85% 15%, rgba(255,224,192,.22), transparent 36%),
    linear-gradient(115deg, #C94B12 0%, #E96A24 55%, #F28A42 100%);
  color: var(--cream);
  padding: 90px 8% 27px;
  min-height: 490px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  isolation: isolate;
}

.closing-watermark {
  position: absolute;
  right: 5%;
  top: -65px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(250px, 40vw, 530px);
  color: rgba(255,249,243,.09);
  line-height: 1;
  pointer-events: none;
}

.closing-orbit {
  position: absolute;
  width: 580px;
  height: 580px;
  right: -180px;
  bottom: -360px;
  border: 1px solid rgba(255,249,243,.25);
  border-radius: 50%;
  box-shadow:
    0 0 0 45px rgba(255,249,243,.035),
    0 0 0 90px rgba(255,249,243,.025);
  pointer-events: none;
}

.closing-content {
  max-width: 1300px;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 1;
}

.closing-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #FFE5CB;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.closing-kicker::before {
  content: "";
  width: 28px;
  height: 1px;
  background: #FFE5CB;
}

.closing-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(57px, 7vw, 88px);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -2.5px;
  margin: 27px 0 18px;
}

.closing-content h2 em {
  color: #FFE5CB;
}

.closing-content p {
  max-width: 470px;
  color: rgba(255,249,243,.9);
  font-size: 12px;
  line-height: 2;
}

.closing-link {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #FFE5CB;
  padding: 13px 0;
  margin-top: 17px;
  color: #FFE5CB !important;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.7px;
  transition: gap .3s ease;
}

.closing-link:hover {
  gap: 25px;
}

.closing-footer {
  max-width: 1300px;
  width: 100%;
  margin: 65px auto 0;
  padding-top: 19px;
  border-top: 1px solid rgba(255,249,243,.35);
  display: flex;
  justify-content: space-between;
  color: rgba(255,249,243,.82);
  font-size: 8px;
  letter-spacing: 1.7px;
}

/* TABLET */

@media (max-width: 900px) {
  .leadership-hero-inner {
    grid-template-columns: 1fr .9fr;
    gap: 25px;
  }

  .leadership-hero h1 {
    font-size: 64px;
  }

  .hero-image-stage {
    height: 410px;
  }

  .hero-image-frame {
    height: 370px;
    width: 88%;
  }

  .hero-image-outline {
    height: 390px;
  }

  .family-story {
    gap: 45px;
  }

  .sports-feature {
    gap: 40px;
  }

  .vision-inner {
    gap: 55px;
  }

  .vision-heading h2 {
    font-size: 65px;
  }

  .leader-photo-wrap {
    height: 330px;
  }
}

/* MOBILE */

@media (max-width: 650px) {
  .leadership-hero {
    padding: 105px 7% 25px;
  }

  .leadership-hero-inner {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .leadership-hero h1 {
    font-size: 55px;
    letter-spacing: -2px;
  }

  .hero-image-stage {
    height: 350px;
  }

  .hero-image-frame {
    width: 82%;
    height: 315px;
  }

  .hero-image-outline {
    width: 87%;
    height: 330px;
  }

  .hero-floating-card {
    right: -1%;
    bottom: 5px;
    padding: 10px 12px;
    font-size: 7px;
  }

  .hero-bottom {
    flex-wrap: wrap;
    gap: 12px;
    font-size: 7px;
  }

  .family-story {
    padding: 80px 7%;
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .family-story h2,
  .family-tree-heading h2,
  .profiles-heading h2 {
    font-size: 45px;
  }

  .family-tree-section {
    padding: 80px 6%;
  }

  .parents-row {
    gap: 13px;
  }

  .parents-row::after {
    width: 14px;
  }

  .family-node {
    padding: 17px 9px;
  }

  .family-node-image {
    width: 78px;
    height: 78px;
  }

  .family-node-role {
    font-size: 6px;
    letter-spacing: .8px;
  }

  .family-node h3 {
    font-size: 15px;
  }

  .tree-children {
    gap: 14px;
  }

  .tree-connector {
    width: 65%;
  }

  .tree-caption {
    font-size: 6px;
    line-height: 1.8;
  }

  .sports-section {
    padding: 80px 7%;
  }

  .sports-heading {
    display: block;
    margin-bottom: 35px;
  }

  .sports-heading h2 {
    font-size: 44px;
  }

  .sports-values {
    margin-top: 25px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    border-left: 0;
    border-top: 1px solid var(--orange);
    padding: 15px 0 0;
    gap: 12px;
  }

  .sports-values svg {
    margin: 0;
  }

  .sports-feature {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .sports-image {
    height: 360px;
  }

  .sports-image img {
    object-position: center 5%;
  }

  .sports-copy h3 {
    font-size: 43px;
  }

  .leadership-profiles {
    padding: 80px 7%;
  }

  .leaders-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .leader-photo-wrap {
    height: 350px;
  }

  .vision-section {
    padding: 28px 7% 45px;
  }

  .vision-topline {
    font-size: 7px;
    letter-spacing: 1px;
    align-items: flex-start;
  }

  .vision-topline span:last-child {
    text-align: right;
  }

  .vision-inner {
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 65px 0 50px;
  }

  .vision-heading h2 {
    font-size: clamp(52px, 13vw, 67px);
    letter-spacing: -2px;
    margin: 26px 0 32px;
  }

  .vision-founder strong {
    font-size: 24px;
  }

  .vision-copy {
    padding-top: 10px;
  }

  .vision-quote {
    font-size: 85px;
  }

  .vision-copy > .vision-main {
    font-size: 23px;
  }

  .vision-bottomline {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px 22px;
    font-size: 7px;
  }

  .leadership-closing {
    padding: 75px 7% 25px;
    min-height: 440px;
  }

  .closing-content h2 {
    font-size: 54px;
    letter-spacing: -1.5px;
  }

  .closing-footer {
    flex-direction: column;
    gap: 12px;
    margin-top: 50px;
  }
}

@media (max-width: 380px) {
  .leadership-hero h1 {
    font-size: 47px;
  }

  .family-node h3 {
    font-size: 13px;
  }

  .family-node-role {
    font-size: 5px;
  }

  .family-node-image {
    width: 67px;
    height: 67px;
  }

  .vision-heading h2 {
    font-size: 49px;
  }

  .closing-content h2 {
    font-size: 47px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .leadership-page *,
  .leadership-page *::before,
  .leadership-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
