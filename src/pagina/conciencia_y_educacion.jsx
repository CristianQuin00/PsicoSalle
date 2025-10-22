import Piedepagina from '../componentes/piedepagina.jsx';
import Navbar from '../componentes/navbar.jsx';
import React from 'react';
import './ConEdu.css';
import PP from './santi_sexiiii.jpg'

const ConEdu = () => {
    return (
        <div className="pagina-conferencia">
            <Navbar />
            <header className="encabezado">
                <h1>Conferencias de Conciencia y Educación</h1>

            </header>

            <section className="introduccion">
                <h2>¿De qué se tratan estas conferencias?</h2>
                <p>
                    Nuestras conferencias están diseñadas para abordar temas esenciales que impactan profundamente en el desarrollo personal y colectivo, tales como la inteligencia emocional, la educación consciente, la empatía, la comunicación efectiva y la transformación social. A través de estos espacios, promovemos el autoconocimiento y la reflexión, brindando herramientas prácticas para vivir con mayor presencia, comprensión y conexión auténtica con uno mismo y con los demás. Creemos firmemente que la educación desde la conciencia es el camino para construir comunidades más humanas, inclusivas y colaborativas, capaces de enfrentar los retos actuales con sabiduría y empatía.
                </p>
            </section>

            <section className="temas">
                <h2>Temas que abordamos</h2>
                <table className="tabla-temas" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ verticalAlign: "top", padding: "0 20px", border: "1px solid #ddd", width: "33%" }}>
                                <h3>Conciencia plena en la educación</h3>
                                <p>
                                    Educación emocional para niños y adultos
                                    <br />
                                    Liderazgo consciente
                                    <br />
                                    Neuroeducación y cerebro emocional
                                    <br />
                                    Desarrollo de habilidades socioemocionales
                                    <br />
                                    Transformación de paradigmas educativos
                                </p>

                                <h3>Educación emocional para niños y adultos</h3>
                                <p>
                                    Brindamos herramientas para reconocer, comprender y gestionar las emociones desde una edad temprana, así como en la adultez, fortaleciendo la inteligencia emocional. Esta educación es fundamental para mejorar las relaciones interpersonales, la autoestima y la resiliencia, impactando positivamente en la vida personal y profesional.
                                </p>
                            </td>

                            <td style={{ verticalAlign: "top", padding: "0 20px", border: "1px solid #ddd", width: "33%" }}>
                                <h3>Liderazgo consciente</h3>
                                <p>
                                    Fomentamos un modelo de liderazgo basado en la autoconciencia, la empatía y la responsabilidad social. Este enfoque invita a líderes y gestores a desarrollar habilidades que favorezcan la colaboración, la toma de decisiones éticas y el bienestar colectivo, promoviendo entornos de trabajo y comunidades más saludables y productivas.
                                </p>

                                <h3>Neuroeducación y cerebro emocional</h3>
                                <p>
                                    Presentamos los avances científicos sobre el funcionamiento del cerebro y su relación con el aprendizaje y las emociones. Comprender cómo interactúan estos procesos permite diseñar estrategias educativas que potencien el desarrollo integral de los estudiantes, facilitando la motivación, la memoria y la regulación emocional.
                                </p>
                            </td>

                            <td style={{ verticalAlign: "top", padding: "0 20px", border: "1px solid #ddd", width: "33%" }}>
                                <h3>Desarrollo de habilidades socioemocionales</h3>
                                <p>
                                    Trabajamos en fortalecer competencias como la empatía, la comunicación asertiva, la resolución de conflictos y la cooperación, que son vitales para el éxito personal y social. Estas habilidades contribuyen a
                                </p>

                                <h3>Transformación de paradigmas educativos</h3>
                                <p>
                                    La transformación de paradigmas educativos impulsa un enfoque integral y consciente que fomenta el aprendizaje activo, emocional y social. Así preparamos a las personas para afrontar con responsabilidad los retos actuales.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="psicologia-org">
                <div className="contenido">
                    <img src={PP} />
                    <div className="texto">
                        <h2>Conferencistas destacados</h2>
                        <p>
                            Contamos con expertos en neuroeducación, psicología, pedagogía y desarrollo humano, reconocidos por su enfoque empático, actualizado y transformador. A través de sus charlas y talleres, inspiran a repensar la educación desde una mirada más humana, consciente y emocionalmente inteligente.
                        </p>
                    </div>
                </div>

                <style jsx>{`
    .psicologia-org {
      background-color: #f6faff;
      padding: 40px;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contenido {
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 1200px;
      gap: 40px;
    }

    img {
      max-width: 400px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
    }

    .texto {
      flex: 1;
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
    }

    @media (max-width: 768px) {
      .contenido {
        flex-direction: column;
        text-align: center;
      }

      .texto {
        margin-top: 20px;
      }
    }
  `}</style>
            </section>

            

            <section className="convocatoria">
                <h2>¿Te interesa participar o invitar una conferencia?</h2>
                <p>
                    Ya seas institución, docente, estudiante o simplemente alguien en busca de cambio, nuestras conferencias están
                    diseñadas para ti. Escríbenos para agendar una sesión o asistir a nuestros eventos abiertos.
                </p>
                <button className="btn-contacto">Contáctanos</button>
            </section>


            <Piedepagina />

        </div>
    );
};

export default ConEdu;
