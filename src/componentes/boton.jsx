import { Link } from 'react-router-dom'; 
import '../css/boton.css'
function Boton(){
    return(

    
 <div className="cta-buttons">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeyx9_HAAU9160ceWutyLup9DgL67D3TUL2NnMHCfzUkSRMRA/viewform?usp=dialog'> <Link className="cta-btn secondary" to='https://docs.google.com/forms/d/e/1FAIpQLSeyx9_HAAU9160ceWutyLup9DgL67D3TUL2NnMHCfzUkSRMRA/viewform?usp=dialog'>Inscribete</Link></a>
            </div>
            )
}

export default Boton