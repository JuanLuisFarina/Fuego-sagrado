import { useState } from "react";



const ItemCount = ({stock = 1}) => {
    const [unit, setUnits] = useState(1);

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

    return(
        <>
        <div className="button">
        <button onClick={increment}>+</button>
        <p>{unit} Unidades</p>
        <button onClick={decrement}>-</button>
        </div>
        <br />
        <button>Añadir al carrito</button>
        </>
    );
}

export default ItemCount;
