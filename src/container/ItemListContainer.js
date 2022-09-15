import { useEffect, useState } from "react";
import Item from "../components/Item";
import dataFromDB from "../Utils/Products";
import CustomFetch from "../Utils/CustomFetch";


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    CustomFetch(2000, dataFromDB)
        .then((dataFromDB) => setData(dataFromDB))
        .catch((err) => console.log(err));
    }, []);

        return (
            <>
                {
                data.map(product => (
                    <Item
                    key={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                    />              
                    ))
                }
                <button><link to='/item/{product.ID}'>Detalles</link></button>
            </>
        )    
}

export default ItemListContainer;
