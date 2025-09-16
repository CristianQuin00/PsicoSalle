import './contacto.css';
import React from 'react';
import Navbar from '../componentes/navbar';
import Piedepagina from '../componentes/piedepagina';
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Compass } from "lucide-react";

export default function Contacto() {
  return (
    <div className="team-container">
      <Navbar />

      <div className="container" style={{ paddingTop: '1rem' }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://maps.google.com/?q=Calle%20123%20%2345-67%20Bogota%20Colombia"
          className="primary-btn"
        >
          <Compass className="contact-icon" />
          Abrir en Google Maps
        </a>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="team-section container"
      >
        <div className="section-header">
          <h2 className="section-title">
            <MapPin className="contact-icon" />
            Ubicación en el mapa
          </h2>
        </div>

        <iframe
          title="Mapa de ubicación"
          className="map-iframe"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-75.6912%2C6.1442%2C-75.4712%2C6.3442&layer=mapnik&marker=6.2442%2C-75.5812"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div>
          <h2 className="section-title">Contáctanos</h2>
          <ul className="contact-list">
            <li>
              <Mail className="contact-icon" />
              Email: psicologiasalle37@gmail.com
            </li>
            <li>
              <Phone className="contact-icon" />
              Teléfono: +57 302 607 3218
            </li>
            <li>
              <span className="contact-icon" role="img" aria-label="Instagram">📷</span>
              Instagram: @Psicologiasalle37
            </li>
            <li>
              <span className="contact-icon" role="img" aria-label="Facebook">📘</span>
              Facebook: @Psicologiasalle37
            </li>
          </ul>
        </div>
      </motion.section>

      <Piedepagina />
    </div>
  );
}