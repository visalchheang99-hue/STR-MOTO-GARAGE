import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function NavLink({ to, children, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Link
      to={to}
      className="nav-link-item"
      style={{
        color: hovered ? "#ff0000" : "#ffffff",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: "600",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        display: "inline-block",
        padding: "6px 0",
        transition: "color 0.3s ease",
        animation: visible ? `dropIn 0.6s cubic-bezier(0.22,1,0.36,1) both` : "none",
        opacity: visible ? 1 : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}

function Navbar() {
  const [animated, setAnimated] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside tap/click
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@400;600&display=swap');

        @keyframes revEngine {
          0%   { transform: translateX(-60px) rotate(-8deg) scale(0.7); opacity: 0; }
          40%  { transform: translateX(10px) rotate(3deg) scale(1.08); opacity: 1; }
          65%  { transform: translateX(-6px) rotate(-2deg) scale(0.97); }
          82%  { transform: translateX(4px) rotate(1deg) scale(1.02); }
          100% { transform: translateX(0) rotate(0deg) scale(1); }
        }

        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 8px #ff000066; }
          50%       { text-shadow: 0 0 22px #ff0000cc, 0 0 40px #ff000044; }
        }

        @keyframes dropIn {
          0%   { transform: translateY(-20px) scale(0.8); opacity: 0; }
          60%  { transform: translateY(5px) scale(1.05); opacity: 1; }
          80%  { transform: translateY(-3px) scale(0.98); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* ─ Wrapper ── */
        .navbar-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.2s ease;
        }

        .navbar-wrapper.scrolled {
          box-shadow: 0 4px 30px rgba(232, 3, 3, 0.15);
        }

        /* ── Main nav ── */
        .main-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 38px;
          height: 74px;
          background: linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #0d0d0d 100%);
          border-bottom: 1px solid #2a2a2a;
          transition: background 0.2s ease, height 0.2s ease, border-bottom-color 0.2s ease, backdrop-filter 0.2s ease;
          font-family: 'Inter', sans-serif;
        }

        .main-navbar.scrolled {
          height: 60px;
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #ff000033;
        }

        /* ── Logo ── */
        .logo-group {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 14px #ff000055;
          flex-shrink: 0;
          border: 2px solid #ff000033;
          background: transparent;
        }

        .logo-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-main {
          font-family: 'Rajdhani', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 8px;
          text-transform: uppercase;
          animation: fadeIn 0.7s ease both;
          position: relative;
          overflow: hidden;
        }

        .logo-main span { color: #ef0606; }

        .logo-sub {
          font-size: 9px;
          letter-spacing: 4px;
          color: #e7e6e6;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* ── Desktop nav links ── */
        .nav-links {
          display: flex;
          list-style: none;
          gap: 36px;
          align-items: center;
        }

        .nav-link-item {
          position: relative;
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #ff0000, #ff4444);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link-item:hover::after { width: 100%; }

        /* ── CTA button ── */
        .nav-cta {
          background: linear-gradient(135deg, #ff0000, #cc0000);
          color: #fff !important;
          padding: 9px 22px !important;
          border-radius: 6px;
          font-size: 13px !important;
          letter-spacing: 1px !important;
          font-weight: 700 !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 0 14px #17161644;
          text-decoration: none;
          display: inline-block;
          -webkit-tap-highlight-color: transparent;
        }

        .nav-cta:hover {
          background: linear-gradient(135deg, #ff2222, #ff0000) !important;
          box-shadow: 0 0 24px #ff000088 !important;
          transform: translateY(-2px) !important;
        }

        .divider {
          width: 1px;
          height: 24px;
          background: #333;
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          padding: 10px;          /* larger tap target */
          margin-right: -10px;
          -webkit-tap-highlight-color: transparent;
          border: none;
          background: none;
          border-radius: 6px;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile overlay backdrop ── */
        .mobile-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 999;
          animation: fadeSlideIn 0.25s ease both;
        }

        .mobile-backdrop.open { display: block; }

        /* ── Mobile menu panel ── */
        .mobile-menu {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(80vw, 300px);
          background: #111;
          border-left: 1px solid #ff000033;
          z-index: 1001;
          padding: 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          animation: slideDown 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }

        .mobile-menu.open { display: flex; }

        /* Close button inside the panel */
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #1f1f1f;
        }

        .mobile-menu-header .menu-logo {
          font-family: 'Rajdhani', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 4px;
          color: #fff;
          text-transform: uppercase;
        }

        .mobile-menu-header .menu-logo span { color: #ef0606; }

        .mobile-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: #888;
          font-size: 22px;
          line-height: 1;
          -webkit-tap-highlight-color: transparent;
          transition: color 0.2s;
        }

        .mobile-close-btn:hover { color: #ff0000; }

        /* Nav items in panel */
        .mobile-nav-items {
          display: flex;
          flex-direction: column;
          padding: 12px 0;
          flex: 1;
        }

        .mobile-menu a {
          color: #ccc;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 16px 24px;
          border-bottom: 1px solid #1a1a1a;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
          -webkit-tap-highlight-color: transparent;
          min-height: 56px; /* comfortable touch target */
        }

        .mobile-menu a:hover,
        .mobile-menu a:active {
          color: #ff0000;
          background: #1a1a1a;
        }

        .mobile-menu a:last-child { border-bottom: none; }

        /* CTA inside mobile menu */
        .mobile-menu .mobile-cta {
          margin: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff0000, #cc0000);
          color: #fff !important;
          border-radius: 8px;
          font-size: 14px !important;
          letter-spacing: 1px !important;
          font-weight: 700 !important;
          padding: 14px 24px !important;
          box-shadow: 0 0 18px #ff000055;
          min-height: 52px;
          border-bottom: none !important;
          background-color: transparent !important;
        }

        .mobile-menu .mobile-cta:hover,
        .mobile-menu .mobile-cta:active {
          background: linear-gradient(135deg, #ff2222, #ff0000) !important;
          background-color: transparent !important;
          color: #fff !important;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .main-navbar { padding: 0 20px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .top-bar { font-size: 10px; letter-spacing: 1px; padding: 5px 12px; }
          .logo-main { font-size: 18px; letter-spacing: 5px; }
          .logo-sub { font-size: 8px; letter-spacing: 3px; }
          .logo-icon { width: 40px; height: 40px; }
        }

        @media (max-width: 380px) {
          .logo-sub { display: none; }
          .logo-main { font-size: 16px; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Backdrop for mobile menu */}
      <div
        className={`mobile-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>

        {/* Main Navbar */}
        <nav className={`main-navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">

          {/* Logo */}
          <div
            className="logo-group"
            style={{
              animation: animated
                ? "revEngine 0.8s cubic-bezier(0.22,1,0.36,1) both, glowPulse 3s ease-in-out 1s infinite"
                : "none",
              opacity: animated ? 1 : 0,
            }}
          >
            <div className="logo-icon">
              <img src="STRlogo.jpg" alt="STR Moto Garage logo" />
            </div>
            <div className="logo-text-group">
              <div className="logo-main">
                <span>STR</span> MOTO
              </div>
              <div className="logo-sub">Garage & Workshop</div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links" role="list">
            <li><NavLink to="/" delay={900}>Home</NavLink></li>
            <li><NavLink to="/services" delay={1000}>Services</NavLink></li>
            <li><NavLink to="/about" delay={1100}>About</NavLink></li>
            <li><NavLink to="/news" delay={1150}>News</NavLink></li>
            <li><NavLink to="/location" delay={1200}>Get Location</NavLink></li>
            <div className="divider" aria-hidden="true" />
            <li>
              <a
                href="https://t.me/STR_Moto_Garage"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
                style={{
                  animation: animated ? "dropIn 0.6s 1.3s cubic-bezier(0.22,1,0.36,1) both" : "none",
                  opacity: animated ? 1 : 0,
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      {/* Mobile slide-in panel */}
      <div
        ref={menuRef}
        id="mobile-nav"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <div className="mobile-menu-header">
          <span className="menu-logo"><span>STR</span> MOTO</span>
          <button
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav-items">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
          <Link to="/location" onClick={() => setMenuOpen(false)}>Get Location</Link>
          <a
            href="https://t.me/STR_Moto_Garage"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Contact us on Telegram
          </a>
        </nav>
      </div>

      {/* Spacer so page content doesn't hide under fixed navbar */}
      <div style={{ height: scrolled ? "60px" : "74px", background: "#f0f0f0", transition: "height 0.2s ease" }} />
    </>
  );
}

export default Navbar;