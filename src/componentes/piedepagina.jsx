import '../css/footer.css'


function Piedepagina() {
  return (
    <footer className="team-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">

              <div className="logo-icon"><img src="Logo.png" class="logo-icon" alt="Logo" /> </div>

              <span className="logo-text">MenteSana</span>
            </div>
            <p className="footer-description">
              Centro de psicología integral dedicado al bienestar mental y emocional de nuestros pacientes.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Inicio</a></li>
              <li><a href="http://localhost:3000/contacto" className="footer-link">Contacto</a></li>
              <li><a href="http://localhost:3000/equipo" className="footer-link">Nuestro Equipo</a></li>
              <li><a href="http://localhost:3000/conferencias" className="footer-link">Conferencias</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-info">
              <li className="footer-info-item">
                <i className="fas fa-map-marker-alt"></i>
                Av. Principal 123, Ciudad
              </li>
              <li className="footer-info-item">
                <i className="fas fa-phone"></i>
                +57 302 607 3218
              </li>
              <li className="footer-info-item">
                <i className="fas fa-envelope"></i>
                psicologiasalle37@gmail.com
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Síguenos</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61579963063367" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/psico_salle/" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Psicologia Salle De Campoamor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Piedepagina;