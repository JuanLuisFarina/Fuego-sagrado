
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.length > 0 ? (
        data.map((product) => (
          <Item
            name={product.name}
            img={product.img}
            precio={product.precio}
            id={product.id}
          />
        ))
      ) : (
        <p className="loading">Cargando...</p>
      )}
    </>
  );
};

export default ItemList;