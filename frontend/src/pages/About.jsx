
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

.about-page {
  --wine: #542a36;
  --wine-dark: #24151a;
  --cream: #f7f3ed;
  --gold: #b99a68;
  --muted: #82766f;
  background: var(--cream);
  color: var(--wine-dark);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

.about-page * { box-sizing: border-box; }

.about-page a {
  color: inherit;
  text-decoration: none;
}

.about-page .serif {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
}

.about-page .eyebrow {
  color: var(--gold);
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
}

/* HERO */

.about-hero {
  min-height: 620px;
  padding: 120px 8% 100px;
  background: var(--wine-dark);
  color: var(--cream);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  isolation: isolate;
}

.about-hero::before {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  right: -130px;
  top: 5%;
  background: radial-gradient(circle, rgba(185,154,104,.13), transparent 70%);
  border-radius: 50%;
  z-index: -1;
  animation: aboutGlow 8s ease-in-out infinite alternate;
}

.about-hero::after {
  content: 'G';
  position: absolute;
  right: 7%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Playfair Display', serif;
  font-size: clamp(280px, 39vw, 520px);
  line-height: 1;
  color: rgba(255,255,255,.025);
  pointer-events: none;
  animation: aboutFloat 9s ease-in-out infinite;
}

@keyframes aboutGlow {
  from { transform: scale(.85); opacity: .5; }
  to { transform: scale(1.15); opacity: 1; }
}

@keyframes aboutFloat {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -18px; }
}

.about-hero-content {
  max-width: 850px;
  position: relative;
  z-index: 1;
}

.about-hero h1 {
  font-size: clamp(54px, 8vw, 105px);
  line-height: 1.02;
  margin: 28px 0;
  letter-spacing: -2px;
}

.about-hero h1 span { color: var(--gold); }

.about-hero p {
  max-width: 490px;
  color: rgba(247,243,237,.66);
  font-size: 15px;
  line-height: 1.9;
}

.about-scroll {
  margin-top: 55px;
  display: flex;
  align-items: center;
  gap: 13px;
  color: var(--gold);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.about-scroll svg {
  animation: aboutArrow 1.7s ease-in-out infinite;
}

@keyframes aboutArrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
}

/* STORY */

.about-section {
  padding: 115px 9%;
}

.about-story {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 100px;
  align-items: start;
}

.about-side-label { padding-top: 12px; }

.about-side-label p {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.about-main-copy h2 {
  font-size: clamp(37px, 5vw, 61px);
  line-height: 1.18;
  margin: 0 0 28px;
}

.about-main-copy h2 span { color: var(--wine); }

.about-main-copy p {
  color: var(--muted);
  font-size: 14px;
  line-height: 2;
  max-width: 650px;
  margin: 0 0 18px;
}

.about-divider {
  height: 1px;
  background: rgba(84,42,54,.16);
  margin: 0 9%;
  transform-origin: left;
}

/* PHILOSOPHY */

.about-philosophy {
  background: #eee7de;
  padding: 105px 9%;
}

.about-philosophy-heading {
  max-width: 700px;
  margin-bottom: 65px;
}

.about-philosophy-heading h2 {
  font-size: clamp(40px, 5vw, 65px);
  line-height: 1.12;
  margin: 20px 0;
}

.about-philosophy-heading p {
  color: var(--muted);
  line-height: 1.9;
  font-size: 14px;
  max-width: 490px;
}

.about-principles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgba(84,42,54,.2);
}

.about-principle {
  padding: 30px 28px 10px 0;
  position: relative;
  transition: background .35s ease, transform .35s ease;
}

.about-principle + .about-principle {
  border-left: 1px solid rgba(84,42,54,.2);
  padding-left: 28px;
}

.about-principle:hover {
  transform: translateY(-8px);
}

.about-principle span {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 2px;
}

.about-principle h3 {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 400;
  margin: 20px 0 12px;
}

.about-principle p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
  max-width: 290px;
}

/* APPROACH */

.about-approach {
  padding: 110px 9%;
  background: var(--cream);
}

.about-approach-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: center;
}

.about-approach h2 {
  font-size: clamp(40px, 5vw, 65px);
  line-height: 1.13;
  margin: 22px 0;
}

.about-approach h2 span { color: var(--wine); }

.about-approach-copy {
  color: var(--muted);
  font-size: 14px;
  line-height: 2;
}

.about-approach-list {
  border-top: 1px solid rgba(84,42,54,.2);
}

.about-approach-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(84,42,54,.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  transition: padding .3s ease;
}

.about-approach-item:hover {
  padding-left: 12px;
}

.about-approach-item span:first-child {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
}

.about-approach-item span:last-child {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 1px;
}

/* CTA */

.about-cta {
  background: var(--wine);
  color: var(--cream);
  padding: 90px 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  position: relative;
  overflow: hidden;
}

.about-cta::after {
  content: 'G';
  position: absolute;
  right: 20%;
  top: -90px;
  font-family: 'Playfair Display', serif;
  font-size: 300px;
  color: rgba(255,255,255,.035);
  pointer-events: none;
}

.about-cta h2 {
  font-size: clamp(38px, 5vw, 62px);
  line-height: 1.15;
  margin: 17px 0 0;
}

.about-cta a {
  display: inline-flex;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid var(--gold);
  padding: 15px 0;
  color: var(--cream);
  font-size: 12px;
  letter-spacing: 1px;
  white-space: nowrap;
  transition: gap .3s ease;
  position: relative;
  z-index: 1;
}

.about-cta a:hover { gap: 38px; }

@media (max-width: 760px) {
  .about-hero {
    min-height: 520px;
    padding: 100px 7% 75px;
  }

  .about-hero h1 { letter-spacing: -1px; }

  .about-section,
  .about-philosophy,
  .about-approach {
    padding: 75px 7%;
  }

  .about-story,
  .about-approach-inner {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .about-principles {
    grid-template-columns: 1fr;
  }

  .about-principle,
  .about-principle + .about-principle {
    border-left: 0;
    border-bottom: 1px solid rgba(84,42,54,.2);
    padding: 25px 0;
  }

  .about-cta {
    padding: 70px 7%;
    align-items: flex-start;
    flex-direction: column;
  }

  .about-divider { margin: 0 7%; }
}

@media (prefers-reduced-motion: reduce) {
  .about-page *,
  .about-page *::before,
  .about-page *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
`;

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={reveal} className="eyebrow">
            Discover GHUGE GROUP
          </motion.div>

          <motion.h1
            className="serif"
            variants={reveal}
          >
            More than a
            <br />
            business. <span>A vision.</span>
          </motion.h1>

          <motion.p variants={reveal}>
            A group built on ambition, driven by ideas, and shaped by
            the belief that meaningful businesses are built with purpose.
          </motion.p>

          <motion.a
            href="#about-story"
            className="about-scroll"
            variants={reveal}
          >
            <ArrowDown size={15} />
            <span>Discover our story</span>
          </motion.a>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="about-section about-story" id="about-story">
        <Reveal className="about-side-label">
          <div className="eyebrow">01 / Our Story</div>
          <p>Who we are</p>
        </Reveal>

        <Reveal className="about-main-copy" delay={0.12}>
          <h2 className="serif">
            Built with vision.
            <br />
            <span>Driven by ambition.</span>
          </h2>

          <p>
            GHUGE GROUP represents a vision of building and growing
            businesses across different industries. We believe that
            every meaningful venture begins with an idea, but its
            success comes from the people, commitment and thinking
            behind it.
          </p>

          <p>
            Our focus is on creating opportunities, developing
            independent ventures and building something that can
            grow with purpose over time.
          </p>

          <p>
            Different businesses. Different opportunities.
            One shared vision.
          </p>
        </Reveal>
      </section>

      <motion.div
        className="about-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
      />

      {/* OUR PHILOSOPHY */}
      <section className="about-philosophy">
        <Reveal className="about-philosophy-heading">
          <div className="eyebrow">02 / Our Philosophy</div>
          <h2 className="serif">
            The way we think shapes what we build.
          </h2>
          <p>
            Our approach is guided by a few simple beliefs that
            influence how we look at opportunities and build
            businesses.
          </p>
        </Reveal>

        <motion.div
          className="about-principles"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="about-principle" variants={reveal}>
            <span>01</span>
            <h3>Think Beyond</h3>
            <p>
              Look beyond the immediate opportunity and focus on
              long-term possibilities.
            </p>
          </motion.div>

          <motion.div className="about-principle" variants={reveal}>
            <span>02</span>
            <h3>Build with Purpose</h3>
            <p>
              Every venture should have a clear direction and a
              meaningful reason to exist.
            </p>
          </motion.div>

          <motion.div className="about-principle" variants={reveal}>
            <span>03</span>
            <h3>Grow Together</h3>
            <p>
              Progress comes from consistent effort, shared learning
              and the willingness to evolve.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* OUR APPROACH */}
      <section className="about-approach">
        <div className="about-approach-inner">
          <Reveal>
            <div className="eyebrow">03 / Our Approach</div>
            <h2 className="serif">
              Independent ventures.
              <br />
              <span>One shared vision.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="about-approach-copy">
              GHUGE GROUP brings together ventures with their own
              identities, goals and areas of focus. Each business
              follows its own direction while being part of a
              larger vision of growth and opportunity.
            </p>

            <motion.div
              className="about-approach-list"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Independent thinking",
                "Purpose-led ventures",
                "Long-term perspective",
              ].map((item, index) => (
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
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="about-cta">
        <Reveal>
          <div className="eyebrow">The journey continues</div>
          <h2 className="serif">
            Let's build
            <br />
            what comes next.
          </h2>
        </Reveal>

        <motion.a
          href="/#contact"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          Get in touch
          <ArrowUpRight size={18} />
        </motion.a>
      </section>
    </div>
  );
}
