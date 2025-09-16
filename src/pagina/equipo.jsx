import React from 'react';
import './equipo.css';
import Piedepagina from '../componentes/piedepagina.jsx'
import Navbar from '../componentes/navbar.jsx';
import { Link } from 'react-router-dom'; 

const Equipo = () => {
  return (
    
    <div className="team-container">
      <div>
        <Navbar/>
      </div>

      

      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Nuestro Equipo de Expertos</h1>
            <p className="hero-subtitle">
              Profesionales comprometidos con tu bienestar mental y emocional
            </p>
            <div className="hero-divider"></div>
            <p className="hero-description">
              Conoce a nuestro equipo multidisciplinario de psicólogos altamente capacitados,
              cada uno especializado en diferentes áreas para brindarte la mejor atención personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-center">Nuestros Servicios
            </h2>
            <p className="section-subtitle">
              Profesionales certificados con amplia experiencia en diferentes enfoques terapéuticos
            </p>
          </div>

          <div className="team-grid">
      
            <div className="team-card">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src="https://www.ryapsicologos.net/wp-content/uploads/2024/11/psicologa-sonriendo.jpg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="image-fallback">CM</div>';
                    }}
                  />
                </div>
                <h3 className="card-title">Dra. Carla Martínez</h3>
                <div className="specialty">Psicología Clínica</div>
                <p className="card-description">
                  Especialista en terapia cognitivo-conductual con más de 12 años de experiencia.
                  Enfoque en ansiedad y trastornos del estado de ánimo.
                </p>
                <div className="card-rating">
                  <span className="stars">★★★★☆</span>
                  <span className="rating-text">4.8/5</span>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2023-05/shutterstock_1994511608.jpg?itok=92J1HIzH"
                    alt="Psicólogo infantil con expresión amable usando gafas"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="image-fallback">JS</div>';
                    }}
                  />
                </div>
                <h3 className="card-title">Dr. Javier Sánchez</h3>
                <div className="specialty">Psicología Infantil</div>
                <p className="card-description">
                  Experto en psicología del desarrollo infantil y terapia familiar.
                  Más de 8 años trabajando con niños y adolescentes.
                </p>
                <div className="card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-text">5.0/5</span>
                </div>
              </div>
            </div>

          
            <div className="team-card">
              <div className="card-content">
                <div className="card-image">
                  <img
                    src="https://www.psicologosparavalencia.es/wp-content/uploads/2023/04/laura-fuster-psicologa-valencia.webp"
                   
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="image-fallback">AM</div>';
                    }}
                  />
                </div>
                <h3 className="card-title">Dra. Ana Morales</h3>
                <div className="specialty">Psicología Organizacional</div>
                <p className="card-description">
                  Especialista en psicología laboral y desarrollo organizacional.
                  Coach ejecutiva certificada con amplia experiencia en empresas multinacionales.
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
              <div className="stat-number">500+</div>
              <div className="stat-label">Pacientes Atendidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Especialidades</div>
            </div>
          </div>
        </div>
      </section>

     
      
      <section className="cta-section"
        style={{
          backgroundImage: `url('https://clinicabasilia.com/wp-content/uploads/2025/07/Consulta-psicologica-en-Cali-4.jpg')`,
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
            <h2 className="cta-title">¿Listo para Agendar tu primera Consulta?</h2>
            <p className="cta-description">
              Agenda tu primera consulta con uno de nuestros especialistas y da el primer paso hacia tu bienestar mental.
            </p>
            <div className="cta-buttons">
              <Link className="cta-btn secondary" to='/contacto'>Llamanos Ahora</Link>
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

export default Equipo;
