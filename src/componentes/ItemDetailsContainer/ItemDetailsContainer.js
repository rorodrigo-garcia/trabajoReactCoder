import React , {useEffect , useState} from "react";
import { productos } from "../../productosMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetails/ItemDetail"

const ItemDetailsContainer =() =>{
    const [producto,setProducto] = useState({})
    const {id} = useParams()
    useEffect (()=>{
        const productoElegido = productos.find( producto => producto.id === parseInt(id) )
    setProducto(productoElegido)
    },[id])

    return(
        <div>
             <div className='container-detail'>
       <ItemDetail producto={ producto } />
    </div>
        </div>
    )
}

export default ItemDetailsContainer