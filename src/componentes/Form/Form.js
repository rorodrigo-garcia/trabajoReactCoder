import { useState } from "react"

const Form =() =>{
   
    
    //  const   [name,setName] = useState("")
    //  const   [lastName,setLastName] = useState("")
     const [userData , setUserData] = useState({name:"", lastName:""})
     
     const handleSubmit=(evento)=>{
        evento.preventDefault()
       console.log(userData)
     }


     const handleKey = (e)=>{
            console.log(handleKey)
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
                <input type="text" placeholder="Nombre" name="name" value={userData.namename}  onChange={(e)=>setUserData({...userData,name:e.target.value})} onKeyDown={handleKey}/>
                <input type="text" placeholder="Apellido" name="lastName" value={userData.lastName}  onChange={(e)=>setUserData({...userData,lastName:e.target.value})}/>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )



}

export default Form