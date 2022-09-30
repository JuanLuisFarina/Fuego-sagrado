
import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
// import CustomFetch from "../Utils/CustomFetch";
// import dataFromDB from "../Utils/Products";
import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Utils/firebaseConfig";
import { firestoreFetch } from "../Utils/firestoreFetch";



const ItemListContainer = () => {
  const [data, setDatos] = useState([]);
  const { idCategory } = useParams();

  console.log(idCategory);

  useEffect(() => {
    firestoreFetch(idCategory)
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