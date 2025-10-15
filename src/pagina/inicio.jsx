// src/pagina/inicio.jsx
import React from 'react';
import Slider from 'react-slick';
import './inicio.css';
import Navbar from '../componentes/navbar';
import Piedepagina from '../componentes/piedepagina';


export default function Inicio() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
    };

    return (
        <div className="home">
            <Navbar />

          
            <section className="home-welcome full-width">
                <div className="welcome-text">
                    <h2>
                        Bienvenido a <span>PsicologiaSalle</span>
                        <h1>Atención psicológica presencial y virtual</h1>
                    </h2>
                    <p>
                        Somos un equipo comprometido con tu bienestar mental y emocional.
                        Nuestra misión es acompañarte en tu proceso de crecimiento personal
                        y profesional con un enfoque humano y cercano.
                    </p>
                </div>
                <div className="welcome-logo">
                    <img src="/Logo.png" alt="Logo" />
                </div>
            </section>


            {/* =========================
          CARRUSEL
      ========================= */}
            <section className="home-carousel">
                <Slider {...settings}>
                    <div className="carousel-slide">
                        <img
                            src="https://uni.edu.gt/wp-content/uploads/sites/19/2025/01/Los-metodos-de-investigacion-en-psicologia2.jpg"
                            alt="Psicología"
                        />
                    </div>
                    <div className="carousel-slide">
                        <img
                            src="https://oroitu.com/wp-content/uploads/2023/10/1200X628-Word-Press-95.jpg"
                        />
                    </div>
                    <div className="carousel-slide">
                        <img
                            src="https://psicologia.us.es/sites/psicologia/files/psicologia_grado_1%202.png"
                            alt="Reflexión"
                        />
                    </div>
                    <div className="carousel-slide">
                        <img
                            src="https://gtechdesign.net/images/arti-2/psicologia-color-diseno-fudamentos-01.webp"
                            alt="Psicología y Diseño"
                        />
                    </div>
                </Slider>
            </section>



            {/* =========================
          BENEFICIOS (DESPLEGABLES)
      ========================= */}
            <section className="home-section">
                <div className="container">
                    <header className="section-head">
                        <h2 className="section-title">¿Por qué elegirnos?</h2>
                        <p className="section-subtitle">
                            Explora los beneficios que ofrecemos:
                        </p>
                    </header>

                    <div className="accordion">
                        <details>
                            <summary>Atención personalizada</summary>
                            <p>
                                Creemos firmemente que cada persona es única, con una historia de vida, un contexto y una forma de sentir y experimentar el mundo que merecen ser escuchados y comprendidos en su totalidad. Por esta razón, en lugar de aplicar enfoques estandarizados o soluciones genéricas, diseñamos tratamientos completamente personalizados, ajustados a tus necesidades específicas, tu historia personal y los objetivos que deseas alcanzar.

Desde el primer encuentro, nos enfocamos en construir una relación terapéutica basada en la confianza, el respeto y la autenticidad. Sabemos que el proceso de pedir ayuda y comenzar una terapia puede ser un paso difícil, por eso te acompañamos de manera cercana y empática en cada etapa, brindándote un espacio seguro donde puedas expresarte con libertad, sin juicios y con el respaldo de profesionales comprometidos con tu bienestar.
                            </p>
                        </details>

                        <details>
                            <summary>Cuidado humano</summary>
                            <p>
                               En el corazón de nuestra práctica terapéutica se encuentra el compromiso de ofrecer un espacio verdaderamente seguro, empático y libre de juicio. Sabemos que abrirse emocionalmente no siempre es fácil, y por eso cuidamos cada detalle para que te sientas escuchado, valorado y acompañado desde el primer momento. Creemos que solo en un entorno de confianza y respeto genuino es posible iniciar un proceso de sanación profundo y transformador.
                            </p>
                        </details>

                        <details>
                            <summary>Profesionales expertos</summary>
                            <p>
                               Contamos con un equipo de psicólogos certificados, altamente capacitados y con una sólida formación académica, que poseen una amplia experiencia en distintas áreas de la psicología, tales como la psicología clínica, infantil, organizacional y de pareja. Cada uno de nuestros profesionales ha trabajado con una gran variedad de casos, lo que les permite ofrecer una atención integral, empática y adaptada a las necesidades específicas de cada individuo, familia o grupo.
                            </p>
                        </details>

                        <details>
                            <summary>Innovación en terapias</summary>
                            <p>
                               En nuestra práctica profesional, aplicamos técnicas terapéuticas modernas y basadas en la evidencia científica, cuidadosamente seleccionadas y adaptadas a las particularidades de cada persona. Creemos firmemente en la importancia de ofrecer un acompañamiento psicológico que no solo sea empático y humano, sino también riguroso y respaldado por investigaciones actualizadas, lo que nos permite garantizar intervenciones eficaces y sostenibles a largo plazo.
                            </p>
                        </details>

                        <details>
                            <summary>Formación continua</summary>
                            <p>
                                En nuestro compromiso con la excelencia profesional y el bienestar de cada persona que confía en nosotros, nuestro equipo de psicólogos se mantiene en constante proceso de formación y actualización. Participamos regularmente en cursos especializados, diplomados, congresos científicos y talleres clínicos que nos permiten incorporar las últimas investigaciones, teorías y enfoques terapéuticos desarrollados en el ámbito de la psicología a nivel nacional e internacional.
                            </p>
                        </details>

                        <details>
                            <summary>Resultados comprobados</summary>
                            <p>
                                Los avances y logros de nuestros pacientes representan, sin duda, nuestra mayor satisfacción y la más valiosa carta de presentación. A lo largo del tiempo, hemos acompañado a muchas personas en sus procesos de cambio, y hemos sido testigos del profundo impacto que puede tener una intervención terapéutica comprometida, ética y personalizada.

Contamos con numerosos testimonios de personas que han logrado superar desafíos emocionales significativos, sanar heridas del pasado, fortalecer su autoestima, mejorar sus relaciones interpersonales y desarrollar nuevas herramientas para enfrentar la vida con mayor claridad, equilibrio y bienestar.
                            </p>
                        </details>
                    </div>
                </div>
            </section>


            <section className="home-cta"
            >

                <div className="container home-cta__wrap">
                    <h3>Nuestra Mision</h3>
                    <p>Brindar atención psicológica integral y especializada en el entorno escolar, promoviendo el bienestar emocional, social y académico de los estudiantes. A través de la colaboración con familias, docentes y directivos, buscamos prevenir, detectar e intervenir en problemáticas que afecten el desarrollo óptimo de los alumnos, fomentando entornos educativos inclusivos, seguros y saludables.</p>
                    <h3>Nuestra Vision</h3>
                    <p>Ser un referente en el acompañamiento psicológico dentro del ámbito educativo, reconocidos por nuestra excelencia, compromiso ético y enfoque integral en la formación de comunidades escolares emocionalmente sanas, inclusivas y resilientes. Aspiramos a contribuir al desarrollo de una educación que valore el bienestar emocional como base del aprendizaje y la convivencia.</p>
                </div>
            </section>


            <Piedepagina />
        </div>
    );
}
