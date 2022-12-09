import { Link } from "react-router-dom";
import '../item/Item.css'
import Contador from "../ItemCount/ItemCount";


const Item= ({e}) =>{

return(
    <div className="item-card">
        <h2>{e.personaje}</h2>
        <img src={e.img} alt="" />
        <h3>${e.valor}</h3>
        <Link to={`/itemDetail${e.id}`} >Ver mas</Link>
        <Contador initial={1} stock={7}/>

    </div>
)
}

export default Item;