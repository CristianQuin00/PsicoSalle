import React from 'react';
import '../css/prueba.css';
import Piedepagina from '../componentes/piedepagina.jsx';
import Navbar from '../componentes/navbar.jsx';
import Boton from '../componentes/boton.jsx';

function Tests() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Acompañamiento familiar y social</h1>
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
              src="https://media.istockphoto.com/id/2158621258/es/vector/un-c%C3%ADrculo-de-hombres-y-mujeres-diversos-en-un-abrazo-grupal-primer-plano.jpg?s=612x612&w=0&k=20&c=F0txuhILdXTSiR6fWxzLQpDg8LmShvD8SvAYEPUs304="
              alt="Acompañamiento Familiar y Social"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className="info-text" style={{ flex: 1 }}>
            <p>
              Nuestra conferencia sobre Acompañamiento Familiar y Social tiene como propósito ofrecer a las familias y comunidades herramientas psicológicas que fortalezcan la comunicación, la convivencia y el bienestar emocional.
            </p>
          </div>
        </div>
      </section>

      <div className="info-text2">
        <div className="info-title">¿Qué es?</div>
        <p>
          El acompañamiento familiar y social es un proceso de apoyo y orientación psicológica que busca fortalecer los vínculos en el hogar y en la comunidad. Se centra en fomentar la comunicación efectiva, el respeto mutuo y la resolución saludable de conflictos.
        </p>
        <p>
          Además, brinda herramientas para afrontar los desafíos cotidianos, mejorar la convivencia y construir relaciones más sólidas y armónicas que impacten positivamente en el bienestar individual y colectivo.
        </p>
      </div>

      <div className="info-text2">
        <div className="info-title">¿Por qué es importante?</div>
        <p>
          Un acompañamiento adecuado permite afrontar las dificultades emocionales y sociales con mayor resiliencia, prevenir problemáticas familiares y promover la integración comunitaria. 
          También ayuda a generar entornos de confianza donde cada persona puede desarrollarse plenamente.
        </p>
      </div>

      <div className="info-text2">
        <div className="info-title">¿A quién está dirigido?</div>
        <p>
          Este espacio está pensado para familias, cuidadores, docentes, líderes comunitarios y cualquier persona interesada en fortalecer sus relaciones interpersonales y el bienestar en su entorno social.
        </p>
      </div>

      <div className="info-text2">
        <div className="info-title">Beneficios principales</div>
        <ul>
          <li>Fortalece los lazos familiares y sociales.</li>
          <li>Mejora la comunicación y la convivencia.</li>
          <li>Promueve el apoyo mutuo y la empatía.</li>
          <li>Previene y gestiona conflictos de manera saludable.</li>
          <li>Favorece el bienestar emocional y la resiliencia.</li>
        </ul>
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
          <div className="info-title">Un espacio seguro para tu bienestar</div>
          <p>
            Ofrecemos atención presencial y en línea, adaptándonos a las necesidades de cada persona. Nuestro objetivo es crear un espacio seguro, de escucha y acompañamiento, donde cada individuo pueda trabajar en su bienestar emocional y construir una vida más plena.
          </p>
          <Boton />
        </div>
      </section>

      <Navbar />
      <Piedepagina />
    </div>
  );
}

export default Tests;
