import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"

const Carrito =()=>{

    const{cart,agregarAlCarrito} =useContext(CartContext)
    console.log(cart)



    return(
        <div>
            <h1>estoy en el carrito</h1>
        </div>
    )
}

export default Carrito