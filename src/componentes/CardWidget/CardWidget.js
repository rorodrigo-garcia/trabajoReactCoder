
import '../CardWidget/CardWidget.css'
import { Link } from "react-router-dom"

const CardWidget = () =>{
    return( 
      <div className="container-cart">
      <Link to="/cart" >
       <div className="bubble-counter">
        <span className='span'>0</span>
      </div>
  </Link>
    </div>
    );
}

export default CardWidget ;