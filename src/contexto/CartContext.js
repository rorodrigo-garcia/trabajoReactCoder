import {createContext, useState} from "react"

export const CartContext = createContext()

const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([])


    const agregarAlCarrito=(e)=>{
        
        if(miCart(e)){
            let nuevoArray= cart.map( producto =>{
                if(producto.id === e.id){
                    let nuevoProducto={
                        ...producto,
                         quantity: producto.quantity  + e.quantity
                    }
                    return nuevoProducto
                }
              return producto
            } )

            setCart(nuevoArray)
        }else{
            setCart( [...cart , e] )
        }
        
    }

    const miCart=(item)=>{
        return cart.some(e=>e.id===item.id)
    }


    
    const borradoCart = ()=>{

        setCart( [] )


    }

    const totalidad=(id)=>{
        const producto = cart.find( e => e.id === id)
        return producto?.quantity
    }

    const precioTotal = ()=>{

        const total = cart.reduce( (acc, e)=>{
            return acc + (e.valor * e.quantity)
        },0 )
        
        return total

    }

    const borrarObjeto= (id)=>{
   const borrado = cart.filter( producto => producto.id !== id )
   setCart(borrado)
    }

    const data={
        cart,
        agregarAlCarrito,
        borradoCart,
        totalidad,
        precioTotal,
        borrarObjeto

    }


    return(

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider