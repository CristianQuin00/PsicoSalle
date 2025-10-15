import React from 'react';
import '../css/prueba.css';
import Piedepagina from '../componentes/piedepagina.jsx'
import Navbar from '../componentes/navbar.jsx';
import { Link } from 'react-router-dom'; 

const Conferencias = () => {
  return (
    
    <div className="team-container">
      <Navbar/>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Conferencias y talleres</h1>
            <p className="hero-subtitle">
              Creamos espacios seguros para hablar de la salud mental, aprender a identificar señales de riesgo y fomentar la esperanza, la escucha y el acompañamiento.
            </p>


          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-center">Algunos de nuestros servicios
            </h2>
            <p className="section-subtitle">
              Espacios de aprendizaje grupal
            </p>
          </div>

          <div className="team-grid">

            <div className="team-card">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src="https://img.freepik.com/vector-gratis/ilustracion-neuroeducacion-dibujada-mano_23-2150983089.jpg"
                   
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="image-fallback">CM</div>';
                    }}
                  />
                </div>
                <li> <a href= "localhost:3000/" className="card-title">Conciencia y Educación </a> </li>
                <div className="specialty">Presencial</div>
                <p className="card-description">
                  <li>Rompiendo mitos sobre el suicidio</li>
                  <li>Factores de riesgo y señales de alerta</li>
                  <li>Importancia del autocuidado y la salud mental</li>

                  <li>Cómo hablar abiertamente del tema sin tabúes</li>
                </p>
                <div className="card-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating-text">4.3/5</span>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src="https://www.plenainclusion.org/wp-content/uploads/2021/05/ilustracion-persona-confusa-apoyo-familias.png"
                    
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="image-fallback">JS</div>';
                    }}
                  />
                </div>
                <li><a href= "localhost:3000/" className="card-title"> Acompañamiento Familiar y Social</a> </li>
                <div className="specialty">Presencial</div>
                <p className="card-description">
                  <li>Cómo apoyar a un ser querido en crisis</li>
                  <li>Comunicación empática y escucha activa</li>
                  <li>Redes de apoyo comunitarias y familiares</li>
                  <li>Rol de la sociedad en la prevención</li>
                </p>
                <div className="card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">5/5</span>
                </div>
              </div>
            </div>


            <div className="team-card">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src="data:image/jpeg;base64,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"
               
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="image-fallback">AM</div>';
                    }}
                  />
                </div>
                <li><a href= "localhost:3000/"className="card-title" >Prevención y Recursos Profesionales</a> </li>
                <div className="specialty">Presencial</div>
                <p className="card-description">
                  <li>Herramientas de afrontamiento emocional</li>
                  <li>Programas de prevención en colegios y empresas</li>
                  <li>Psicoterapia y líneas de atención disponibles</li>
                  <li>Construcción de esperanza y resiliencia</li>
                </p>
                <div className="card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">700+</div>
              <div className="stat-label">Pacientes Atendidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">93%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Conferencias</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section"
        style={{
          backgroundImage: `url('https://dinecom.cl/wp-content/uploads/2018/11/07-4.png')`,
          backgroundSize: 'cover',
          
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center'
          
        }}>
      
        
      

      
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¡Inscribite ahora!</h2>
            <p className="cta-description">
              Contactanos y inscribite a alguna de nuestras conferencias
            </p>
            <div className="cta-buttons">
              <a href='http://localhost:3000/contacto'> <Link className="cta-btn secondary" to='/contacto'>Inscribete</Link></a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Piedepagina />
      </div>
    </div>
  );
};

export default Conferencias;
