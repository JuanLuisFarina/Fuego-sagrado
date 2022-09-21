import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";


const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
            alert('Añadido al carrito satisfactoriamente!');
            setItemCount(qty);
            }
    return(
        
        <div className="Item">
            <h3>{item.name}</h3>
            <img src={item.img} alt=''/>
            <p>{item.description}</p>
            <strong>{item.price}</strong>
            <p>Stock: {item.stock}</p>
            {/* <ItemCount stock={item.stock} /> */}
        
        {itemCount === 0 ? (
        <ItemCount onAdd={onAdd} stock={item.stock} initial={itemCount} />
        ) : (
        <div>
            <Link to="/cart">
            <button>CheckOut</button>
            </Link>
        </div>
        
    )}
        </div>
        );
}

export default ItemDetail;

