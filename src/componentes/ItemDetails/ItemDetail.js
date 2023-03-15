import React,{useContext} from "react";
import { CartContext } from "../../contexto/CartContext";
import Contador from "../ItemCount/ItemCount";
import '../ItemDetails/ItemDetail.css'
const ItemDetail=({producto}) =>{

    const{ agregarAlCarrito , totalidad }  = useContext( CartContext)

    const onAdd=(quantity)=>{
        agregarAlCarrito(
            {
                ...producto,
                quantity: quantity,
                
            }
        )


    }

    const quantity = totalidad(producto.id)
    
   

    return(
        <div>
        <div className="contenedor_producto">
            <h2 className="nombre_producto"> <u>{producto.personaje}</u></h2> 
            <img  src={producto.img} alt="" className="img_producto"/>
            <h2 className="descripcion_producto" >{producto.descripcion}</h2>
            <h2 className="valor_producto">{producto.valor}</h2>
        </div>
        <Contador onAdd={onAdd} stock={!quantity?producto.stock:producto.stock-quantity} initial={producto.stock===quantity?0:1}/>
        </div>

    )
}

export default ItemDetail