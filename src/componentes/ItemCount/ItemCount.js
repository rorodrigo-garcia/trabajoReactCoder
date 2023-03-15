import { useEffect, useState } from "react";
import '../ItemCount/itemCount.css'

const Contador =({stock,initial=1,onAdd})=>{
    const[contador,setContador] = useState(initial)
    
    useEffect(()=>{
        setContador(initial)
    },[initial])

    const incrementar =()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar =()=>{
        if(contador > 1){
            setContador(contador - 1 )
        }
    }

   

    return(
        <div className="contenedor">
            <h2>{contador}</h2>
            <button onClick={incrementar}className="sumar" >Sumar</button>
            <button onClick={decrementar}className="restar" >restar</button>
            <button onClick={()=>onAdd(contador)}className="agregar" >Agregar al carrito</button>

        </div>
    )





}
export default Contador