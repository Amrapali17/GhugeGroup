
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Businesses", path: "/businesses" },
    { name: "Leadership", path: "/leadership" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <>
      <style>{`
        .gg-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(249, 246, 239, 0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(104, 36, 56, 0.12);
          animation: ggNavReveal 0.8s ease both;
        }

        .gg-nav-inner {
          max-width: 1440px;
          height: 88px;
          margin: auto;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gg-brand {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .gg-brand-name {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #641f30;
        }

        .gg-brand-tagline {
          font-size: 9px;
          letter-spacing: 3px;
          color: #92766d;
        }

        .gg-nav-links {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .gg-nav-link {
          position: relative;
          color: #483a35;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.3px;
          text-decoration: none;
          text-transform: uppercase;
          padding: 10px 0;
          transition: color 0.3s ease;
        }

        .gg-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 1px;
          background: #782c40;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s ease;
        }

        .gg-nav-link:hover,
        .gg-nav-link.selected {
          color: #782c40;
        }

        .gg-nav-link:hover::after,
        .gg-nav-link.selected::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .gg-contact-btn {
          text-decoration: none;
          color: #fff8ee;
          background: #682438;
          padding: 15px 23px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          border: 1px solid #682438;
          transition: all 0.35s ease;
        }

        .gg-contact-btn span {
          display: inline-block;
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .gg-contact-btn:hover {
          background: transparent;
          color: #682438;
          transform: translateY(-3px);
        }

        .gg-contact-btn:hover span {
          transform: translate(4px, -4px);
        }

        .gg-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
        }

        .gg-menu-toggle span {
          display: block;
          width: 26px;
          height: 2px;
          margin: 6px;
          background: #682438;
          transition: all 0.3s ease;
        }

        .gg-menu-toggle.open span:first-child {
          transform: translateY(4px) rotate(45deg);
        }

        .gg-menu-toggle.open span:last-child {
          transform: translateY(-4px) rotate(-45deg);
        }

        @keyframes ggNavReveal {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .gg-nav-inner {
            height: 76px;
            padding: 0 5%;
          }

          .gg-brand-name {
            font-size: 21px;
          }

          .gg-menu-toggle {
            display: block;
            z-index: 1002;
          }

          .gg-nav-links {
            position: absolute;
            top: 76px;
            left: 0;
            width: 100%;
            padding: 30px 7% 40px;
            background: #f9f6ef;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
            border-bottom: 1px solid rgba(91, 27, 39, 0.15);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-15px);
            transition: all 0.35s ease;
          }

          .gg-nav-links.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .gg-nav-link {
            font-size: 12px;
          }

          .gg-contact-btn {
            margin-top: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gg-navbar,
          .gg-nav-link,
          .gg-contact-btn,
          .gg-menu-toggle span {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      <header className="gg-navbar">
        <div className="gg-nav-inner">

          <NavLink
            to="/"
            className="gg-brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="gg-brand-name">GHUGE GROUP</span>
            <span className="gg-brand-tagline">
              BUILDING WITH PURPOSE
            </span>
          </NavLink>

          <nav className={`gg-nav-links ${menuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `gg-nav-link ${isActive ? "selected" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="gg-contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              LET'S CONNECT <span>↗</span>
            </NavLink>
          </nav>

          <button
            className={`gg-menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

        </div>
      </header>
    </>
  );
}

export default Navbar;
