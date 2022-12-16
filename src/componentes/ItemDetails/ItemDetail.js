import React,{useContext} from "react";
import { CartContext } from "../../contexto/CartContext";
import Contador from "../ItemCount/ItemCount";
import '../ItemDetails/ItemDetail.css'
const ItemDetail=({producto}) =>{

    const onAdd=(quantity)=>{
        console.log("La cantidad total es" , quantity)
    }

    return(
        <div>
        <div>
            <h2>{producto.personaje}</h2>
            <h2>{producto.valor}</h2>
            <h2>{producto.descripcion}</h2>
        </div>
        <Contador initial={1} stock={7} onAdd={onAdd}/>
        </div>

    )
}

export default ItemDetail