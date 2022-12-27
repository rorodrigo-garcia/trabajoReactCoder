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
    console.log(quantity)
   

    return(
        <div>
        <div>
            <h2>{producto.personaje}</h2>
            <h2>{producto.valor}</h2>
            <h2>{producto.descripcion}</h2>
        </div>
        <Contador onAdd={onAdd} stock={producto.stock} initial={quantity}/>
        </div>

    )
}

export default ItemDetail