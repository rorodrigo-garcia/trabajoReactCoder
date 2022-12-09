import React , {useEffect , useState} from "react";
import { productos } from "../../productosMock";
import { useParams } from "react-router-dom";

const ItemDetailsContainer =() =>{
    const [producto,setProducto] = useState({})
    const {id} = useParams()
    useEffect (()=>{
        const productoElegido = productos.find( producto => producto.id === parseInt(id) )
    setProducto(productoElegido)
    },[id])

    return(
        <div>
            <h3>{producto.personaje}</h3>
            <h3>{producto.valor}</h3>
            <h3>{producto.descripcion}</h3>
        </div>
    )
}

export default ItemDetailsContainer