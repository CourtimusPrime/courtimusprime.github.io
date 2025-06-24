// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <h2 className="logo">
        <Link to="/"><span>Court</span>.</Link>
      </h2>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <i className="fas fa-bars"></i>
      </button>

      <nav className={`navigation ${menuOpen ? 'active' : ''}`} id="navMenu">
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>

      <Link to="/contact" className="btn-talk">Let's Talk</Link>
    </header>
  );
}