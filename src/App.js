import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pagina/inicio';
import Tests from './pagina/prueba';
import Equipo from './pagina/equipo';
import Conferencias from './pagina/conferencias';
import Contacto from './pagina/contacto';
import Services from './pagina/servicios';
import Psico2 from './pagina/infantil';
import Psico3 from './pagina/organizacional';
import FyS from './pagina/familiar_y_social';
import PyR from './pagina/prevencion_y_recuersos_prof';
import ConEdu from './pagina/conciencia_y_educacion';


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
          <Route path='/infantil' element={<Psico2 />}>  </Route>
          <Route path='/PsicologiaOrganizacional' element={<Psico3 />}>  </Route>
          <Route path='/FamiliarySocial' element={<FyS />}>  </Route>
          <Route path='/Prevencion' element={<PyR />}> </Route>
          <Route path='/conciencia_y_educacion' element={<ConEdu />}> </Route>

        </Routes>
      </Router>
    </div>

  );
}
export default App;
