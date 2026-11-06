
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  Mail,
  Phone,
  Send,
  Sparkles,
  Building2,
  Target,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  {
    icon: Target,
    title: "Think Bigger",
    text: "Bring ideas, curiosity and a willingness to explore new possibilities.",
  },
  {
    icon: Building2,
    title: "Take Ownership",
    text: "Take initiative, contribute meaningfully and turn ideas into action.",
  },
  {
    icon: TrendingUp,
    title: "Keep Growing",
    text: "Learn through experience and grow alongside evolving businesses.",
  },
];

const opportunities = [
  {
    number: "01",
    title: "Experienced Professionals",
    description:
      "Bring your expertise and perspective to help build and grow our businesses.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Freshers & Graduates",
    description:
      "Begin your professional journey in an environment that values initiative and learning.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Internships",
    description:
      "Gain practical exposure, contribute to real work and develop your strengths.",
    icon: Lightbulb,
  },
];

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "General Application",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Career Application - ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nArea of Interest: ${form.interest}\n\nMessage:\n${form.message}\n\nI will attach my resume to this email.`
    );

    window.location.href =
      `mailto:ghugegroup@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="careers-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="career-hero">
        <div className="career-grid" />
        <div className="career-glow" />
        <div className="career-orbit career-orbit-one" />
        <div className="career-orbit career-orbit-two" />

        <div className="career-hero-inner">
          <motion.div
            className="career-hero-content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="career-eyebrow" variants={reveal}>
              <Sparkles size={14} />
              CAREERS AT GHUGE GROUP
            </motion.span>

            <motion.h1 variants={reveal}>
              Your ambition.
              <br />
              <em>Our next chapter.</em>
            </motion.h1>

            <motion.p variants={reveal}>
              We believe great businesses are built by great people.
              Discover opportunities to contribute, learn and grow
              with GHUGE GROUP.
            </motion.p>

            <motion.div className="career-actions" variants={reveal}>
              <a href="#apply" className="career-primary-btn">
                Explore Opportunities
                <ArrowUpRight size={17} />
              </a>

              <a href="#opportunities" className="career-text-link">
                Discover possibilities
                <ArrowDown size={15} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="career-hero-mark"
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
            transition={{ duration: 1.3, ease }}
          >
            G
          </motion.div>
        </div>

        <div className="career-hero-bottom">
          <span>PEOPLE. PURPOSE. PROGRESS.</span>
          <span>BUILDING WHAT COMES NEXT</span>
        </div>
      </section>

      {/* INTRO + VALUES */}
      <section className="career-intro" id="culture">
        <Reveal className="career-intro-heading">
          <span className="career-kicker">01 / GROW WITH US</span>
          <h2>
            More than a workplace.
            <br />
            <em>A place to grow.</em>
          </h2>
          <p>
            GHUGE GROUP brings together businesses across different
            industries. As our journey evolves, we welcome people
            with curiosity, initiative and the ambition to build
            something meaningful.
          </p>
        </Reveal>

        <motion.div
          className="career-values"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="career-value"
                key={item.title}
                variants={reveal}
              >
                <div className="career-value-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="career-opportunities" id="opportunities">
        <div className="career-opportunities-heading">
          <Reveal>
            <span className="career-kicker">02 / FIND YOUR PLACE</span>
            <h2>
              Where could you
              <br />
              <em>fit in?</em>
            </h2>
          </Reveal>

          <Reveal className="career-opportunities-note">
            <p>
              Whether you're starting out or bringing years of
              experience, there's room for people who want to
              contribute and grow.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="career-opportunity-list"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {opportunities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="career-opportunity"
                key={item.number}
                variants={reveal}
                whileHover={{ x: 7 }}
                transition={{ duration: 0.3, ease }}
              >
                <span className="career-op-number">{item.number}</span>

                <div className="career-op-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div className="career-op-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight
                  className="career-op-arrow"
                  size={21}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <p className="career-note">
          Applications are considered based on business requirements
          and availability. Submission does not guarantee an opening.
        </p>
      </section>

      {/* APPLICATION */}
      <section className="career-apply" id="apply">
        <div className="career-apply-layout">
          <Reveal className="career-apply-info">
            <span className="career-kicker">03 / TAKE THE FIRST STEP</span>

            <h2>
              Let's build
              <br />
              <em>something together.</em>
            </h2>

            <p>
              Tell us about yourself, your interests and how you
              would like to contribute to GHUGE GROUP.
            </p>

            <div className="career-contact-item">
              <Mail size={19} />
              <div>
                <small>EMAIL YOUR RESUME</small>
                <a href="mailto:ghugegroup@gmail.com">
                  ghugegroup@gmail.com
                </a>
              </div>
            </div>

            <div className="career-contact-item">
              <Phone size={19} />
              <div>
                <small>GET IN TOUCH</small>
                <a href="tel:8408820707">8408820707</a>
              </div>
            </div>

            <div className="career-apply-caption">
              <span />
              Please attach your resume when sending your application.
            </div>
          </Reveal>

          <motion.form
            className="career-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="career-form-heading">
              <span>CAREER ENQUIRY</span>
              <h3>Introduce yourself.</h3>
              <p>We would love to hear from you.</p>
            </div>

            <label>
              Your Name
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </label>

            <label>
              Area of Interest
              <select
                value={form.interest}
                onChange={(e) =>
                  setForm({ ...form, interest: e.target.value })
                }
              >
                <option>General Application</option>
                <option>Experienced Professional</option>
                <option>Fresher / Graduate</option>
                <option>Internship</option>
                <option>Business / Management</option>
                <option>Technology / Digital</option>
                <option>Marketing / Creative</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Tell Us About Yourself
              <textarea
                placeholder="Your background, skills and interests..."
                rows="3"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </label>

            <button type="submit" className="career-submit">
              Send Application
              <Send size={16} />
            </button>

            <small className="career-form-disclaimer">
              Your email application will open in your email app.
              Remember to attach your resume.
            </small>
          </motion.form>
        </div>
      </section>
    </main>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.careers-page {
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

.careers-page * { box-sizing: border-box; }
.careers-page a { color: inherit; text-decoration: none; }

/* HERO */

.career-hero {
  min-height: 570px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 90px 9% 75px;
  background: linear-gradient(120deg, #E96A24, #C94B12);
  color: var(--cream);
  overflow: hidden;
}

.career-grid {
  position: absolute;
  inset: 0;
  opacity: .12;
  background-image:
    linear-gradient(rgba(255,249,243,.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,249,243,.2) 1px, transparent 1px);
  background-size: 75px 75px;
  mask-image: linear-gradient(to right, black, transparent);
}

.career-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  right: 3%;
  top: -150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(248,176,120,.4), transparent 68%);
  animation: careerGlow 7s ease-in-out infinite alternate;
}

@keyframes careerGlow {
  from { transform: scale(.9); opacity: .5; }
  to { transform: scale(1.15); opacity: 1; }
}

.career-orbit {
  position: absolute;
  border: 1px solid rgba(255,249,243,.2);
  border-radius: 50%;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.career-orbit-one {
  width: 440px;
  height: 440px;
  animation: orbit 30s linear infinite;
}

.career-orbit-two {
  width: 310px;
  height: 310px;
  border-style: dashed;
  animation: orbit 22s linear infinite reverse;
}

@keyframes orbit {
  to { rotate: 360deg; }
}

.career-hero-inner {
  width: 100%;
  max-width: 1250px;
  margin: auto;
  position: relative;
  z-index: 2;
}

.career-hero-content { max-width: 690px; }

.career-eyebrow,
.career-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.2px;
  color: var(--orange-dark);
}

.career-eyebrow { color: #FFE0C5; }

.career-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(58px, 7vw, 88px);
  font-weight: 400;
  line-height: 1.04;
  letter-spacing: -2.5px;
  margin: 29px 0 22px;
}

.career-hero h1 em {
  color: #FFE0C5;
  font-weight: 400;
}

.career-hero-content > p {
  max-width: 480px;
  color: rgba(255,249,243,.85);
  font-size: 14px;
  line-height: 1.9;
}

.career-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.career-primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 15px 21px;
  background: var(--cream);
  color: var(--orange-dark) !important;
  font-size: 11px;
  font-weight: 700;
  transition: .3s ease;
}

.career-primary-btn:hover {
  background: var(--peach);
  transform: translateY(-3px);
}

.career-text-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--cream) !important;
  font-size: 11px;
  transition: gap .3s ease;
}

.career-text-link:hover { gap: 15px; }

.career-hero-mark {
  position: absolute;
  right: 8%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Playfair Display', serif;
  font-size: 400px;
  line-height: 1;
  color: var(--cream);
  pointer-events: none;
}

.career-hero-bottom {
  position: absolute;
  bottom: 22px;
  left: 9%;
  right: 9%;
  padding-top: 15px;
  border-top: 1px solid rgba(255,249,243,.25);
  display: flex;
  justify-content: space-between;
  color: rgba(255,249,243,.75);
  font-size: 9px;
  letter-spacing: 1.8px;
}

/* INTRO + VALUES */

.career-intro {
  max-width: 1350px;
  margin: auto;
  padding: 85px 9%;
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 80px;
  align-items: center;
}

.career-intro-heading h2,
.career-opportunities-heading h2,
.career-apply-info h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(39px, 4.5vw, 57px);
  font-weight: 400;
  line-height: 1.13;
  letter-spacing: -1.5px;
  margin: 23px 0 20px;
}

.career-intro-heading h2 em,
.career-opportunities-heading h2 em,
.career-apply-info h2 em {
  color: var(--orange);
  font-weight: 400;
}

.career-intro-heading > p,
.career-opportunities-note p,
.career-apply-info > p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.career-values {
  border-top: 1px solid rgba(120,51,17,.15);
}

.career-value {
  display: flex;
  align-items: flex-start;
  gap: 17px;
  padding: 17px 0;
  border-bottom: 1px solid rgba(120,51,17,.15);
}

.career-value-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  color: var(--orange);
  border: 1px solid rgba(233,106,36,.3);
  border-radius: 50%;
}

.career-value > div:last-child > span {
  color: var(--orange);
  font-size: 9px;
  letter-spacing: 1.5px;
}

.career-value h3 {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-weight: 500;
  margin: 3px 0 4px;
}

.career-value p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

/* OPPORTUNITIES */

.career-opportunities {
  padding: 85px 9%;
  background: #FCEBDD;
}

.career-opportunities-heading {
  max-width: 1250px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 50px;
}

.career-opportunities-heading h2 { margin-bottom: 0; }

.career-opportunities-note {
  max-width: 370px;
  padding-bottom: 5px;
}

.career-opportunity-list {
  max-width: 1250px;
  margin: 42px auto 0;
  border-top: 1px solid rgba(120,51,17,.17);
}

.career-opportunity {
  display: grid;
  grid-template-columns: 40px 48px 1fr 25px;
  align-items: center;
  gap: 22px;
  padding: 23px 15px;
  border-bottom: 1px solid rgba(120,51,17,.17);
  transition: background .3s ease;
}

.career-opportunity:hover {
  background: rgba(255,249,243,.6);
}

.career-op-number {
  font-size: 10px;
  color: var(--orange);
}

.career-op-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(233,106,36,.35);
  color: var(--orange-dark);
  transition: .3s ease;
}

.career-opportunity:hover .career-op-icon {
  background: var(--orange);
  color: white;
}

.career-op-content h3 {
  font-family: 'Playfair Display', serif;
  font-size: 21px;
  font-weight: 500;
  margin: 0 0 5px;
}

.career-op-content p {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
  margin: 0;
}

.career-op-arrow {
  color: var(--orange-dark);
  transition: transform .3s ease;
}

.career-opportunity:hover .career-op-arrow {
  transform: translate(4px, -4px);
}

.career-note {
  max-width: 1250px;
  margin: 20px auto 0;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* APPLICATION */

.career-apply {
  padding: 90px 9%;
  background: var(--cream);
}

.career-apply-layout {
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: .9fr 1fr;
  gap: 90px;
  align-items: start;
}

.career-apply-info h2 { margin-top: 25px; }

.career-contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
  color: var(--orange);
}

.career-contact-item > div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.career-contact-item small {
  font-size: 9px;
  letter-spacing: 1.5px;
  color: var(--muted);
}

.career-contact-item a {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}

.career-contact-item a:hover { color: var(--orange); }

.career-apply-caption {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 32px;
  max-width: 340px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

.career-apply-caption span {
  width: 22px;
  height: 1px;
  background: var(--orange);
  flex-shrink: 0;
  margin-top: 7px;
}

.career-form {
  padding: 32px;
  background: #FFF4E9;
  border: 1px solid rgba(233,106,36,.14);
  box-shadow: 0 15px 45px rgba(120,51,17,.05);
}

.career-form-heading {
  margin-bottom: 25px;
}

.career-form-heading > span {
  font-size: 9px;
  letter-spacing: 1.8px;
  color: var(--orange-dark);
  font-weight: 700;
}

.career-form-heading h3 {
  font-family: 'Playfair Display', serif;
  font-size: 27px;
  font-weight: 500;
  margin: 9px 0 5px;
}

.career-form-heading p {
  color: var(--muted);
  font-size: 11px;
  margin: 0;
}

.career-form label {
  display: block;
  margin-bottom: 17px;
  color: var(--ink);
  font-size: 11px;
  font-weight: 600;
}

.career-form input,
.career-form select,
.career-form textarea {
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 12px 13px;
  background: var(--cream);
  border: 1px solid #EED8C6;
  border-radius: 0;
  outline: none;
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  transition: border .25s ease, box-shadow .25s ease;
}

.career-form input:focus,
.career-form select:focus,
.career-form textarea:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(233,106,36,.08);
}

.career-form textarea { resize: vertical; }

.career-form input::placeholder,
.career-form textarea::placeholder {
  color: #B99A86;
}

.career-submit {
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: var(--orange);
  border: none;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s ease;
}

.career-submit:hover {
  background: var(--orange-dark);
  transform: translateY(-2px);
}

.career-form-disclaimer {
  display: block;
  margin-top: 12px;
  color: var(--muted);
  font-size: 9px;
  line-height: 1.7;
}

/* TABLET */

@media (max-width: 900px) {
  .career-hero { padding: 90px 7% 75px; }
  .career-hero-mark { right: -5%; font-size: 310px; }
  .career-intro {
    padding: 75px 7%;
    gap: 40px;
  }
  .career-opportunities { padding: 75px 7%; }
  .career-apply { padding: 75px 7%; }
  .career-apply-layout { gap: 45px; }
}

/* MOBILE */

@media (max-width: 650px) {
  .career-hero {
    min-height: 570px;
    padding: 85px 7% 75px;
  }

  .career-hero h1 {
    font-size: 55px;
    letter-spacing: -2px;
  }

  .career-hero-content > p { font-size: 12px; }

  .career-hero-mark {
    top: 56%;
    right: -9%;
    font-size: 250px;
  }

  .career-orbit-one {
    width: 300px;
    height: 300px;
    right: -15%;
  }

  .career-orbit-two {
    width: 220px;
    height: 220px;
    right: -5%;
  }

  .career-hero-bottom {
    left: 7%;
    right: 7%;
    font-size: 7px;
    letter-spacing: 1px;
  }

  .career-actions { gap: 18px; }

  .career-intro {
    padding: 65px 7%;
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .career-intro-heading h2,
  .career-opportunities-heading h2,
  .career-apply-info h2 {
    font-size: 43px;
  }

  .career-opportunities { padding: 65px 7%; }

  .career-opportunities-heading {
    display: block;
  }

  .career-opportunities-note {
    margin-top: 18px;
  }

  .career-opportunity-list { margin-top: 25px; }

  .career-opportunity {
    grid-template-columns: 23px 39px 1fr 18px;
    gap: 10px;
    padding: 21px 3px;
  }

  .career-op-icon {
    width: 37px;
    height: 37px;
  }

  .career-op-content h3 { font-size: 17px; }
  .career-op-content p { font-size: 10px; }

  .career-apply { padding: 65px 7%; }

  .career-apply-layout {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .career-form { padding: 23px 18px; }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .careers-page *,
  .careers-page *::before,
  .careers-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
