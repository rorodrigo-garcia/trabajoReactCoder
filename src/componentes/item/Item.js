import { Link } from "react-router-dom";
import '../item/Item.css'



const Item= ({e}) =>{

return(
    <div className="item-card">
        <h2>{e.personaje}</h2>
        <img src={e.img} alt="" />
        <h3>${e.valor}</h3>
        <Link to={`/itemDetail${e.id}`} >Ver mas</Link>
       

    </div>
)
}

export default Item;