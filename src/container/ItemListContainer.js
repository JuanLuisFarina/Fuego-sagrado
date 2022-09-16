// import { useEffect, useState } from "react";
// import Item from "../components/Item";
// import dataFromDB from "../Utils/Products";
// import CustomFetch from "../Utils/CustomFetch";


// const ItemListContainer = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//     CustomFetch(2000, dataFromDB)
//         .then((dataFromDB) => setData(dataFromDB))
//         .catch((err) => console.log(err));
//     }, []);

//         return (
//             <>
//                 {
//                 data.map(product => (
//                     <Item
//                     key={product.id}
//                     name={product.name}
//                     img={product.img}
//                     price={product.price}
//                     />              
//                     ))
//                 }
//             </>
//         )    
// }

// export default ItemListContainer;

import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import CustomFetch from "../Utils/CustomFetch";
import dataFromDB from "../Utils/Products";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const [data, setDatos] = useState([]);
  const { idCategory } = useParams();

  console.log(idCategory);

  useEffect(() => {
    CustomFetch(
      2000,
      dataFromDB.filter((item) => {
        if (idCategory === undefined) return item;
        return item.idCategory === idCategory;
      })
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);
  return (
    <>
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;