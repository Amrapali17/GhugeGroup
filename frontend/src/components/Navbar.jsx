import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Businesses", path: "/businesses" },
    { name: "Leadership", path: "/leadership" },
    { name: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .gg-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 249, 243, 0.94);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(233, 106, 36, 0.14);
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

        /* BRAND */

        .gg-brand {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex-shrink: 0;
          position: relative;
          z-index: 1002;
        }

        .gg-brand-name {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #C94B12;
          transition: color 0.3s ease;
        }

        .gg-brand:hover .gg-brand-name {
          color: #E96A24;
        }

        .gg-brand-tagline {
          font-size: 9px;
          letter-spacing: 3px;
          color: #98684E;
          font-weight: 500;
        }

        /* DESKTOP NAVIGATION */

        .gg-nav-links {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .gg-nav-link {
          position: relative;
          color: #783311;
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
          background: #E96A24;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s ease;
        }

        .gg-nav-link:hover,
        .gg-nav-link.selected {
          color: #E96A24;
        }

        .gg-nav-link:hover::after,
        .gg-nav-link.selected::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* CONTACT BUTTON */

        .gg-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          color: #FFF9F3;
          background: #E96A24;
          padding: 15px 23px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          border: 1px solid #E96A24;
          transition: all 0.35s ease;
        }

        .gg-contact-btn svg {
          transition: transform 0.3s ease;
        }

        .gg-contact-btn:hover {
          background: transparent;
          color: #C94B12;
          transform: translateY(-2px);
        }

        .gg-contact-btn:hover svg {
          transform: translate(3px, -3px);
        }

        /* MOBILE MENU BUTTON */

        .gg-menu-toggle {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 1px solid rgba(233, 106, 36, 0.25);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          padding: 10px;
          position: relative;
          z-index: 1002;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .gg-menu-toggle:hover {
          background: #FCE6D5;
          border-color: #E96A24;
        }

        .gg-menu-toggle span {
          display: block;
          width: 21px;
          height: 1.5px;
          background: #C94B12;
          transition: transform 0.35s ease;
          transform-origin: center;
        }

        .gg-menu-toggle.open span:first-child {
          transform: translateY(3.75px) rotate(45deg);
        }

        .gg-menu-toggle.open span:last-child {
          transform: translateY(-3.75px) rotate(-45deg);
        }

        /* MOBILE OVERLAY */

        .gg-nav-overlay {
          display: none;
        }

        /* ANIMATION */

        @keyframes ggNavReveal {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TABLET AND MOBILE */

        @media (max-width: 900px) {
          .gg-nav-inner {
            height: 76px;
            padding: 0 5%;
          }

          .gg-brand-name {
            font-size: 22px;
          }

          .gg-menu-toggle {
            display: flex;
          }

          .gg-nav-overlay {
            display: block;
            position: fixed;
            inset: 76px 0 0;
            z-index: 999;
            background: rgba(65, 35, 20, 0.22);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }

          .gg-nav-overlay.active {
            opacity: 1;
            visibility: visible;
          }

          .gg-nav-links {
            position: absolute;
            top: 76px;
            left: 0;
            width: 100%;
            padding: 32px 7% 38px;
            background: #FFF9F3;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            border-bottom: 1px solid rgba(233, 106, 36, 0.18);
            box-shadow: 0 18px 35px rgba(80, 40, 15, 0.08);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-12px);
            transition:
              opacity 0.3s ease,
              visibility 0.3s ease,
              transform 0.3s ease;
            max-height: calc(100dvh - 76px);
            overflow-y: auto;
          }

          .gg-nav-links.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .gg-nav-link {
            width: 100%;
            padding: 16px 0;
            font-size: 12px;
            letter-spacing: 1.5px;
            border-bottom: 1px solid rgba(120, 51, 17, 0.09);
          }

          .gg-nav-link::after {
            display: none;
          }

          .gg-nav-link.selected {
            color: #E96A24;
            padding-left: 9px;
            border-left: 2px solid #E96A24;
          }

          .gg-contact-btn {
            width: fit-content;
            margin-top: 24px;
            padding: 15px 22px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {
          .gg-nav-inner {
            height: 70px;
            padding: 0 6%;
          }

          .gg-brand-name {
            font-size: 19px;
            letter-spacing: 1.7px;
          }

          .gg-brand-tagline {
            font-size: 8px;
            letter-spacing: 2.4px;
          }

          .gg-menu-toggle {
            width: 41px;
            height: 41px;
          }

          .gg-nav-overlay {
            inset: 70px 0 0;
          }

          .gg-nav-links {
            top: 70px;
            padding: 25px 7% 32px;
            max-height: calc(100dvh - 70px);
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .gg-navbar,
          .gg-nav-link,
          .gg-contact-btn,
          .gg-menu-toggle span,
          .gg-nav-links,
          .gg-nav-overlay {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <header className="gg-navbar">
        <div className="gg-nav-inner">

          {/* BRAND */}

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

          {/* NAVIGATION */}

          <nav
            id="gg-navigation"
            className={`gg-nav-links ${menuOpen ? "active" : ""}`}
          >
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
              LET'S CONNECT
              <ArrowUpRight size={14} />
            </NavLink>
          </nav>

          {/* MOBILE TOGGLE */}

          <button
            type="button"
            className={`gg-menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="gg-navigation"
          >
            <span />
            <span />
          </button>

        </div>

        {/* MOBILE OVERLAY */}

        <div
          className={`gg-nav-overlay ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      </header>
    </>
  );
}

export default Navbar;