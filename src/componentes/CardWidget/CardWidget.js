
import '../CardWidget/CardWidget.css'
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from '../../contexto/CartContext';

const CardWidget = () =>{
  const {cart}=useContext( CartContext )


    return( 
      <div className="container-cart">
      <Link to="/cart" >
        <span className='span'>{cart.length}</span>

  </Link>
    </div>
    );
}

export default CardWidget ;