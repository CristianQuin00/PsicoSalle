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
        <div className="navbar-link nav-item dropdown">
          <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
            Servicios
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/infantil" className="dropdown-item">Infantil</Link></li>
            <li><Link to="/conferencias" className="dropdown-item">Conferencias</Link></li>
            <li><Link to="/servicios" className="dropdown-item">servicios</Link></li>
          </ul>
        </div>
        <Link to="/equipo" className="navbar-link">Equipo</Link>
        <Link to="/contacto" className="navbar-link">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;

