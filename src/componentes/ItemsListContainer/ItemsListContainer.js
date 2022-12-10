
import { useEffect,useState } from "react";

import '../ItemsListContainer/ItemListContainer.css'

import { productos } from "../../productosMock";

import ItemList from "../ItemList/ItemList";


import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const { categoriaNombre} = useParams()
  
    const [items, setItems] = useState([])
  
    useEffect(() => {
      const productosFiltered = productos.filter(
        (productos) => productos.categoria === categoriaNombre
      )
  
      const task = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(categoriaNombre ? productosFiltered : productos)
        }, 500)
      })
  
      task
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          console.log("se rechazo")
        })
  
    }, [categoriaNombre])
  
    return (
      <div className="light">
        <ItemList items={items} />
      </div>
    )
  }
  
  export default ItemListContainer
  