import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from './CartContext';


const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
            alert('Añadido al carrito satisfactoriamente!');
            setItemCount(qty);
            test.addToCart(item, qty);
            }
    return(
        
        <div className="Item">
            <h3>{item.name}</h3>
            <img src={item.img} alt=''/>
            <p>{item.description}</p>
            <strong>{item.price}</strong>
            <p>Stock: {item.stock}</p>
        
        {itemCount === 0 ? (
        <ItemCount onAdd={onAdd} stock={item.stock} initial={itemCount} />
        ) : (
        <div>
            <Link to="/cart">
            <button>Ir al carrito</button>
            </Link>
        </div>
        
    )}
        </div>
        );
}

export default ItemDetail;

