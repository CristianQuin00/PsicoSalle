import React from 'react';
import '../css/prueba.css';
import Piedepagina from '../componentes/piedepagina.jsx';
import Navbar from '../componentes/navbar.jsx';

function Tests() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Psicologia Clinica</h1>
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
              src="https://www.emagister.com/blog/wp-content/uploads/2022/02/GettyImages-1308910334.jpg"
              alt="Psicología Clínica"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="info-text" style={{ flex: 1 }}>
           
            <p>
              En nuestra empresa, entendemos que la salud mental es tan importante como la salud física. Por eso, ofrecemos servicios especializados de Psicología Clínica, orientados a brindar apoyo emocional, diagnóstico, prevención y tratamiento de diversas problemáticas psicológicas que afectan el bienestar de las personas.
            </p>
          </div>
        </div>
        </section>
        <div className="info-text2">
          <div className="info-title">¿Que es?</div>
          <p>La psicología clínica es una rama de la psicología que se encarga del estudio, diagnóstico, tratamiento y prevención de los trastornos mentales, emocionales y del comportamiento</p>

          <p>Su objetivo principal es mejorar el bienestar psicológico de las personas, ayudándolas a comprender y resolver los conflictos internos o externos que afectan su vida cotidiana.</p>
        </div>
        <section className="Imagen"
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
          
        }}>
         <div className="info-text3">
          <div className="info-title">Un espacio seguro para tu bienestar</div>
          <p>Ofrecemos atención presencial y en línea, adaptándonos a las necesidades de cada persona. Nuestro objetivo es crear un espacio seguro, de escucha y acompañamiento, donde cada individuo pueda trabajar en su bienestar emocional y construir una vida más plena.</p>

          
        </div>
      </section>
      <Navbar />
      <Piedepagina />
    </div>

  );
}

export default Tests;