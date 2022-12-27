import React , {useEffect , useState} from "react";

import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetails/ItemDetail"
import {getDoc ,doc , collection} from"firebase/firestore"
import { db } from "../../firebaseConfiguracion";

const ItemDetailsContainer =() =>{
    const [producto,setProducto] = useState({})
    const {id} = useParams()
    useEffect (()=>{
    //     const productoElegido = productos.find( producto => producto.id === parseInt(id) )
    // setProducto(productoElegido)
    const itemCollection = collection(db,"Productos")
    const y = doc(itemCollection, id)
        getDoc(y)
        .then(res => {
            setProducto(
                {
                    id:res.id,
                    ...res.data()
                }
            )
        })
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