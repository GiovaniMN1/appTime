
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header=()=>{
    return(
        <header>
          <h1>Mi blog personal</h1>
          
          <nav>
            <NavLink to='/'><FontAwesomeIcon icon={faCoffee } /></NavLink>
            <NavLink to='/time'>Time</NavLink>
            
          </nav>
        </header>
    )
}

export default Header