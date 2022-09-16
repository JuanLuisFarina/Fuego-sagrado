    // import { useEffect, useState } from "react";
    // import ItemCount from "../components/ItemCount";
    // import dataFromDB from "../Utils/Products";
    // import CustomFetch from "../Utils/CustomFetch";
    // import ItemDetail from "../components/ItemDetail";
    // import { useParams } from "react-router";
    
    
    // const ItemDetailContainer = () => {
    //     const [data, setData] = useState([]);
    //     const { idItem } = useParams();

    //     useEffect(() => {
    //         CustomFetch(2000, dataFromDB.find(item => item.id === parseInt(idItem)))
    //             .then(result => setData(result))
    //             .catch(err => console.log(err))
    //     }, []);
    
    //         return (
    //             <>
    //             {
    //             data.map(data => (
    //                 <ItemDetail
    //                         key={data.id}
    //                         name={data.name}
    //                         img={data.img}
    //                         description={data.description}
    //                         price={data.price}
    //                         stock={data.stock} 
    //                     />  
    //                 ))
    //                 }
    //                 <ItemCount />   
    //             </>
    //         )    
    // }
    
    // export default ItemDetailContainer;  

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import CustomFetch from "../Utils/CustomFetch";
import dataFromDB from "../Utils/Products";

const ItemDetailContainer = () => {
  const [data, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    CustomFetch(
      2000,
      dataFromDB.find((item) => item.id === parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail item={data} />
    </>
  );
};

export default ItemDetailContainer;