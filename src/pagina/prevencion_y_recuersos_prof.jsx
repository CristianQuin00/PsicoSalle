import React from 'react';
import '../css/prueba.css';
import Piedepagina from '../componentes/piedepagina.jsx';
import Navbar from '../componentes/navbar.jsx';
import Boton from '../componentes/boton.jsx';

function PyR() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Prevención y Recursos Profesionales</h1>
          </div>
        </div>
      </div>

      <section className="Inf">
        <div
          className="info-image-content"
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
        >
          <div className="info-image" style={{ flex: 1 }}>
            <img
              src="https://oposicionespolicianacional.com/wp-content/uploads/2023/10/prevencion-riesgos-laborales-organizacion-recursos-actividades-preventivas.jpg"
              alt="Prevención y Recursos Profesionales"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="info-text" style={{ flex: 1 }}>
            <p>
              Nuestro programa de Prevención y Recursos Profesionales tiene como objetivo brindar información confiable y herramientas prácticas que permitan detectar, abordar y prevenir problemáticas de salud mental desde una perspectiva profesional y basada en la evidencia.
            </p>
          </div>
        </div>
      </section>

      <div className="info-text2">
        <div className="info-title">¿Por qué es importante?</div>
        <p>
          La prevención en salud mental permite actuar antes de que los problemas se agraven. Contar con recursos profesionales adecuados mejora el pronóstico de quienes atraviesan dificultades emocionales o psicológicas, y fortalece la capacidad de respuesta en contextos personales, escolares o laborales.
        </p>
      </div>

      <div className="info-text2">
        <div className="info-title">¿A quién está dirigido?</div>
        <p>
          Este espacio está diseñado para profesionales de la salud, educadores, padres, empresas y cualquier persona interesada en promover el bienestar mental y emocional en su entorno. Ofrecemos:
          <li>Herramientas para la detección temprana de trastornos emocionales.</li>
          <li>Orientación sobre cuándo y cómo derivar a especialistas.</li>
          <li>Recursos para promover hábitos saludables y resiliencia.</li>
        </p>
      </div>

      <section
        className="Imagen"
        style={{
          backgroundImage: `url('https://www.psonrie.com/files/noticias/que-es-la-psicologia-clinica-grande.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div className="info-text3">
          <div className="info-title">Apoyo profesional a tu alcance</div>
          <p>
            Contamos con un equipo multidisciplinario de psicólogos, psiquiatras y trabajadores sociales listos para acompañarte en tu proceso. Ya sea de manera presencial o en línea, ofrecemos orientación, diagnóstico y seguimiento personalizado para mejorar tu calidad de vida.
          </p>
          <Boton />
        </div>
      </section>

      <Navbar />
      <Piedepagina />
    </div>
  );
}

export default PyR;
