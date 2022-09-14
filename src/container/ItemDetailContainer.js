    import { useEffect, useState } from "react";
    import ItemCount from "../components/ItemCount";
    import dataFromDB from "../Utils/Products";
    import CustomFetch from "../Utils/CustomFetch";
    import ItemDetail from "../components/ItemDetail";
    
    
    const ItemDetailContainer = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
        CustomFetch(2000, dataFromDB)
            .then((dataFromDB) => setData(dataFromDB))
            .catch((err) => console.log(err));
        }, []);
    
            return (
                <>
                    <ItemDetail
                            key={product.id}
                            name={product.name}
                            img={product.img}
                            description={product.description}
                            price={product.price}
                            stock={product.stock} 
                        />                                                                               
                    <ItemCount />   
                </>
            )    
    }
    
    export default ItemDetailContainer;                    