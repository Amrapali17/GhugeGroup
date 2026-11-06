import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Building2,
  Sparkles,
} from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "ghugegroup@gmail.com",
    href: "mailto:ghugegroup@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "8408820707",
    href: "tel:8408820707",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "India",
  },
];

const enquiryTypes = [
  "General Enquiry",
  "Business Opportunity",
  "Partnership",
  "Collaboration",
  "Media & Press",
  "Other",
];

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(
      `${form.subject} - ${form.name}`
    );

    const emailBody = encodeURIComponent(
      `Hello GHUGE GROUP,\n\n${form.message}\n\nRegards,\n${form.name}\nEmail: ${form.email}`
    );

    window.location.href =
      `mailto:ghugegroup@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <main className="gg-contact">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-glow" />

        <div className="contact-hero-pattern">
          <div className="contact-pattern-circle circle-one" />
          <div className="contact-pattern-circle circle-two" />
          <div className="contact-pattern-line" />
        </div>

        <div className="contact-hero-layout">
          <motion.div
            className="contact-hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
          >
            <motion.div className="contact-eyebrow" variants={reveal}>
              <span />
              GHUGE GROUP / CONTACT
            </motion.div>

            <motion.h1 variants={reveal}>
              Let's start a
              <br />
              <em>conversation.</em>
            </motion.h1>

            <motion.p variants={reveal}>
              Every meaningful opportunity begins with a conversation.
              Whether it's a business enquiry, partnership or a new idea,
              we're ready to listen.
            </motion.p>

            <motion.a
              href="#contact-main"
              className="contact-hero-link"
              variants={reveal}
            >
              Get in touch
              <ArrowDown size={16} />
            </motion.a>
          </motion.div>

          {/* CONTACT INFORMATION PANEL */}
          <motion.div
            className="contact-hero-side"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            <div className="contact-hero-side-top">
              <span>WE'RE HERE TO CONNECT</span>
              <ArrowUpRight size={18} />
            </div>

            <div className="contact-hero-side-main">
              <div className="contact-side-symbol">
                <Building2 size={25} strokeWidth={1.3} />
              </div>

              <h3>
                One group.
                <br />
                <em>Many possibilities.</em>
              </h3>

              <p>
                Connect with GHUGE GROUP for enquiries,
                partnerships and business opportunities.
              </p>
            </div>

            <div className="contact-hero-side-links">
              <a href="mailto:ghugegroup@gmail.com">
                <Mail size={16} />
                <span>ghugegroup@gmail.com</span>
                <ArrowUpRight size={15} />
              </a>

              <a href="tel:8408820707">
                <Phone size={16} />
                <span>8408820707</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="contact-hero-side-footer">
              <span>INDIA</span>
              <span>BUILDING WITH PURPOSE</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-hero-watermark"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.045, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          G
        </motion.div>

        <div className="contact-hero-bottom">
          <span>GHUGE GROUP</span>
          <span>
            OPEN TO POSSIBILITIES <ArrowUpRight size={12} />
          </span>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="contact-main" id="contact-main">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <span className="contact-section-label">
            01 / CONNECT WITH US
          </span>

          <h2>
            Every connection
            <br />
            begins <em>somewhere.</em>
          </h2>

          <p>
            From business enquiries to partnerships and new ideas,
            we're always open to meaningful conversations.
          </p>

          <div className="contact-direct-note">
            <div className="contact-note-icon">
              <MessageCircle size={20} />
            </div>

            <div>
              <strong>Let's talk possibilities.</strong>
              <span>
                Reach out and tell us what you have in mind.
              </span>
            </div>
          </div>

          <div className="contact-info-list">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="contact-info-item"
                  key={item.label}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                >
                  <div className="contact-info-icon">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <div className="contact-info-copy">
                    <span>{item.label}</span>

                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <strong>{item.value}</strong>
                    )}
                  </div>

                  {item.href && (
                    <a
                      href={item.href}
                      className="contact-info-arrow"
                      aria-label={`Open ${item.label}`}
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ENQUIRY FORM */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="contact-form-top">
            <div>
              <span className="contact-section-label">
                02 / SEND AN ENQUIRY
              </span>

              <h3>Tell us about it.</h3>
            </div>

            <div className="contact-form-mark">
              <Sparkles size={22} />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                Your Name

                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Email Address

                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </label>
            </div>

            <label>
              Enquiry Type

              <select
                value={form.subject}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value,
                  })
                }
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Your Message

              <textarea
                rows="5"
                placeholder="Share your thoughts, questions or ideas..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Send Enquiry

              <span>
                <ArrowUpRight size={18} />
              </span>
            </button>

            <small>
              Your default email application will open with your
              enquiry prepared. Review and send it to reach us.
            </small>
          </form>
        </motion.div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="contact-bottom">
        <motion.div
          className="contact-bottom-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <div className="contact-bottom-icon">
            <Building2 size={23} strokeWidth={1.4} />
          </div>

          <div className="contact-bottom-copy">
            <span>GHUGE GROUP</span>

            <h2>
              Built on connections.
              <em> Driven by possibilities.</em>
            </h2>
          </div>

          <a href="mailto:ghugegroup@gmail.com">
            Email Us
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </section>

      <style>{styles}</style>
    </main>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.gg-contact {
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

.gg-contact * {
  box-sizing: border-box;
}

.gg-contact a {
  color: inherit;
  text-decoration: none;
}

/* HERO */

.contact-hero {
  min-height: 610px;
  padding: 100px 10% 85px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--orange);
  color: var(--cream);
}

.contact-hero-layout {
  width: 100%;
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.15fr .75fr;
  align-items: center;
  gap: 75px;
  position: relative;
  z-index: 3;
}

.contact-hero-content {
  max-width: 700px;
  position: relative;
  z-index: 2;
}

.contact-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.8px;
}

.contact-eyebrow span {
  width: 31px;
  height: 1px;
  background: var(--cream);
}

.contact-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(54px, 6.2vw, 79px);
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -2.5px;
  margin: 34px 0 22px;
}

.contact-hero h1 em {
  color: #FFF0E3;
  font-weight: 400;
}

.contact-hero-content > p {
  max-width: 430px;
  color: #FFF0E3;
  font-size: 14px;
  line-height: 1.9;
}

.contact-hero-link {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  margin-top: 28px;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255,249,243,.7);
  font-size: 12px;
  font-weight: 600;
  transition: gap .3s ease;
}

.contact-hero-link:hover {
  gap: 21px;
}

/* RIGHT CONTACT PANEL */

.contact-hero-side {
  position: relative;
  z-index: 3;
  padding: 28px;
  background: rgba(255,249,243,.11);
  border: 1px solid rgba(255,249,243,.27);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.contact-hero-side-top,
.contact-hero-side-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255,249,243,.8);
  font-size: 9px;
  letter-spacing: 1.7px;
}

.contact-hero-side-main {
  padding: 42px 0 35px;
}

.contact-side-symbol {
  width: 49px;
  height: 49px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,249,243,.4);
  margin-bottom: 23px;
}

.contact-hero-side-main h3 {
  font-family: 'Playfair Display', serif;
  font-size: 35px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 0 15px;
}

.contact-hero-side-main h3 em {
  color: #FFF0E3;
  font-weight: 400;
}

.contact-hero-side-main p {
  color: rgba(255,249,243,.83);
  font-size: 12px;
  line-height: 1.8;
  max-width: 310px;
}

.contact-hero-side-links {
  border-top: 1px solid rgba(255,249,243,.25);
}

.contact-hero-side-links a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255,249,243,.2);
  font-size: 11px;
  transition: opacity .3s ease;
}

.contact-hero-side-links a:hover {
  opacity: .7;
}

.contact-hero-side-links a span {
  flex: 1;
  overflow-wrap: anywhere;
}

.contact-hero-side-footer {
  padding-top: 20px;
  font-size: 8px;
}

.contact-hero-glow {
  position: absolute;
  z-index: -1;
  width: 650px;
  height: 650px;
  right: -170px;
  top: -220px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255,224,196,.35),
    transparent 68%
  );
}

.contact-hero-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.contact-pattern-circle {
  position: absolute;
  border: 1px solid rgba(255,249,243,.15);
  border-radius: 50%;
}

.circle-one {
  width: 490px;
  height: 490px;
  right: 5%;
  top: 5%;
}

.circle-two {
  width: 340px;
  height: 340px;
  right: 12%;
  top: 19%;
}

.contact-pattern-line {
  position: absolute;
  width: 1px;
  height: 100%;
  right: 29%;
  top: 0;
  background: rgba(255,249,243,.1);
}

.contact-hero-watermark {
  position: absolute;
  z-index: 0;
  right: 7%;
  top: 35%;
  font-family: 'Playfair Display', serif;
  font-size: 390px;
  line-height: 1;
  color: var(--cream);
  pointer-events: none;
}

.contact-hero-bottom {
  position: absolute;
  bottom: 24px;
  left: 10%;
  right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255,249,243,.8);
  font-size: 9px;
  letter-spacing: 2px;
}

.contact-hero-bottom span:last-child {
  display: flex;
  align-items: center;
  gap: 7px;
}

/* MAIN CONTACT */

.contact-main {
  max-width: 1440px;
  margin: auto;
  padding: 105px 10%;
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 85px;
  align-items: start;
}

.contact-section-label {
  color: var(--orange);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.2px;
}

.contact-intro h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(39px, 4.5vw, 57px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -1px;
  margin: 26px 0 19px;
}

.contact-intro h2 em {
  color: var(--orange);
  font-weight: 400;
}

.contact-intro > p {
  max-width: 410px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.contact-direct-note {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 32px 0 36px;
  padding: 17px;
  background: #FFF1E6;
  border-left: 2px solid var(--orange);
}

.contact-note-icon {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: var(--orange);
  background: var(--cream);
}

.contact-direct-note div:last-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact-direct-note strong {
  font-size: 12px;
  font-weight: 700;
}

.contact-direct-note span {
  color: var(--muted);
  font-size: 10px;
  line-height: 1.5;
}

.contact-info-list {
  border-top: 1px solid rgba(120,51,17,.15);
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 3px;
  border-bottom: 1px solid rgba(120,51,17,.15);
}

.contact-info-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: var(--orange);
  border: 1px solid rgba(233,106,36,.25);
}

.contact-info-copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
}

.contact-info-copy span {
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 1.8px;
}

.contact-info-copy a,
.contact-info-copy strong {
  font-size: 13px;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.contact-info-copy a:hover {
  color: var(--orange);
}

.contact-info-arrow {
  color: var(--orange);
  transition: transform .3s ease;
}

.contact-info-arrow:hover {
  transform: translate(4px, -4px);
}

/* FORM */

.contact-form-wrap {
  padding: 37px;
  background: #FFF4E9;
  border: 1px solid rgba(233,106,36,.13);
  box-shadow: 0 18px 55px rgba(120,51,17,.055);
}

.contact-form-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.contact-form-top h3 {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 400;
  margin: 11px 0 0;
}

.contact-form-mark {
  width: 47px;
  height: 47px;
  display: grid;
  place-items: center;
  color: var(--orange);
  border: 1px solid rgba(233,106,36,.25);
  border-radius: 50%;
}

.contact-form-wrap form {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.contact-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;
}

.contact-form-wrap label {
  display: block;
  color: var(--ink);
  font-size: 11px;
  font-weight: 700;
}

.contact-form-wrap input,
.contact-form-wrap select,
.contact-form-wrap textarea {
  width: 100%;
  display: block;
  margin-top: 9px;
  padding: 14px;
  border: 1px solid #EBD4C1;
  border-radius: 0;
  outline: none;
  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  transition: border .25s ease, box-shadow .25s ease;
}

.contact-form-wrap input:focus,
.contact-form-wrap select:focus,
.contact-form-wrap textarea:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(233,106,36,.08);
}

.contact-form-wrap textarea {
  resize: vertical;
  min-height: 125px;
}

.contact-form-wrap input::placeholder,
.contact-form-wrap textarea::placeholder {
  color: #B99A86;
}

.contact-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px 18px;
  border: none;
  background: var(--orange);
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background .3s ease, transform .3s ease;
}

.contact-submit span {
  display: grid;
  place-items: center;
  transition: transform .3s ease;
}

.contact-submit:hover {
  background: var(--orange-dark);
  transform: translateY(-2px);
}

.contact-submit:hover span {
  transform: translate(3px, -3px);
}

.contact-form-wrap small {
  display: block;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* BOTTOM STRIP */

.contact-bottom {
  padding: 35px 10%;
  background: var(--peach);
}

.contact-bottom-inner {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-bottom-icon {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  color: var(--orange);
  border: 1px solid rgba(233,106,36,.3);
}

.contact-bottom-copy {
  flex: 1;
}

.contact-bottom-copy > span {
  color: var(--orange);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.contact-bottom-copy h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(19px, 2.4vw, 27px);
  font-weight: 400;
  margin: 7px 0 0;
}

.contact-bottom-copy h2 em {
  color: var(--orange);
  font-weight: 400;
}

.contact-bottom-inner > a {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 19px;
  background: var(--orange);
  color: white;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  transition: .3s ease;
}

.contact-bottom-inner > a:hover {
  background: var(--orange-dark);
  transform: translateY(-2px);
}

/* RESPONSIVE */

@media (max-width: 950px) {
  .contact-hero {
    padding: 90px 7%;
  }

  .contact-hero-layout {
    grid-template-columns: 1fr .85fr;
    gap: 35px;
  }

  .contact-hero h1 {
    font-size: clamp(48px, 6vw, 65px);
  }

  .contact-hero-side {
    padding: 23px;
  }

  .contact-hero-side-main h3 {
    font-size: 29px;
  }

  .contact-main {
    grid-template-columns: 1fr;
    gap: 55px;
    padding: 85px 8%;
  }

  .contact-intro {
    max-width: 650px;
  }

  .contact-intro > p {
    max-width: 520px;
  }

  .contact-info-list {
    max-width: 650px;
  }
}

@media (max-width: 650px) {
  .contact-hero {
    min-height: auto;
    padding: 85px 7% 75px;
  }

  .contact-hero-layout {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .contact-hero h1 {
    font-size: clamp(45px, 11vw, 59px);
    letter-spacing: -1.5px;
  }

  .contact-hero-content > p {
    font-size: 13px;
  }

  .contact-hero-side {
    max-width: 100%;
    padding: 23px;
  }

  .contact-hero-side-main {
    padding: 30px 0 25px;
  }

  .contact-hero-watermark {
    right: -12%;
    top: 12%;
    font-size: 260px;
  }

  .contact-pattern-circle.circle-one {
    width: 300px;
    height: 300px;
    right: -20%;
    top: 5%;
  }

  .contact-pattern-circle.circle-two {
    width: 210px;
    height: 210px;
    right: -5%;
    top: 12%;
  }

  .contact-hero-bottom {
    left: 7%;
    right: 7%;
    bottom: 18px;
    font-size: 7px;
    letter-spacing: 1px;
  }

  .contact-main {
    padding: 72px 7%;
    gap: 42px;
  }

  .contact-intro h2 {
    font-size: 43px;
  }

  .contact-form-wrap {
    padding: 25px 19px;
  }

  .contact-form-top h3 {
    font-size: 27px;
  }

  .contact-form-row {
    grid-template-columns: 1fr;
    gap: 19px;
  }

  .contact-bottom {
    padding: 27px 7%;
  }

  .contact-bottom-inner {
    flex-wrap: wrap;
    gap: 15px;
  }

  .contact-bottom-copy {
    min-width: calc(100% - 70px);
  }

  .contact-bottom-inner > a {
    margin-left: 67px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gg-contact *,
  .gg-contact *::before,
  .gg-contact *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
`;