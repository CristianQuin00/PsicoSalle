import React from 'react';
import '../css/prueba.css';
import Piedepagina from '../componentes/piedepagina.jsx';
import Navbar from '../componentes/navbar.jsx';
import Boton from '../componentes/boton.jsx';

function Psico3() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Psicologia Organizacional</h1>
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
              src="https://chile.unir.net/wp-content/uploads/sites/34/2023/01/psico3.jpg"
              alt="Psicología Organizacional"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="info-text" style={{ flex: 1 }}>
           
            <p>
            En nuestra área de Psicología Organizacional, trabajamos con empresas e instituciones para potenciar el desarrollo del talento humano, mejorar el clima laboral y optimizar el rendimiento de los equipos
            </p>
          </div>
        </div>
        </section>
        <div className="info-text2">
          <div className="info-title">¿Que queremos lograr?</div>
          <p>Nuestro enfoque está centrado en el bienestar de las personas dentro del entorno de trabajo, promoviendo una cultura organizacional saludable, colaborativa y productiva. A través de intervenciones personalizadas, ayudamos a las organizaciones a alcanzar sus objetivos con equipos más motivados, comprometidos y emocionalmente equilibrados.</p>

         
        </div>
        <section className="Imagen"
          style={{
          backgroundImage: `url('https://www.psicoactiva.com/wp-content/uploads/2022/04/psicologia-organizacional.jpg')`,
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
          
        }}>
         <div className="info-text3">
          <div className="info-title">Impulsa el bienestar en tu empresa</div>
          <p>Agenda una cita con nuestros especialistas en psicología organizacional y descubre cómo mejorar el clima laboral, potenciar el rendimiento de tu equipo y construir un entorno de trabajo más saludable y productivo.</p>
          <Boton/>
        </div>
      </section>
      <Navbar />
      <Piedepagina />
    </div>

  );
}

export default Psico3;