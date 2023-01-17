import { addDoc, collection , doc , updateDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebaseConfiguracion"

const Form =({cart,precioTotal,setOrderId,borradoCart}) =>{
   
    
    //  const   [name,setName] = useState("")
    //  const   [lastName,setLastName] = useState("")
     const [userData , setUserData] = useState({name:"", celular:"",email:""})
     
     const total= precioTotal()

     const handleSubmit=(evento)=>{
        evento.preventDefault()
        const order = {
            buyer: userData,
            items : cart,
            total: total,
            date : new Date

        }

        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order )
        .then(res =>setOrderId(res.id) )

        

         cart.map( Productos => {
            updateDoc ( doc(db , "Productos" , Productos.id ) , {stock: Productos.stock - Productos.quantity })
         } )

        borradoCart()
     }


     const handleKey = (e)=>{
           
     }
    // const handleChangeName= (evento)=>{
    //     setName(evento.target.value)
    // }
    // const handleChangeLastName=(evento)=>{
    //     setLastName(evento.target.value)
    // }

    

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" name="name" value={userData.name}  onChange={(e)=>setUserData({...userData,name:e.target.value})} onKeyDown={handleKey}/>
                <input type="text" placeholder="Ingrese su email" name="email" value={userData.email}  onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                <input type="text" placeholder="Ingrese su numero" name="celular" value={userData.celular}  onChange={(e)=>setUserData({...userData,celular:e.target.value})}/>
                <button type="submit">Finalizar Compra</button>
            </form>
        </div>

    )



}

export default Form