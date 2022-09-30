
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
// import CustomFetch from "../Utils/CustomFetch";
// import dataFromDB from "../Utils/Products";
import { firestoreFetchOne } from "../Utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [data, setDato] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)

      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body">
      <ItemDetail item={data} />
    </div>
  );
};

export default ItemDetailContainer;