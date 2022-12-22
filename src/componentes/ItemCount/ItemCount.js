import { useEffect, useState } from "react";

const Contador =({stock,initial=1,onAdd})=>{
    const[contador,setContador] = useState(initial)
    useEffect(()=>{
        setContador(initial)
    },[initial])

    const incrementar =()=>{
        if(contador <stock){
            setContador(contador + 1)
        }
    }

    const decrementar =()=>{
        if(contador > initial){
            setContador(contador - 1 )
        }
    }

   

    return(
        <div>
            <h2>{contador}</h2>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={decrementar}>restar</button>
            <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>

        </div>
    )





}
export default Contador