import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDown,
  Building2,
  Globe,
  ShoppingBag,
  Dumbbell,
  Target,
  Layers3,
  Compass,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const businessesData = {
  "laxmi-gas": {
    number: "01",
    symbol: "L",
    name: "Laxmi Gas",
    category: "GAS EQUIPMENT & WHOLESALE",
    status: "OPERATING",
    tagline: "Essential products. Everyday needs.",
    description:
      "Laxmi Gas is a retail and wholesale business focused on gas-related equipment, gas stoves and essential accessories. The business serves customers looking for dependable products for household and commercial requirements.",
    about:
      "With a focus on essential gas equipment and appliances, Laxmi Gas operates across retail and wholesale channels. Its product range is intended to serve individual customers as well as businesses requiring gas-related products and equipment.",
    highlights: [
      {
        icon: ShoppingBag,
        title: "Retail",
        text: "Gas stoves, equipment and accessories for individual customers.",
      },
      {
        icon: Building2,
        title: "Wholesale",
        text: "Gas-related products and equipment for bulk purchasing requirements.",
      },
      {
        icon: Layers3,
        title: "Product Range",
        text: "Essential gas appliances, equipment and related accessories.",
      },
    ],
    focus: [
      "Gas stoves and appliances",
      "Gas-related equipment",
      "Household accessories",
      "Retail and wholesale supply",
    ],
    closing: "Serving everyday needs through essential products.",
  },

  uplyftbusiness: {
    number: "02",
    symbol: "U",
    name: "UpLyftBusiness",
    category: "DIGITAL SOLUTIONS & TECHNOLOGY",
    status: "OPERATING",
    tagline: "Everything you need to go digital.",
    description:
      "UpLyftBusiness is a digital solutions and technology venture helping businesses establish, strengthen and grow their digital presence.",
    about:
      "From website development and digital marketing to branding and creative solutions, UpLyftBusiness works towards helping businesses make the most of digital opportunities. Its focus is on building useful digital experiences and supporting business growth through technology.",
    highlights: [
      {
        icon: Globe,
        title: "Web Development",
        text: "Website design, development and digital experiences for businesses.",
      },
      {
        icon: Target,
        title: "Digital Marketing",
        text: "SEO, content and digital growth strategies.",
      },
      {
        icon: Layers3,
        title: "Branding & Creative",
        text: "Brand identity, creative design and social media solutions.",
      },
    ],
    focus: [
      "Website design and development",
      "Digital marketing and SEO",
      "Social media strategy and management",
      "Performance advertising",
      "Creative and branding",
      "Growth and business strategy",
    ],
    website: "https://www.uplyftbusiness.com",
    closing: "Helping businesses move forward in a digital world.",
  },

  "sports-academy": {
    number: "03",
    symbol: "S",
    name: "Sports Academy",
    category: "SPORTS & RECREATION",
    status: "COMING SOON",
    tagline: "A space to play. A place to grow.",
    description:
      "An upcoming sports initiative envisioned as a place where people can learn, train, practise and enjoy different sporting activities.",
    about:
      "The proposed Sports Academy is envisioned as a sports and recreational facility bringing together activities such as badminton, skating and other sports. The aim is to create a space that encourages participation, skill development, fitness and active recreation.",
    highlights: [
      {
        icon: Dumbbell,
        title: "Badminton",
        text: "A planned space for badminton practice, play and training.",
      },
      {
        icon: Compass,
        title: "Skating",
        text: "A proposed area for skating practice and skill development.",
      },
      {
        icon: Target,
        title: "More Sports",
        text: "An initiative designed to explore additional sporting activities.",
      },
    ],
    focus: [
      "Badminton",
      "Skating",
      "Sports training",
      "Practice and recreation",
    ],
    closing: "Creating opportunities through sport and activity.",
  },
};

function DetailReveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function BusinessDetails() {
  const { businessId } = useParams();
  const business = businessesData[businessId];

  if (!business) {
    return (
      <>
        <style>{styles}</style>
        <main className="business-detail-page not-found">
          <span className="detail-kicker">GHUGE GROUP</span>
          <h1>Business not found.</h1>
          <p>The business profile you are looking for is unavailable.</p>
          <Link to="/businesses" className="detail-back">
            <ArrowLeft size={17} />
            BACK TO BUSINESSES
          </Link>
        </main>
      </>
    );
  }

  const isUpcoming = business.status === "COMING SOON";

  return (
    <>
      <style>{styles}</style>

      <main className="business-detail-page">
        {/* HERO */}
        <section className="detail-hero">
          <div className="detail-hero-grid" />

          <div className="detail-hero-inner">
            <motion.div
              className="detail-hero-copy"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14 } },
              }}
            >
              <motion.div
                className="detail-breadcrumb"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link to="/businesses">OUR BUSINESSES</Link>
                <span>/</span>
                <span>{business.name.toUpperCase()}</span>
              </motion.div>

              <motion.div
                className="detail-eyebrow"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span />
                GHUGE GROUP PORTFOLIO — {business.number}
              </motion.div>

              <motion.div
                className={`detail-status ${
                  isUpcoming ? "detail-upcoming" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span />
                {business.status}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
                }}
              >
                {business.name}
                <br />
                <em>{business.tagline}</em>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {business.description}
              </motion.p>

              <motion.a
                href="#business-information"
                className="detail-explore"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                EXPLORE THIS BUSINESS
                <ArrowDown size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              className="detail-hero-visual"
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease }}
            >
              <div className="detail-ring ring-one" />
              <div className="detail-ring ring-two" />
              <div className="detail-ring ring-three" />

              <div className="detail-emblem">
                <span>{business.symbol}</span>
                <small>{business.category}</small>
              </div>

              <span className="detail-orbit-number">
                {business.number} / 03
              </span>
            </motion.div>
          </div>

          <div className="detail-hero-footer">
            <span>GHUGE GROUP</span>
            <span>{business.category}</span>
            <span>{business.status}</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="detail-about" id="business-information">
          <DetailReveal>
            <span className="detail-kicker">01 / ABOUT THE BUSINESS</span>
            <h2>
              Understanding
              <br />
              <em>what we do.</em>
            </h2>
          </DetailReveal>

          <DetailReveal className="detail-about-copy">
            <p>{business.about}</p>

            <div className="detail-about-note">
              <span />
              {business.closing}
            </div>
          </DetailReveal>
        </section>

        {/* HIGHLIGHTS */}
        <section className="detail-highlights">
          <div className="detail-section-heading">
            <DetailReveal>
              <span className="detail-kicker">02 / WHAT WE FOCUS ON</span>
              <h2>Areas of focus.</h2>
            </DetailReveal>
          </div>

          <div className="detail-highlight-grid">
            {business.highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="detail-highlight-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease }}
                  whileHover={{ y: -6 }}
                >
                  <div className="detail-highlight-icon">
                    <Icon size={23} />
                  </div>

                  <span className="detail-highlight-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* BUSINESS AREAS */}
        <section className="detail-focus">
          <DetailReveal className="detail-focus-heading">
            <span className="detail-kicker">03 / OUR DIRECTION</span>
            <h2>
              What defines
              <br />
              <em>this venture.</em>
            </h2>
          </DetailReveal>

          <div className="detail-focus-list">
            {business.focus.map((item, index) => (
              <motion.div
                className="detail-focus-item"
                key={item}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease }}
              >
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <ArrowUpRight size={18} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* WEBSITE LINK — UPLYFT ONLY */}
        {business.website && (
          <section className="detail-website">
            <DetailReveal>
              <span className="detail-kicker">EXPLORE OUR DIGITAL VENTURE</span>
              <h2>
                Discover
                <br />
                <em>UpLyftBusiness.</em>
              </h2>
              <p>
                Visit the official UpLyftBusiness website to explore its
                services and digital solutions.
              </p>
              <a
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-website-link"
              >
                VISIT UPLYFTBUSINESS
                <ArrowUpRight size={18} />
              </a>
            </DetailReveal>
          </section>
        )}

        {/* STATUS / COMING SOON */}
        {isUpcoming && (
          <section className="detail-coming">
            <DetailReveal>
              <span className="detail-kicker">A FUTURE GHUGE GROUP INITIATIVE</span>
              <h2>
                Something exciting
                <br />
                is <em>on the way.</em>
              </h2>
              <p>
                The Sports Academy is an upcoming initiative. More information
                about its facilities, activities and launch will be shared as
                the project develops.
              </p>
              <span className="coming-label">
                <span />
                COMING SOON
              </span>
            </DetailReveal>
          </section>
        )}

        {/* FOOTER CTA */}
        <section className="detail-cta">
          <DetailReveal>
            <span className="detail-kicker">GHUGE GROUP</span>
            <h2>
              Let's build
              <br />
              <em>what comes next.</em>
            </h2>
            <p>
              Interested in this business, a partnership or an opportunity to
              work together? We'd be happy to hear from you.
            </p>

            <Link to="/contact" className="detail-contact-link">
              LET'S CONNECT
              <ArrowUpRight size={18} />
            </Link>
          </DetailReveal>

          <Link to="/businesses" className="detail-back-bottom">
            <ArrowLeft size={16} />
            BACK TO ALL BUSINESSES
          </Link>
        </section>
      </main>
    </>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

.business-detail-page {
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
  background: var(--cream);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}
.business-detail-page * { box-sizing: border-box; }
.business-detail-page a { text-decoration: none; color: inherit; }

.detail-hero {
  min-height: 700px;
  background: var(--wine);
  color: var(--cream);
  padding: 115px 8% 30px;
  position: relative;
  overflow: hidden;
}
.detail-hero-grid {
  position: absolute;
  inset: 0;
  opacity: .12;
  background-image: linear-gradient(rgba(244,232,218,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(244,232,218,.13) 1px, transparent 1px);
  background-size: 85px 85px;
  mask-image: linear-gradient(to right, transparent, black);
}
.detail-hero-inner {
  max-width: 1300px;
  margin: auto;
  min-height: 520px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  position: relative;
  z-index: 1;
}
.detail-hero-copy { padding: 20px 0 45px; }
.detail-breadcrumb {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 9px;
  letter-spacing: 1.5px;
  color: rgba(244,232,218,.55);
  margin-bottom: 45px;
}
.detail-breadcrumb a { color: var(--gold-light); }
.detail-breadcrumb a:hover { color: white; }
.detail-eyebrow, .detail-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--gold);
  font-size: 10px;
  letter-spacing: 2.3px;
  font-weight: 700;
}
.detail-eyebrow > span { width: 25px; height: 1px; background: var(--gold); }
.detail-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  color: rgba(244,232,218,.75);
  font-size: 8px;
  letter-spacing: 1.6px;
}
.detail-status > span, .coming-label > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #A9B78A;
}
.detail-upcoming > span { background: var(--gold); }
.detail-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(55px, 6.7vw, 88px);
  line-height: 1.04;
  font-weight: 400;
  letter-spacing: -3px;
  margin: 25px 0;
}
.detail-hero h1 em {
  color: var(--gold-light);
  font-size: .56em;
  font-weight: 400;
  letter-spacing: -1px;
}
.detail-hero-copy > p {
  max-width: 510px;
  color: rgba(244,232,218,.72);
  font-size: 13px;
  line-height: 2;
}
.detail-explore {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  border-bottom: 1px solid var(--gold);
  padding: 13px 0;
  margin-top: 25px;
  font-size: 9px;
  letter-spacing: 1.7px;
  font-weight: 700;
  transition: gap .3s ease;
}
.detail-explore:hover { gap: 28px; }

.detail-hero-visual {
  width: 100%;
  max-width: 490px;
  height: 450px;
  justify-self: end;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.detail-ring {
  position: absolute;
  border: 1px solid rgba(199,164,123,.24);
  border-radius: 50%;
}
.ring-one { width: 220px; height: 220px; }
.ring-two { width: 340px; height: 340px; border-style: dashed; animation: detailRotate 45s linear infinite; }
.ring-three { width: 440px; height: 440px; border-color: rgba(199,164,123,.12); }
@keyframes detailRotate { to { transform: rotate(360deg); } }
.detail-emblem {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  background: radial-gradient(circle, #51232D, #351820 70%);
  box-shadow: 0 0 75px rgba(199,164,123,.12);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
}
.detail-emblem > span {
  font-family: 'Playfair Display', serif;
  font-size: 100px;
  color: var(--gold-light);
  line-height: 1;
}
.detail-emblem small {
  max-width: 130px;
  text-align: center;
  color: var(--cream);
  font-size: 7px;
  letter-spacing: 1.4px;
  margin-top: 8px;
}
.detail-orbit-number {
  position: absolute;
  bottom: 8%;
  right: 5%;
  color: var(--gold-light);
  font-size: 9px;
  letter-spacing: 2px;
}
.detail-hero-footer {
  max-width: 1300px;
  margin: 20px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(244,232,218,.18);
  display: flex;
  justify-content: space-between;
  gap: 15px;
  color: rgba(244,232,218,.5);
  font-size: 9px;
  letter-spacing: 1.7px;
  position: relative;
  z-index: 1;
}

.detail-about {
  max-width: 1300px;
  margin: auto;
  padding: 125px 8%;
  display: grid;
  grid-template-columns: 1fr .85fr;
  gap: 100px;
  align-items: end;
}
.detail-kicker { color: var(--wine-soft); }
.detail-about h2, .detail-focus h2, .detail-website h2, .detail-coming h2, .detail-cta h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(45px, 5.4vw, 68px);
  line-height: 1.12;
  font-weight: 400;
  letter-spacing: -2px;
  margin: 25px 0 0;
}
.detail-about h2 em, .detail-focus h2 em, .detail-website h2 em, .detail-coming h2 em, .detail-cta h2 em {
  color: var(--wine-soft);
}
.detail-about-copy > p {
  color: var(--muted);
  font-size: 14px;
  line-height: 2.1;
  margin: 0;
}
.detail-about-note {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 30px;
  color: var(--wine);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.7;
}
.detail-about-note span { width: 30px; height: 1px; background: var(--gold); flex-shrink: 0; }

.detail-highlights {
  background: #EDE0D3;
  padding: 105px 8% 120px;
}
.detail-section-heading { max-width: 1300px; margin: auto auto 45px; }
.detail-section-heading h2 {
  font-family: 'Playfair Display', serif;
  font-size: 54px;
  font-weight: 400;
  margin: 18px 0 0;
  letter-spacing: -2px;
}
.detail-highlight-grid {
  max-width: 1300px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.detail-highlight-card {
  min-height: 270px;
  background: var(--wine);
  color: var(--cream);
  padding: 30px;
  position: relative;
  overflow: hidden;
}
.detail-highlight-icon {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(199,164,123,.6);
  color: var(--gold-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail-highlight-number {
  position: absolute;
  top: 28px;
  right: 28px;
  color: rgba(228,196,156,.65);
  font-family: 'Playfair Display', serif;
  font-size: 19px;
}
.detail-highlight-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 25px;
  font-weight: 400;
  margin: 35px 0 10px;
}
.detail-highlight-card p {
  font-size: 12px;
  line-height: 1.9;
  color: rgba(244,232,218,.7);
  margin: 0;
}

.detail-focus {
  max-width: 1500px;
  margin: auto;
  padding: 125px 8%;
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 100px;
}
.detail-focus-heading { align-self: start; }
.detail-focus-list { border-top: 1px solid rgba(81,35,45,.2); }
.detail-focus-item {
  display: grid;
  grid-template-columns: 40px 1fr 20px;
  align-items: center;
  gap: 15px;
  padding: 23px 0;
  border-bottom: 1px solid rgba(81,35,45,.2);
}
.detail-focus-item > span { color: var(--gold); font-size: 10px; letter-spacing: 1px; }
.detail-focus-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: 19px;
  font-weight: 400;
  color: var(--wine);
  margin: 0;
}
.detail-focus-item svg { color: var(--wine-soft); }

.detail-website {
  background: #EDE0D3;
  padding: 100px 8%;
}
.detail-website > div {
  max-width: 1300px;
  margin: auto;
}
.detail-website p, .detail-coming p, .detail-cta p {
  max-width: 520px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
  margin-top: 22px;
}
.detail-website-link, .detail-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 13px 0;
  margin-top: 20px;
  border-bottom: 1px solid var(--gold);
  color: var(--wine);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.7px;
  transition: gap .3s ease;
}
.detail-website-link:hover, .detail-contact-link:hover { gap: 28px; }

.detail-coming {
  padding: 100px 8%;
  background: #E4D2C2;
}
.detail-coming > div { max-width: 1300px; margin: auto; }
.coming-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
  color: var(--wine-soft);
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 700;
}
.coming-label > span { background: var(--gold); }

.detail-cta {
  background: var(--wine-deep);
  color: var(--cream);
  padding: 110px 8% 35px;
}
.detail-cta > div { max-width: 1300px; margin: auto; }
.detail-cta .detail-kicker { color: var(--gold); }
.detail-cta h2 em { color: var(--gold-light); }
.detail-cta p { color: rgba(244,232,218,.7); }
.detail-contact-link { color: var(--gold-light); }
.detail-back-bottom {
  max-width: 1300px;
  margin: 90px auto 0;
  padding-top: 22px;
  border-top: 1px solid rgba(244,232,218,.2);
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(244,232,218,.65) !important;
  font-size: 9px;
  letter-spacing: 1.5px;
}
.detail-back-bottom:hover { color: var(--gold-light) !important; }

.not-found {
  min-height: 75vh;
  padding: 150px 8%;
  text-align: center;
}
.not-found .detail-kicker { justify-content: center; }
.not-found h1 { font-family: 'Playfair Display', serif; font-size: 55px; font-weight: 400; }
.not-found p { color: var(--muted); }
.detail-back {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 25px;
  color: var(--wine-soft) !important;
  font-size: 10px;
  letter-spacing: 1.5px;
}

@media (max-width: 900px) {
  .detail-hero { padding: 105px 6% 30px; }
  .detail-hero-inner { grid-template-columns: 1fr; }
  .detail-hero-visual { justify-self: center; height: 400px; }
  .detail-about { padding: 100px 7%; gap: 45px; }
  .detail-focus { padding: 100px 7%; gap: 45px; }
  .detail-highlights { padding: 90px 6%; }
}
@media (max-width: 650px) {
  .detail-hero { padding: 95px 7% 25px; }
  .detail-breadcrumb { margin-bottom: 35px; font-size: 8px; }
  .detail-hero h1 { font-size: 57px; letter-spacing: -2px; }
  .detail-hero h1 em { font-size: .58em; }
  .detail-hero-copy > p { font-size: 12px; }
  .detail-hero-visual { height: 330px; transform: scale(.85); margin: -10px 0; }
  .ring-one { width: 190px; height: 190px; }
  .ring-two { width: 285px; height: 285px; }
  .ring-three { width: 350px; height: 350px; }
  .detail-emblem { width: 145px; height: 145px; }
  .detail-emblem > span { font-size: 80px; }
  .detail-hero-footer { flex-wrap: wrap; font-size: 8px; }
  .detail-about { padding: 85px 7%; grid-template-columns: 1fr; gap: 30px; }
  .detail-about h2, .detail-focus h2, .detail-website h2, .detail-coming h2, .detail-cta h2 { font-size: 48px; }
  .detail-highlights { padding: 80px 7%; }
  .detail-section-heading h2 { font-size: 44px; }
  .detail-highlight-grid { grid-template-columns: 1fr; }
  .detail-highlight-card { min-height: 230px; }
  .detail-focus { padding: 85px 7%; grid-template-columns: 1fr; gap: 35px; }
  .detail-focus-item { grid-template-columns: 30px 1fr 20px; gap: 10px; }
  .detail-focus-item h3 { font-size: 17px; }
  .detail-website, .detail-coming { padding: 85px 7%; }
  .detail-cta { padding: 85px 7% 30px; }
  .detail-back-bottom { margin-top: 65px; }
}
@media (prefers-reduced-motion: reduce) {
  .business-detail-page *, .business-detail-page *::before, .business-detail-page *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;