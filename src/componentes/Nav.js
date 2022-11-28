import '../componentes/StyleNav.css'
import CardWidget from '../componentes/CardWidget.js';



export const Navbar = ()=>{
    return(
        <nav className="navbar">
        <div className="contenedorNavbar">
        <h1 className="titulo">Brand</h1>
        <ul className="lista">
            <li> <a href="#" className="listado" >inicio</a></li>
            <li> <a href="#" className="listado">nosotros</a></li>
            <li> <a href="#" className="listado">contacto</a></li>
        </ul>

        <CardWidget />
        </div> 
        </nav>


    );
}
export default Navbar ;