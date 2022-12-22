import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"


const Carrito =()=>{

    const{cart , borradoCart} =useContext( CartContext )
    console.log(cart)



    return(
        <div>
          {
           cart.map( item =>{
            <div key={item.id}>
                    <h3>{item.personaje}</h3>
                    <p>{item.descripcion} </p>
            </div>
           })
          }
          

          <div>

          <button onClick={borradoCart}> Presiona si quieres borrar </button>
          </div>


        </div>
    )
}

export default Carrito