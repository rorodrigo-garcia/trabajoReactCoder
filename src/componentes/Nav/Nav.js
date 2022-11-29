import '../Nav/StyleNav.css'
import CardWidget from '../CardWidget/CardWidget.js';



export const Navbar = ()=>{
    return(
        <nav className="navbar">
        <div className="contenedorNavbar">
            <div className="container-logo">
            <ion-icon name="laptop-outline"></ion-icon>
            </div>
        <ul className="lista">
            <li> <a href="." className="listado" >inicio</a></li>
            <li> <a href="." className="listado">nosotros</a></li>
            <li> <a href="." className="listado">contacto</a></li>
        </ul>

        <CardWidget />
        </div> 
        </nav>


    );
}
export default Navbar ;