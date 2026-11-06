import { useState } from "react";
import { ArrowUpRight, ArrowUp, Mail, Copy, Check } from "lucide-react";

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const email = "ghugegroup@gmail.com";

  const links = [
    { label: "The Group", href: "#group" },
    { label: "Our Businesses", href: "#portfolio" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <style>{`
        .gg-footer {
          position: relative;
          overflow: hidden;
          background: #FFF9F3;
          color: #783311;
          padding: 76px 7% 22px;
          font-family: "DM Sans", sans-serif;
          border-top: 1px solid rgba(120, 51, 17, 0.10);
        }

        .gg-footer::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          right: -190px;
          top: -220px;
          border: 1px solid rgba(233, 106, 36, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .gg-footer-container {
          position: relative;
          max-width: 1400px;
          margin: auto;
        }

        .gg-footer-main {
          display: grid;
          grid-template-columns: 1.5fr 0.7fr 1fr;
          gap: 70px;
          padding-bottom: 65px;
        }

        .gg-footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          text-decoration: none;
          color: #783311;
        }

        .gg-footer-symbol {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border: 1px solid #E96A24;
          color: #C94B12;
          font-family: "Playfair Display", serif;
          font-size: 25px;
          transition: all 0.35s ease;
        }

        .gg-footer-brand:hover .gg-footer-symbol {
          background: #E96A24;
          color: #FFF9F3;
          transform: rotate(-5deg);
        }

        .gg-footer-brand-name {
          font-family: "Playfair Display", serif;
          font-size: 20px;
          letter-spacing: 2.5px;
          font-weight: 600;
        }

        .gg-footer-description {
          max-width: 340px;
          margin: 23px 0 0;
          color: #98684E;
          font-size: 13px;
          line-height: 1.9;
        }

        .gg-footer-brand-note {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 27px;
          color: #C94B12;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .gg-footer-brand-note::before {
          content: "";
          width: 25px;
          height: 1px;
          background: #E96A24;
        }

        .gg-footer-heading {
          margin: 7px 0 25px;
          color: #C94B12;
          font-size: 10px;
          letter-spacing: 2.5px;
          font-weight: 700;
        }

        .gg-footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .gg-footer-links a {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #783311;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .gg-footer-links a:hover {
          color: #E96A24;
          transform: translateX(5px);
        }

        .gg-footer-contact-text {
          color: #98684E;
          font-size: 12px;
          line-height: 1.8;
          margin: -7px 0 17px;
          max-width: 250px;
        }

        .gg-footer-email {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #783311;
          font-size: 13px;
          text-decoration: none;
          overflow-wrap: anywhere;
          transition: color 0.3s ease;
        }

        .gg-footer-email svg {
          color: #E96A24;
          flex-shrink: 0;
        }

        .gg-footer-email:hover {
          color: #E96A24;
        }

        .gg-footer-copy {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 19px;
          padding: 10px 14px;
          background: transparent;
          border: 1px solid rgba(201, 75, 18, 0.28);
          color: #C94B12;
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gg-footer-copy:hover {
          background: #E96A24;
          border-color: #E96A24;
          color: #FFF9F3;
        }

        .gg-footer-divider {
          height: 1px;
          background: rgba(120, 51, 17, 0.15);
        }

        .gg-footer-bottom {
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          color: #98684E;
          font-size: 9px;
          letter-spacing: 1.1px;
        }

        .gg-footer-bottom-center {
          color: #C94B12;
          font-weight: 600;
        }

        .gg-footer-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #783311;
          text-decoration: none;
          font-size: 9px;
          letter-spacing: 1.3px;
          transition: color 0.3s ease;
        }

        .gg-footer-top svg {
          transition: transform 0.3s ease;
        }

        .gg-footer-top:hover {
          color: #E96A24;
        }

        .gg-footer-top:hover svg {
          transform: translateY(-4px);
        }

        @media (max-width: 850px) {
          .gg-footer-main {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 45px 35px;
          }

          .gg-footer-brand-column {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .gg-footer {
            padding: 55px 6% 20px;
          }

          .gg-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 38px 20px;
            padding-bottom: 42px;
          }

          .gg-footer-brand-column {
            grid-column: 1 / -1;
          }

          .gg-footer-brand-name {
            font-size: 18px;
          }

          .gg-footer-description {
            font-size: 12px;
          }

          .gg-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;
            line-height: 1.7;
          }
        }

        @media (max-width: 370px) {
          .gg-footer-main {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gg-footer *,
          .gg-footer *::before {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      <footer className="gg-footer" id="footer">
        <div className="gg-footer-container">

          <div className="gg-footer-main">

            {/* BRAND */}
            <div className="gg-footer-brand-column">
              <a href="#home" className="gg-footer-brand">
                <span className="gg-footer-symbol">G.</span>
                <span className="gg-footer-brand-name">
                  GHUGE GROUP
                </span>
              </a>

              <p className="gg-footer-description">
                A growing group of independent ventures, united by a shared
                vision to build meaningful businesses and create lasting value.
              </p>

              <div className="gg-footer-brand-note">
                BUILDING WITH PURPOSE
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="gg-footer-heading">EXPLORE</h4>

              <div className="gg-footer-links">
                {links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="gg-footer-heading">GET IN TOUCH</h4>

              <p className="gg-footer-contact-text">
                Have a business enquiry or an opportunity to discuss?
                We'd be glad to hear from you.
              </p>

              <a
                href={`mailto:${email}`}
                className="gg-footer-email"
              >
                <Mail size={15} />
                {email}
              </a>

              <button
                className="gg-footer-copy"
                onClick={copyEmail}
              >
                {emailCopied ? (
                  <Check size={13} />
                ) : (
                  <Copy size={13} />
                )}

                {emailCopied ? "EMAIL COPIED" : "COPY EMAIL"}
              </button>
            </div>

          </div>

          <div className="gg-footer-divider" />

          {/* BOTTOM BAR */}
          <div className="gg-footer-bottom">
            <span>
              © {new Date().getFullYear()} GHUGE GROUP. ALL RIGHTS RESERVED.
            </span>

            <span className="gg-footer-bottom-center">
              INDEPENDENT VENTURES · ONE VISION
            </span>

            <a href="#home" className="gg-footer-top">
              BACK TO TOP
              <ArrowUp size={13} />
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;