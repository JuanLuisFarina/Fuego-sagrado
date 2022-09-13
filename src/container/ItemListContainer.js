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
                    name={product.name}
                    img={product.img}
                    description={product.description}
                    price={product.price}
                    stock={product.stock}
                    />              
                    ))
                } 
            </>
        )    
}

export default ItemListContainer;
