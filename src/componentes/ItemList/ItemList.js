import Item from "../item/Item"
import "../ItemList/itemList.css"

const ItemList = ({ items }) => {
    return (
      <div className="container-cards">
        {items.map((e) => {
          return <Item key={e.id} e={e} />
        })}
      </div>
    )
  }
  
  export default ItemList