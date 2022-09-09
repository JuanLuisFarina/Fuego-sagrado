import { useEffect, useState } from "react";
import Item from "../components/Item";




const ItemListContainer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
    const dataFromBD = [
        {
            name: "Cuchillo Bowie",
            img: '../assets/Cuchillo_Bowie.jpeg',
            description: "Cuchillo de 20CM producido con material de disco de arado. Cabo de madera con detalles de acero inoxidable.",
            price: "$5000ars",
            stock: 4,
        },
        {
            name: "Delantal de cocina",
            img: "../assets/Delantales.jpeg",
            description: "Distintos diseño de estampa. Confeccionadoa en jean y cuero. Regulable a la altura del cuello y la cintura.",
            price: "$4000ars",
            stock: 4,
        },
        {
            name: "Provoletera",
            img: "../assets/Provoletera.jpeg",
            description: "Provoleteras de aluminio. Disponibles en su version con mango o con base de madera",
            price: "$3500ars",
            stock: 4,
        },
        {
            name: "Sacacorchos",
            img: "../assets/Sacacorchos.jpeg",
            description: "Sacacorchos de laminas ideal para vinos añejos.",
            price: "$2000ars",
            stock: 4,
        },
    ];
    setData(dataFromBD);
    }, []);

    setTimeout(() =>{
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
    }, 2000)
}

export default ItemListContainer;
