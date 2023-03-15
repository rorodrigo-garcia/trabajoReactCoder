import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexto/CartContext"
import Form from "../Form/Form"
import { doc,collection,getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfiguracion"
import Ordenes from "../Ordenes/Ordenes"
const Carrito =()=>{

    const{cart , borradoCart , precioTotal,borrarObjeto} =useContext( CartContext )
    

    const [comprar , setComprar] = useState(false)    
    const [orderId , setOrderId] = useState(null)
    const [order, setOrder] = useState({})
    
    const abrirFormulario = ()=>{
      if( cart.length > 0 ){
        setComprar(true)
      }else{
        alert ("No hay objetos")
      }
       
    }
    useEffect (()=>{
      
      if(orderId){ 

      const orderCollection = collection(db,"orders")
      const y = doc(orderCollection, orderId)
          getDoc(y)
          .then(res => {
              setOrder(
                  {
                      id:res.id,
                      ...res.data()
                  }
              )
          })}
      },[orderId])

  if(orderId){
    return <div>
      <h3> Tu orden de compra es : {orderId}</h3>
      <Link to= "/"> Volver a la compra</Link>
    </div>
  }

    return(
        <div>
          {
           cart.map( item =>{
           return <div key={item.id}>
                    <img src={item.img} alt={item.personaje} className="img_producto"></img>
                    <h3 className="nombre_producto">{item.personaje}</h3>
                    <p className="descripcion_producto">{item.descripcion} </p>
                    <h5 >{item.quantity}</h5>
                    <button variant="container" onClick={()=>borrarObjeto(item.id)}>Sacar del Carrito</button>
            </div>
            
           })
          }
          
          {
            comprar ?(  <Form cart={cart} precioTotal={precioTotal} setOrderId={setOrderId} borradoCart={borradoCart} /> ) :  
            cart.length > 0 &&
            (<div> <button onClick={abrirFormulario}> Comprar </button>
            <button> Salir Compra </button>
            <div>
        
        <button onClick={borradoCart}> Presiona para borrar todo </button>
        </div>

        <div>
          <h4> precio total {precioTotal()}</h4>
     
        </div>
        </div>  )
          }
          < Ordenes order={order} />
        </div>

        
    )
    
}

export default Carrito