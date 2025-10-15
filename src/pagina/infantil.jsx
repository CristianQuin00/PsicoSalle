import React from 'react';
import '../css/prueba.css';
import Piedepagina from '../componentes/piedepagina.jsx';
import Navbar from '../componentes/navbar.jsx';
import Boton from '../componentes/boton.jsx';

function Psico2() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Psicologia Infantil</h1>
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
              src="https://universidadeuropea.com/resources/media/images/funciones-psicologo-infantil-800x450.original.jpg"
              alt="Psicología Infantil"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="info-text" style={{ flex: 1 }}>
           
            <p>
             En nuestro servicio de psicología infantil, ofrecemos atención especializada para niños y niñas que enfrentan desafíos emocionales, conductuales o del desarrollo. Sabemos que la infancia es una etapa clave para construir bases sólidas en la salud mental
            </p>
          </div>
        </div>
        </section>
        <div className="info-text2">
          <div className="info-title">¿Como lo hacemos?</div>
          <p>Creamos un espacio seguro, de confianza y juego, donde los más pequeños pueden expresarse libremente, y donde los padres reciben orientación para acompañarlos de manera respetuosa y efectiva. Ya sea que se trate de dificultades escolares, problemas de conducta, ansiedad, miedos, duelos o cambios importantes en la vida familiar, nuestro equipo está comprometido con el cuidado integral del niño.</p>

         
        </div>
        <section className="Imagen"
          style={{
          backgroundImage: `url('https://www.caser.es/documents/473773/15931744/1683100285082_psicologia-infaltil.jpg')`,
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
          <div className="info-title">Su bienestar comienza con una cita</div>
          <p>Estamos listos para acompañarte en tu proceso. Agenda tu cita de forma fácil y rápida, ya sea presencial o en línea. Da el primer paso hacia una vida con mayor equilibrio y bienestar emocional.</p>
          <Boton/>
          
        </div>
      </section>
      <Navbar />
      <Piedepagina />
    </div>

  );
}

export default Psico2;