
import { useState } from "react";

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const links = [
    { label: "The Group", href: "#group" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("connect@uplyftbusiness.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = "mailto:connect@uplyftbusiness.com";
    }
  };

  return (
    <>
      <style>{`
        .gg-footer {
          background: #24151a;
          color: #f6eee3;
          padding: 35px 7% 16px;
          font-family: "DM Sans", sans-serif;
        }

        .gg-footer-container {
          max-width: 1400px;
          margin: auto;
        }

        .gg-footer-main {
          display: grid;
          grid-template-columns: 1.4fr 0.7fr 1fr;
          gap: 45px;
          align-items: center;
          padding-bottom: 30px;
        }

        .gg-footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #f6eee3;
        }

        .gg-footer-symbol {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border: 1px solid #b98b60;
          color: #d8b58c;
          font-family: "Playfair Display", serif;
          font-size: 23px;
          transition: all 0.3s ease;
        }

        .gg-footer-brand:hover .gg-footer-symbol {
          background: #b98b60;
          color: #24151a;
        }

        .gg-footer-brand-name {
          font-family: "Playfair Display", serif;
          font-size: 19px;
          letter-spacing: 2px;
        }

        .gg-footer-description {
          max-width: 310px;
          margin: 13px 0 0;
          color: #b9a8a0;
          font-size: 11px;
          line-height: 1.7;
        }

        .gg-footer-heading {
          margin: 0 0 15px;
          color: #c9a77e;
          font-size: 9px;
          letter-spacing: 2.5px;
          font-weight: 600;
        }

        .gg-footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gg-footer-links a {
          width: fit-content;
          color: #d5c9c1;
          text-decoration: none;
          font-size: 11px;
          transition: color 0.3s ease;
        }

        .gg-footer-links a:hover {
          color: #d8b58c;
        }

        .gg-footer-email {
          display: inline-block;
          margin-top: 13px;
          color: #e3c39c;
          font-size: 11px;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .gg-footer-email:hover {
          color: white;
        }

        .gg-footer-copy {
          display: block;
          margin-top: 9px;
          padding: 7px 12px;
          background: transparent;
          border: 1px solid rgba(201, 167, 126, 0.4);
          color: #d8b58c;
          font-size: 8px;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .gg-footer-copy:hover {
          background: #c9a77e;
          color: #24151a;
        }

        .gg-footer-divider {
          height: 1px;
          background: rgba(201, 167, 126, 0.25);
        }

        .gg-footer-bottom {
          padding-top: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          color: #99867e;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .gg-footer-top {
          color: #d8b58c;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .gg-footer-top:hover {
          color: white;
        }

        @media (max-width: 700px) {
          .gg-footer {
            padding: 30px 6% 15px;
          }

          .gg-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 27px 20px;
          }

          .gg-footer-brand-column {
            grid-column: 1 / -1;
          }

          .gg-footer-bottom {
            flex-wrap: wrap;
            line-height: 1.7;
          }
        }

        @media (max-width: 420px) {
          .gg-footer-main {
            grid-template-columns: 1fr 1fr;
          }

          .gg-footer-brand-name {
            font-size: 17px;
          }

          .gg-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gg-footer * {
            transition: none !important;
          }
        }
      `}</style>

      <footer className="gg-footer" id="footer">
        <div className="gg-footer-container">

          <div className="gg-footer-main">

            <div className="gg-footer-brand-column">
              <a href="#home" className="gg-footer-brand">
                <span className="gg-footer-symbol">G.</span>
                <span className="gg-footer-brand-name">
                  GHUGE GROUP
                </span>
              </a>

              <p className="gg-footer-description">
                Independent businesses. Shared vision.
                Building what comes next.
              </p>
            </div>

            <div>
              <h4 className="gg-footer-heading">EXPLORE</h4>
              <div className="gg-footer-links">
                {links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="gg-footer-heading">CONNECT</h4>

              <div className="gg-footer-links">
                <a href="#contact">Business Enquiries</a>
                <a href="#portfolio">Our Ventures</a>
              </div>

              <a
                href="mailto:connect@uplyftbusiness.com"
                className="gg-footer-email"
              >
                connect@uplyftbusiness.com
              </a>

              <button className="gg-footer-copy" onClick={copyEmail}>
                {emailCopied ? "COPIED ✓" : "COPY EMAIL ↗"}
              </button>
            </div>

          </div>

          <div className="gg-footer-divider" />

          <div className="gg-footer-bottom">
            <span>
              © {new Date().getFullYear()} GHUGE GROUP. ALL RIGHTS RESERVED.
            </span>

            <span>INDEPENDENT VENTURES · ONE VISION</span>

            <a href="#home" className="gg-footer-top">
              BACK TO TOP ↑
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
