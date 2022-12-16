import {createContext, useState} from "react"

export const CartContext = createContext()

const CartContextProvider=({children})=>{
    const[cart,setCart]=useState([])

    const agregarAlCarrito=()=>{
        setCart()
    }



    const data={
        cart:cart,
        setCart:setCart,
        agregarAlCarrito
    }


    return(

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider