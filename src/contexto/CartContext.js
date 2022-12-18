import {createContext, useState} from "react"

export const CartContext = createContext()

const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([])


    const agregarAlCarrito=(e)=>{
        
        if(miCart(e)){
            let nuevoArray= cart.map( producto =>{
                if(producto.id === e.id){
                    let nuevoProducto={
                        ...producto, quantity: producto.quantity + e.quantity
                    }
                    return nuevoProducto
                }
              
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

    const data={
        cart:cart,
        agregarAlCarrito,
        borradoCart
    }


    return(

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider