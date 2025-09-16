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
                                Creemos que cada persona es única. Por eso, diseñamos tratamientos personalizados que se ajustan a tus necesidades, historia y objetivos. Te acompañamos de manera cercana en cada etapa del proceso, generando un ambiente de confianza y respeto.
                            </p>
                        </details>

                        <details>
                            <summary>Cuidado humano</summary>
                            <p>
                                Ofrecemos un espacio seguro, empático y libre de juicio. Nuestro enfoque está centrado en el respeto, la calidez humana y la comprensión profunda de tus emociones. Nos importa tu bienestar tanto como a ti, y estamos aquí para ayudarte a sanar y crecer.
                            </p>
                        </details>

                        <details>
                            <summary>Profesionales expertos</summary>
                            <p>
                                Psicólogos certificados y altamente capacitados, con amplia experiencia en diversas ramas de la psicología clínica, infantil, organizacional y de pareja. Nuestro equipo se distingue por su constante actualización y compromiso con el bienestar integral de cada persona, brindando intervenciones efectivas y personalizadas.
                            </p>
                        </details>

                        <details>
                            <summary>Innovación en terapias</summary>
                            <p>
                                Aplicamos técnicas terapéuticas modernas, validadas por la ciencia y adaptadas a las necesidades de cada individuo. Incorporamos metodologías como la terapia cognitivo-conductual, mindfulness, neuropsicología y más, garantizando procesos de cambio efectivos y sostenibles en el tiempo.
                            </p>
                        </details>

                        <details>
                            <summary>Formación continua</summary>
                            <p>
                                Nuestro equipo se mantiene en constante capacitación para incorporar las últimas investigaciones y prácticas clínicas. Esto nos permite ofrecer intervenciones terapéuticas de vanguardia, éticas y orientadas a resultados, siempre priorizando el bienestar emocional y el crecimiento personal de cada paciente.
                            </p>
                        </details>

                        <details>
                            <summary>Resultados comprobados</summary>
                            <p>
                                Los avances de nuestros pacientes son nuestra mejor carta de presentación. Contamos con múltiples testimonios de personas que han logrado transformar sus vidas, superar dificultades emocionales y mejorar su calidad de vida gracias a un proceso terapéutico comprometido y eficaz.
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
