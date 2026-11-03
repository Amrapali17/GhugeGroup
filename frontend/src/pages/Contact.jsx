
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Handshake,
  Building2,
  MessageCircle,
  Send,
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
    href: null,
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

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
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
      <section className="gg-contact-hero">
        <div className="contact-hero-orb" />

        <motion.div
          className="contact-hero-inner"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.span className="contact-eyebrow" variants={fadeUp}>
            <span className="contact-eyebrow-line" />
            LET'S CONNECT
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Every great journey
            <br />
            begins with a <em>conversation.</em>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Have an idea, an opportunity or simply want to know
            more about GHUGE GROUP? We'd be glad to hear from you.
          </motion.p>

          <motion.a href="#contact-details" variants={fadeUp}>
            Start a conversation
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>

        <motion.div
          className="contact-hero-letter"
          initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
          animate={{ opacity: 0.07, rotate: 0, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          G
        </motion.div>

        <div className="contact-hero-index">
          <span>GHUGE GROUP</span>
          <span>OPEN TO POSSIBILITIES</span>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details" id="contact-details">
        <motion.div
          className="contact-details-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span>01 / GET IN TOUCH</span>
          <h2>
            Let's make
            <br />
            <em>something happen.</em>
          </h2>
          <p>
            Whether you're exploring a business opportunity,
            considering a partnership or have a question,
            our door is open.
          </p>
        </motion.div>

        <div className="contact-info-list">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="contact-info-item"
                key={item.label}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.13, duration: 0.65 }}
              >
                <div className="contact-info-icon">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div className="contact-info-text">
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
                    aria-label={`Contact via ${item.label}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="contact-enquiry">
        <div className="contact-enquiry-layout">

          <motion.div
            className="contact-enquiry-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span>02 / YOUR MESSAGE</span>

            <h2>
              Tell us
              <br />
              what's <em>on your mind.</em>
            </h2>

            <p>
              Every meaningful connection starts somewhere.
              Share your thoughts with us and let's explore
              what we can create together.
            </p>

            <div className="contact-enquiry-decoration">
              <MessageCircle size={27} strokeWidth={1.2} />
              <span>We look forward to hearing from you.</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-form-heading">
              <span>GET IN TOUCH</span>
              <h3>Send us a message.</h3>
            </div>

            <label>
              Full Name
              <input
                type="text"
                placeholder="Your name"
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
                placeholder="Your email address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </label>

            <label>
              Subject
              <select
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
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
                placeholder="Tell us a little about your enquiry..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </label>

            <button type="submit" className="contact-submit">
              Send Message
              <Send size={16} />
            </button>

            <small>
              Your email application will open with your message
              prepared. Review it and press Send to contact us.
            </small>
          </motion.form>
        </div>
      </section>

      {/* BUSINESS ENQUIRIES */}
      <section className="contact-business">
        <motion.div
          className="contact-business-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="contact-business-icon">
            <Handshake size={30} strokeWidth={1.3} />
          </div>

          <span>03 / BEYOND A CONVERSATION</span>

          <h2>
            Good connections
            <br />
            create <em>new possibilities.</em>
          </h2>

          <p>
            We welcome conversations around business opportunities,
            strategic partnerships, collaborations and ideas that
            align with the vision of GHUGE GROUP.
          </p>

          <a href="mailto:ghugegroup@gmail.com?subject=Business%20Enquiry">
            Discuss an Opportunity
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </section>

      {/* CLOSING */}
      <section className="contact-closing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Building2 size={25} strokeWidth={1.2} />
          <span>GHUGE GROUP / LOOKING AHEAD</span>

          <h2>
            Let's build
            <br />
            <em>something meaningful.</em>
          </h2>

          <a href="mailto:ghugegroup@gmail.com">
            Start a Conversation
            <ArrowUpRight size={18} />
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
  --wine: #351820;
  --wine-deep: #241419;
  --wine-mid: #51232D;
  --wine-soft: #713844;
  --cream: #F4E8DA;
  --cream-dark: #E9D8C9;
  --gold: #C7A47B;
  --gold-light: #E4C49C;
  --ink: #291B1E;
  --muted: #897775;
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--ink);
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

.gg-contact-hero {
  min-height: 650px;
  background: var(--wine-deep);
  color: var(--cream);
  display: flex;
  align-items: center;
  padding: 110px 11%;
  position: relative;
  overflow: hidden;
}

.contact-hero-inner {
  max-width: 850px;
  position: relative;
  z-index: 2;
}

.contact-eyebrow {
  display: flex;
  align-items: center;
  gap: 13px;
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
}

.contact-eyebrow-line {
  width: 35px;
  height: 1px;
  background: var(--gold);
}

.contact-hero-inner h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(48px, 6.7vw, 83px);
  line-height: 1.13;
  font-weight: 400;
  letter-spacing: -2px;
  margin: 35px 0 23px;
}

.contact-hero-inner h1 em {
  color: var(--gold-light);
  font-weight: 400;
}

.contact-hero-inner > p {
  color: #CDBBB4;
  max-width: 510px;
  font-size: 14px;
  line-height: 1.9;
}

.contact-hero-inner > a {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-top: 35px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--gold);
  color: var(--gold-light);
  font-size: 12px;
  transition: .3s ease;
}

.contact-hero-inner > a:hover {
  gap: 23px;
}

.contact-hero-orb {
  position: absolute;
  right: -100px;
  top: -180px;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(199,164,123,.16), transparent 68%);
  animation: contactOrb 9s ease-in-out infinite alternate;
}

@keyframes contactOrb {
  from { transform: scale(.9); opacity: .5; }
  to { transform: scale(1.2); opacity: 1; }
}

.contact-hero-letter {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Playfair Display', serif;
  font-size: 470px;
  line-height: 1;
  color: var(--gold);
  pointer-events: none;
}

.contact-hero-index {
  position: absolute;
  bottom: 27px;
  left: 11%;
  right: 11%;
  display: flex;
  justify-content: space-between;
  color: #B7A09A;
  font-size: 9px;
  letter-spacing: 2px;
}

/* CONTACT DETAILS */

.contact-details {
  padding: 115px 12%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.contact-details-heading > span,
.contact-enquiry-left > span,
.contact-business-inner > span,
.contact-closing > div > span {
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

.contact-details-heading h2,
.contact-enquiry-left h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(39px, 4.5vw, 58px);
  line-height: 1.2;
  font-weight: 400;
  margin: 27px 0 20px;
}

.contact-details-heading h2 em,
.contact-enquiry-left h2 em {
  color: var(--wine-soft);
  font-weight: 400;
}

.contact-details-heading p,
.contact-enquiry-left > p {
  max-width: 420px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.contact-info-list {
  border-top: 1px solid rgba(53,24,32,.17);
}

.contact-info-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 25px 5px;
  border-bottom: 1px solid rgba(53,24,32,.17);
}

.contact-info-icon {
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  color: var(--wine-soft);
  border: 1px solid rgba(81,35,45,.2);
}

.contact-info-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
}

.contact-info-text span {
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 2px;
}

.contact-info-text a,
.contact-info-text strong {
  color: var(--wine);
  font-size: 13px;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.contact-info-text a:hover {
  color: var(--wine-soft);
}

.contact-info-arrow {
  color: var(--gold);
  transition: .3s ease;
}

.contact-info-arrow:hover {
  transform: translate(4px, -4px);
}

/* ENQUIRY */

.contact-enquiry {
  padding: 110px 10%;
  background: #EADCCD;
}

.contact-enquiry-layout {
  display: grid;
  grid-template-columns: .9fr 1fr;
  gap: 90px;
  align-items: start;
}

.contact-enquiry-left {
  padding-top: 35px;
}

.contact-enquiry-left > p {
  max-width: 400px;
}

.contact-enquiry-decoration {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 55px;
  color: var(--wine-soft);
}

.contact-enquiry-decoration span {
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  font-style: italic;
}

.contact-form {
  padding: 40px;
  background: var(--cream);
  box-shadow: 0 20px 65px rgba(53,24,32,.07);
}

.contact-form-heading {
  margin-bottom: 30px;
}

.contact-form-heading span {
  color: var(--gold);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
}

.contact-form-heading h3 {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 400;
  margin: 12px 0 0;
}

.contact-form label {
  display: block;
  margin-bottom: 22px;
  color: var(--wine);
  font-size: 11px;
  font-weight: 700;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  display: block;
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

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: var(--gold);
}

.contact-form textarea {
  resize: vertical;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #A99A92;
}

.contact-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 16px;
  border: none;
  background: var(--wine);
  color: var(--cream);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: .3s ease;
}

.contact-submit:hover {
  background: var(--wine-soft);
  transform: translateY(-3px);
}

.contact-form > small {
  display: block;
  margin-top: 15px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.7;
}

/* BUSINESS ENQUIRIES */

.contact-business {
  padding: 110px 10%;
  background: var(--cream);
  text-align: center;
}

.contact-business-inner {
  max-width: 750px;
  margin: auto;
}

.contact-business-icon {
  width: 65px;
  height: 65px;
  margin: 0 auto 25px;
  display: grid;
  place-items: center;
  color: var(--gold);
  border: 1px solid rgba(199,164,123,.6);
}

.contact-business-inner h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 5vw, 62px);
  font-weight: 400;
  line-height: 1.2;
  margin: 27px 0 20px;
}

.contact-business-inner h2 em {
  color: var(--wine-soft);
  font-weight: 400;
}

.contact-business-inner p {
  max-width: 570px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

.contact-business-inner > a {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-top: 30px;
  padding: 15px 22px;
  background: var(--wine);
  color: var(--cream);
  font-size: 11px;
  font-weight: 700;
  transition: .3s ease;
}

.contact-business-inner > a:hover {
  background: var(--wine-soft);
  transform: translateY(-3px);
}

/* CLOSING */

.contact-closing {
  padding: 100px 8%;
  background: var(--wine-deep);
  color: var(--cream);
  text-align: center;
}

.contact-closing > div {
  max-width: 750px;
  margin: auto;
}

.contact-closing > div > svg {
  color: var(--gold);
  margin-bottom: 20px;
}

.contact-closing h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(43px, 5.5vw, 69px);
  line-height: 1.18;
  font-weight: 400;
  margin: 28px 0 35px;
}

.contact-closing h2 em {
  color: var(--gold-light);
  font-weight: 400;
}

.contact-closing a {
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

.contact-closing a:hover {
  background: var(--gold-light);
  transform: translateY(-3px);
}

/* RESPONSIVE */

@media (max-width: 850px) {
  .gg-contact-hero {
    padding: 100px 7%;
    min-height: 600px;
  }

  .contact-hero-letter {
    right: -5%;
    font-size: 350px;
  }

  .contact-hero-index {
    left: 7%;
    right: 7%;
  }

  .contact-details {
    padding: 90px 7%;
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .contact-enquiry {
    padding: 90px 7%;
  }

  .contact-enquiry-layout {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .contact-enquiry-left {
    padding-top: 0;
  }
}

@media (max-width: 550px) {
  .gg-contact-hero {
    min-height: 590px;
  }

  .contact-hero-inner h1 {
    font-size: 47px;
  }

  .contact-hero-letter {
    font-size: 250px;
    right: -12%;
  }

  .contact-hero-index {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .contact-details,
  .contact-enquiry,
  .contact-business {
    padding: 75px 7%;
  }

  .contact-form {
    padding: 26px 20px;
  }

  .contact-info-item {
    gap: 12px;
  }

  .contact-info-text a,
  .contact-info-text strong {
    font-size: 12px;
  }

  .contact-closing {
    padding: 80px 7%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gg-contact *,
  .gg-contact *::before,
  .gg-contact *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
`;
