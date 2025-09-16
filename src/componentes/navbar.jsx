import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="Logo.png" className="logo-icon" alt="Logo" />
        <Link to="/" className="navbar-link">
          <span>PsicologiaSalle</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/conferencias" className="navbar-link">Conferencias</Link>
        <Link to="/servicios" className="navbar-link">Servicios</Link>
        <Link to="/equipo" className="navbar-link">Equipo</Link>
        <Link to="/contacto" className="navbar-link">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;
