
import '../CardWidget/CardWidget.css'
import { Link } from "react-router-dom"

const CardWidget = () =>{
    return( 
      <div className="container-cart">
      <Link to="/cart" >
       
        <span className='span'>0</span>

  </Link>
    </div>
    );
}

export default CardWidget ;