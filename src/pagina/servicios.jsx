import { motion } from "framer-motion";
import { Heart, MessageCircle, Users } from "lucide-react";
import Navbar from '../componentes/navbar.jsx';
import Piedepagina from '../componentes/piedepagina';
import './servicios.css';
import { Link } from "react-router-dom";

function Service() {
  const especialidades = [
    {
      titulo: 'Psicología Clínica',
      descripcion: 'Se enfoca en la evaluación, diagnóstico y tratamiento de trastornos mentales y emocionales.',
      imagen: 'https://www.tuotromedico.com/include/images/fotosContenidos/PsicologiaClinica.webp',
      uri: '/PsicologiaClinica'
    },
    {
      titulo: 'Psicologia Organizacional ',
      descripcion: 'rama de la psicología que estudia el comportamiento humano en el entorno laboral para mejorar la productividad y el bienestar de los empleados.',
      imagen: 'https://centrointegraldepsicologia.com/wp-content/uploads/2022/10/Funciones-de-un-psicologo-clinico-y-su-formacion.png',
      uri: '/PsicologiaOrganizacional'

    },
    {
      titulo: 'Psicología Infantil',
      descripcion: ' rama de la psicología que estudia el desarrollo mental, emocional y conductual de los niños, desde el nacimiento hasta la adolescencia. Su objetivo es comprender cómo piensan, sienten y se comportan.',
      imagen: 'https://mexico.unir.net/wp-content/uploads/sites/6/2021/05/psicologia-educativa.jpg',
      uri: '/PsicologiaInfantil'
    }
  ];

  return (

    <div className="app">
      <Navbar />
      <header className="header">
        <h1>Servicios Que brindamos</h1>
      </header>

      <main className="contenedor-tarjetas">
        {especialidades.map((item, index) => (
          <div className="tarjeta" key={index}>
            <div className="imagen-wrapper">
              <img src={item.imagen} alt={item.titulo} className="imagen-tarjeta" />
            </div>
            <div className="contenido-tarjeta mx-auto">
              <h2>{item.titulo}</h2>
              <p>{item.descripcion}</p>
              <div className="d-flex justify-content-center">
                <Link className="btn btn-primary" to={item.uri} role="button">
                  Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>

      <Piedepagina />
    </div>
  );
}

export default Service;
