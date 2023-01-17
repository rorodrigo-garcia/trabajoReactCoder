
import { useEffect,useState } from "react";

import '../ItemsListContainer/ItemListContainer.css'



import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import PacmanLoader from "react-spinners/PacmanLoader"

import { getDocs , collection ,query ,where} from "firebase/firestore"
import { db } from "../../firebaseConfiguracion";





const ItemListContainer = () => {
    const { categoriaNombre} = useParams()
    const [items, setItems] = useState([])
    const [cargando, setCargando]= useState(false)
  
    useEffect(() => {


      setCargando(true)

     
      const itemCollection = collection(db, "Productos")

      if(categoriaNombre){

        const x = query(itemCollection , where( "categoria","==" ,categoriaNombre  ))
        getDocs(x)
        .then( (res) => {
          const productos = res.docs.map(productos =>{
            return{
              ...productos.data(),
              id:productos.id
            }
          })
          setItems(productos)
  
        })
        .catch( (err) => (err))
      }else{
      getDocs(itemCollection)
        .then( (res) => {
          const productos = res.docs.map(productos =>{
            return{
              ...productos.data(),
              id:productos.id
            }
          })
          setItems(productos)
  
        })
        .catch( (err) => (err))
  
      }

     



        setTimeout(()=>{
            setCargando(false)
        },2000)
  
    }, [categoriaNombre])

   

    
  
    return (
      <div className="light">
        {
          cargando ? <PacmanLoader /> : <ItemList items={items}/>
        }
      </div>
    )
  }
  
  export default ItemListContainer
  