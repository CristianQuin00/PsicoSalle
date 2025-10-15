import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pagina/inicio';
import Tests from './pagina/prueba';
import Equipo from './pagina/equipo';
import Conferencias from './pagina/conferencias';
import Contacto from './pagina/contacto';
import Services from './pagina/servicios';
import Psico2 from './pagina/Psicologia2';
import Psico3 from './pagina/Psicologia3';



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />}>  </Route>
          <Route path='/conferencias' element={<Conferencias />}>  </Route>
          <Route path='/equipo' element={<Equipo />}>  </Route>
          <Route path='/PsicologiaClinica' element={<Tests />}>  </Route>
          <Route path='/contacto' element={<Contacto />}>  </Route>
          <Route path='/Servicios' element={<Services />}>  </Route>
          <Route path='/PsicologiaInfantil' element={<Psico2 />}>  </Route>
          <Route path='/PsicologiaOrganizacional' element={<Psico3 />}>  </Route>

        </Routes>
      </Router>
    </div>

  );
}
export default App;
