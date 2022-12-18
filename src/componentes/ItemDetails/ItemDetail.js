import React,{useContext} from "react";
import { CartContext } from "../../contexto/CartContext";
import Contador from "../ItemCount/ItemCount";
import '../ItemDetails/ItemDetail.css'
const ItemDetail=({producto}) =>{

    const{ agregarAlCarrito }  = useContext( CartContext)

    const onAdd=(quantity)=>{
        agregarAlCarrito(
            {
                ...producto,
                quantity: quantity
            }
        )


    }

    return(
        <div>
        <div>
            <h2>{producto.personaje}</h2>
            <h2>{producto.valor}</h2>
            <h2>{producto.descripcion}</h2>
        </div>
        <Contador onAdd={onAdd}/>
        </div>

    )
}

export default ItemDetail