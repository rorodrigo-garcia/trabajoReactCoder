import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"


const Carrito =()=>{

    const{cart , borradoCart , precioTotal,borrarObjeto} =useContext( CartContext )
    console.log(cart)

    



    return(
        <div>
          {
           cart.map( item =>{
           return <div key={item.id}>
                    <img src={item.img} alt={item.personaje}></img>
                    <h3>{item.personaje}</h3>
                    <p>{item.descripcion} </p>
                    <h5>{item.quantity}</h5>
                    <button variant="container" onClick={()=>borrarObjeto(item.id)}>Sacar del Carrito</button>
            </div>
            
           })
          }
          

          <div>

          <button onClick={borradoCart}> Presiona si quieres borrar </button>
          </div>

          <div>
            <h4> precio total {precioTotal()}</h4>
          </div>

        </div>

        
    )
    
}

export default Carrito