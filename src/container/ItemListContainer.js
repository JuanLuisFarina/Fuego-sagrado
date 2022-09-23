
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

  useEffect(() => {
    return (() => {
        setDatos([]);
    })
}, []);

  return (
    <div className="body">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;