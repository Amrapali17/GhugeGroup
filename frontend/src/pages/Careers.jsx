
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  Users,
  Mail,
  Phone,
  Send,
  Sparkles,
  Building2,
} from "lucide-react";

const opportunities = [
  {
    number: "01",
    title: "Experienced Professionals",
    description:
      "Bring your experience, perspective and expertise to help build businesses and create meaningful impact.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Freshers & Graduates",
    description:
      "Start your professional journey in an environment where curiosity, initiative and learning matter.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Internships",
    description:
      "Gain practical exposure, work on real ideas and discover where your strengths can take you.",
    icon: Lightbulb,
  },
];

const values = [
  {
    title: "Think Bigger",
    text: "We believe in ideas that go beyond what already exists.",
  },
  {
    title: "Take Ownership",
    text: "We value people who take initiative and turn ideas into action.",
  },
  {
    title: "Keep Growing",
    text: "We believe every experience is an opportunity to learn.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

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

    window.location.href = `mailto:ghugegroup@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="careers-page">
      {/* HERO */}
      <section className="career-hero">
        <div className="career-hero-glow" />

        <motion.div
          className="career-hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16 },
            },
          }}
        >
          <motion.span className="career-eyebrow" variants={reveal}>
            <Sparkles size={14} />
            CAREERS AT GHUGE GROUP
          </motion.span>

          <motion.h1 variants={reveal}>
            Your ambition.
            <br />
            <span>Our next chapter.</span>
          </motion.h1>

          <motion.p variants={reveal}>
            Great businesses are built by people with great ideas.
            Discover opportunities to learn, contribute and grow
            with GHUGE GROUP.
          </motion.p>

          <motion.div className="career-hero-actions" variants={reveal}>
            <a href="#apply" className="career-primary-btn">
              Explore Opportunities <ArrowUpRight size={17} />
            </a>

            <a href="#culture" className="career-text-link">
              Discover our culture <ArrowDown size={15} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="career-hero-mark"
          initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
          animate={{ opacity: 0.09, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5 }}
        >
          G
        </motion.div>

        <div className="career-hero-bottom">
          <span>PEOPLE. PURPOSE. PROGRESS.</span>
          <span>BUILDING WHAT COMES NEXT</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="career-intro">
        <motion.div
          className="career-intro-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span>01 / THE OPPORTUNITY</span>
          <div />
        </motion.div>

        <motion.div
          className="career-intro-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <h2>
            More than a workplace.
            <br />
            <span>A place to build your future.</span>
          </h2>

          <p>
            GHUGE GROUP is driven by a vision to build and grow
            businesses across different industries. As our journey
            evolves, we believe the right people make all the difference.
          </p>

          <p>
            Whether you are beginning your career or bringing years
            of experience, we welcome individuals who are curious,
            motivated and ready to create something meaningful.
          </p>
        </motion.div>
      </section>

      {/* CULTURE */}
      <section className="career-culture" id="culture">
        <div className="career-section-heading">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            02 / WHAT WE BELIEVE
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            Ambition needs the
            <br />
            <span>right environment.</span>
          </motion.h2>
        </div>

        <div className="career-values-grid">
          {values.map((item, index) => (
            <motion.div
              className="career-value-card"
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.14, duration: 0.65 }}
            >
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="career-value-line" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="career-opportunities">
        <div className="career-section-heading">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            03 / FIND YOUR PLACE
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            Different journeys.
            <br />
            <span>One shared ambition.</span>
          </motion.h2>

          <p>
            We welcome applications from individuals interested in
            contributing to the growth of our businesses.
          </p>
        </div>

        <div className="career-opportunity-list">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="career-opportunity-card"
                key={item.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                <span className="career-op-number">{item.number}</span>

                <div className="career-op-icon">
                  <Icon size={23} strokeWidth={1.5} />
                </div>

                <div className="career-op-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight className="career-op-arrow" size={23} />
              </motion.div>
            );
          })}
        </div>

        <p className="career-note">
          Opportunities are subject to business requirements and
          availability. Submitting an application does not guarantee
          an opening.
        </p>
      </section>

      {/* GROUP VISION */}
      <section className="career-vision">
        <motion.div
          className="career-vision-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span>04 / THE BIGGER PICTURE</span>
          <Building2 size={31} strokeWidth={1.2} />

          <h2>
            Many businesses.
            <br />
            Many possibilities.
            <br />
            <em>One growing vision.</em>
          </h2>

          <p>
            As GHUGE GROUP explores new industries and builds new
            ventures, new opportunities will emerge for people who
            want to be part of that journey.
          </p>
        </motion.div>
      </section>

      {/* APPLICATION */}
      <section className="career-apply" id="apply">
        <div className="career-apply-layout">
          <motion.div
            className="career-apply-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <span>05 / TAKE THE FIRST STEP</span>

            <h2>
              Your next chapter
              <br />
              <em>could start here.</em>
            </h2>

            <p>
              Tell us a little about yourself, your interests and
              what you would like to bring to GHUGE GROUP.
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

            <p className="career-resume-note">
              Remember to attach your resume when sending your
              application by email.
            </p>
          </motion.div>

          <motion.form
            className="career-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="career-form-heading">
              <h3>Let's get to know you.</h3>
              <p>Share your details to get started.</p>
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
                placeholder="Your background, skills and what interests you..."
                rows="4"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </label>

            <button type="submit" className="career-submit">
              Send Application <Send size={17} />
            </button>

            <small className="career-form-disclaimer">
              Your email application will open in your email app.
              Attach your resume before sending.
            </small>
          </motion.form>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="career-final">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>GHUGE GROUP / CAREERS</span>
          <h2>
            The future is built
            <br />
            <em>by people who believe.</em>
          </h2>
          <a href="mailto:ghugegroup@gmail.com">
            Start a Conversation <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

      <style>{styles}</style>
    </main>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.careers-page {
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
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  background: var(--cream);
  overflow: hidden;
}

.careers-page * {
  box-sizing: border-box;
}

.careers-page a {
  text-decoration: none;
  color: inherit;
}

.career-hero {
  min-height: 690px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 110px 10%;
  background: var(--wine-deep);
  color: var(--cream);
  overflow: hidden;
}

.career-hero-glow {
  position: absolute;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  right: -100px;
  top: -170px;
  background: radial-gradient(circle, rgba(199,164,123,.16), transparent 68%);
  animation: careerGlow 8s ease-in-out infinite alternate;
}

@keyframes careerGlow {
  from { transform: scale(.9); opacity: .5; }
  to { transform: scale(1.2); opacity: 1; }
}

.career-hero-content {
  max-width: 780px;
  position: relative;
  z-index: 2;
}

.career-eyebrow,
.career-intro-label span,
.career-section-heading > span,
.career-vision-content > span,
.career-apply-info > span,
.career-final span {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

.career-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(55px, 7.2vw, 91px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -2px;
  margin: 32px 0 24px;
}

.career-hero h1 span {
  color: var(--gold-light);
  font-style: italic;
}

.career-hero-content > p {
  max-width: 520px;
  color: #D6C3B8;
  font-size: 15px;
  line-height: 1.9;
}

.career-hero-actions {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 38px;
  flex-wrap: wrap;
}

.career-primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 16px 23px;
  background: var(--gold);
  color: var(--wine-deep) !important;
  font-size: 12px;
  font-weight: 700;
  transition: .3s ease;
}

.career-primary-btn:hover {
  background: var(--gold-light);
  transform: translateY(-3px);
}

.career-text-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--cream) !important;
  font-size: 12px;
}

.career-text-link:hover {
  color: var(--gold-light) !important;
}

.career-hero-mark {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Playfair Display', serif;
  font-size: 490px;
  line-height: 1;
  color: var(--gold);
  pointer-events: none;
}

.career-hero-bottom {
  position: absolute;
  bottom: 28px;
  left: 10%;
  right: 10%;
  display: flex;
  justify-content: space-between;
  color: #B79E96;
  font-size: 9px;
  letter-spacing: 2px;
}

.career-intro {
  padding: 115px 12%;
  display: grid;
  grid-template-columns: .7fr 1.3fr;
  gap: 60px;
}

.career-intro-label div {
  width: 45px;
  height: 1px;
  background: var(--gold);
  margin-top: 20px;
}

.career-intro-content h2,
.career-section-heading h2,
.career-apply-info h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(37px, 4.5vw, 57px);
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 28px;
  letter-spacing: -1px;
}

.career-intro-content h2 span,
.career-section-heading h2 span {
  color: var(--wine-soft);
  font-style: italic;
}

.career-intro-content p {
  max-width: 650px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.95;
  margin-bottom: 17px;
}

.career-culture {
  padding: 105px 10%;
  background: #EADCCD;
}

.career-section-heading {
  max-width: 760px;
}

.career-section-heading h2 {
  margin: 25px 0 18px;
}

.career-section-heading > p {
  max-width: 530px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.career-values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 65px;
}

.career-value-card {
  min-height: 220px;
  padding: 30px;
  background: rgba(255,255,255,.42);
  border: 1px solid rgba(81,35,45,.1);
  transition: .35s ease;
}

.career-value-card:hover {
  transform: translateY(-7px);
  background: var(--cream);
}

.career-value-card > span {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 2px;
}

.career-value-card h3 {
  margin: 32px 0 12px;
  font-family: 'Playfair Display', serif;
  font-size: 25px;
  font-weight: 500;
}

.career-value-card p {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.career-value-line {
  height: 1px;
  width: 35px;
  background: var(--gold);
  margin-top: 25px;
  transition: width .4s ease;
}

.career-value-card:hover .career-value-line {
  width: 80px;
}

.career-opportunities {
  padding: 115px 10%;
}

.career-opportunity-list {
  margin-top: 55px;
  border-top: 1px solid rgba(53,24,32,.18);
}

.career-opportunity-card {
  display: grid;
  grid-template-columns: 45px 55px 1fr 30px;
  gap: 24px;
  align-items: center;
  padding: 30px 15px;
  border-bottom: 1px solid rgba(53,24,32,.18);
  transition: .35s ease;
}

.career-opportunity-card:hover {
  background: rgba(255,255,255,.38);
  padding-left: 25px;
}

.career-op-number {
  color: var(--gold);
  font-size: 11px;
}

.career-op-icon {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(81,35,45,.2);
  display: grid;
  place-items: center;
  color: var(--wine-soft);
}

.career-op-content h3 {
  font-family: 'Playfair Display', serif;
  font-size: 23px;
  font-weight: 500;
  margin: 0 0 8px;
}

.career-op-content p {
  max-width: 600px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
}

.career-op-arrow {
  color: var(--gold);
  transition: transform .3s ease;
}

.career-opportunity-card:hover .career-op-arrow {
  transform: translate(4px, -4px);
}

.career-note {
  margin-top: 22px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.7;
}

.career-vision {
  background: var(--wine);
  color: var(--cream);
  padding: 110px 12%;
  position: relative;
  overflow: hidden;
}

.career-vision::after {
  content: 'G';
  position: absolute;
  right: 7%;
  bottom: -180px;
  font-family: 'Playfair Display', serif;
  font-size: 470px;
  color: rgba(255,255,255,.035);
  pointer-events: none;
}

.career-vision-content {
  max-width: 720px;
  position: relative;
  z-index: 1;
}

.career-vision-content > svg {
  color: var(--gold);
  margin: 35px 0 20px;
}

.career-vision-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(42px, 5.5vw, 69px);
  font-weight: 400;
  line-height: 1.15;
  margin: 0;
}

.career-vision-content h2 em,
.career-apply-info h2 em,
.career-final h2 em {
  color: var(--gold-light);
  font-weight: 400;
}

.career-vision-content p {
  max-width: 540px;
  margin-top: 25px;
  color: #D6C3B8;
  font-size: 14px;
  line-height: 1.9;
}

.career-apply {
  padding: 120px 10%;
  background: #EADCCD;
}

.career-apply-layout {
  display: grid;
  grid-template-columns: 1fr .9fr;
  gap: 90px;
  align-items: start;
}

.career-apply-info h2 {
  margin: 30px 0 20px;
}

.career-apply-info h2 em {
  color: var(--wine-soft);
}

.career-apply-info > p {
  max-width: 430px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.career-contact-item {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-top: 32px;
  color: var(--wine-soft);
}

.career-contact-item > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.career-contact-item small {
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 1.7px;
}

.career-contact-item a {
  font-size: 14px;
  font-weight: 600;
}

.career-contact-item a:hover {
  color: var(--gold);
}

.career-apply-info .career-resume-note {
  margin-top: 35px;
  font-size: 11px;
}

.career-form {
  padding: 38px;
  background: var(--cream);
  box-shadow: 0 18px 60px rgba(53,24,32,.07);
}

.career-form-heading h3 {
  font-family: 'Playfair Display', serif;
  font-size: 29px;
  font-weight: 500;
  margin: 0 0 8px;
}

.career-form-heading p {
  color: var(--muted);
  font-size: 12px;
  margin-bottom: 30px;
}

.career-form label {
  display: block;
  margin-bottom: 21px;
  color: var(--wine);
  font-size: 11px;
  font-weight: 700;
}

.career-form input,
.career-form select,
.career-form textarea {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 14px;
  background: transparent;
  border: 1px solid #DCCBC0;
  outline: none;
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  transition: border .25s ease;
}

.career-form input:focus,
.career-form select:focus,
.career-form textarea:focus {
  border-color: var(--gold);
}

.career-form textarea {
  resize: vertical;
}

.career-form input::placeholder,
.career-form textarea::placeholder {
  color: #A99A92;
}

.career-submit {
  width: 100%;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  background: var(--wine);
  color: var(--cream);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s ease;
}

.career-submit:hover {
  background: var(--wine-soft);
  transform: translateY(-2px);
}

.career-form-disclaimer {
  display: block;
  margin-top: 14px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

.career-final {
  padding: 105px 10%;
  text-align: center;
  background: var(--wine-deep);
  color: var(--cream);
}

.career-final > div {
  max-width: 750px;
  margin: auto;
}

.career-final span {
  justify-content: center;
}

.career-final h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(43px, 5.5vw, 69px);
  font-weight: 400;
  line-height: 1.17;
  margin: 28px 0 35px;
}

.career-final a {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 16px 23px;
  background: var(--gold);
  color: var(--wine-deep);
  font-size: 12px;
  font-weight: 700;
  transition: .3s ease;
}

.career-final a:hover {
  background: var(--gold-light);
  transform: translateY(-3px);
}

@media (max-width: 850px) {
  .career-hero {
    min-height: 620px;
    padding: 100px 7%;
  }

  .career-hero-mark {
    right: -5%;
    font-size: 350px;
  }

  .career-intro {
    padding: 85px 7%;
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .career-culture,
  .career-opportunities,
  .career-apply {
    padding: 85px 7%;
  }

  .career-apply-layout {
    grid-template-columns: 1fr;
    gap: 55px;
  }
}

@media (max-width: 600px) {
  .career-hero {
    min-height: 650px;
  }

  .career-hero h1 {
    font-size: 53px;
  }

  .career-hero-mark {
    top: 55%;
    right: -10%;
    font-size: 260px;
  }

  .career-hero-bottom {
    left: 7%;
    right: 7%;
    font-size: 7px;
    letter-spacing: 1px;
  }

  .career-hero-bottom span:last-child {
    text-align: right;
  }

  .career-hero-actions {
    gap: 20px;
  }

  .career-values-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 40px;
  }

  .career-value-card {
    min-height: 190px;
  }

  .career-opportunity-card {
    grid-template-columns: 25px 42px 1fr 20px;
    gap: 12px;
    padding: 25px 5px;
  }

  .career-op-icon {
    width: 40px;
    height: 40px;
  }

  .career-op-content h3 {
    font-size: 18px;
  }

  .career-op-content p {
    font-size: 11px;
  }

  .career-vision {
    padding: 85px 7%;
  }

  .career-form {
    padding: 25px 20px;
  }

  .career-final {
    padding: 85px 7%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .careers-page *,
  .careers-page *::before,
  .careers-page *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
`;
