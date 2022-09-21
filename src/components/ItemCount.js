import { useState } from "react";
import { Link } from "react-router-dom";



const ItemCount = ({stock = 1, onAdd, initial = 0}) => {
    const [unit, setUnits] = useState(initial);

    const increment = () => {
        if (unit < stock){
            setUnits(unit+1);
        }
    }
    const decrement = () =>{
        if ((unit > 1) && (stock =! 0)){
            setUnits(unit-1);
        }
    }

    // const checkout = () => {
    //         <>
    //         <p>Agregado al carrito satisfactoriamente!</p>
    //         <Link to={"/Cart"}>
    //             <button>CheckOut</button>
    //         </Link>
    //         </>

    // }

    return(
        <>
        <div className="button">
        <button onClick={increment}>+</button>
        <p>{unit} Unidades</p>
        <button onClick={decrement}>-</button>
        </div>
        <br />
        <button className="cart" onClick={() => onAdd(unit)}>Añadir al carrito</button>
        
        </>
    );
}

export default ItemCount;
