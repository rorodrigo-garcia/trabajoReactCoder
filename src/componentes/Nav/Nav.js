import '../Nav/StyleNav.css'
import CardWidget from '../CardWidget/CardWidget.js';
import Comic from "../../Branch/th.jpeg"
import { Link } from 'react-router-dom';


export const Navbar = ()=>{





    return(
        <nav className='navbar-container'>
        <Link to="/"> 
          <div className="logo">
          <img src={Comic} alt="icono Comic" width="100 " />
          </div>
        </Link>
        <ul className='listado'>
            <li className='items-lista'>
                <Link className='lista-navbar' to="/">Inicio</Link>
            </li>
          <li className='items-lista'>
            <Link className='lista-navbar'to="/categoria/clasicos">Clasicos </Link>
          </li>
          <li className='items-lista'>
            <Link className='lista-navbar' to="/categoria/actuales">Actuales</Link>
          </li>
        </ul>
      <CardWidget />
      </nav>


    );
}
export default Navbar ;