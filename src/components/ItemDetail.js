import ItemCount from "./ItemCount";


const ItemDetail = ({item}) =>{
    return(
        <div className="Item">
        <h3>{item.name}</h3>
        <img src={item.img} alt=''/>
        <p>{item.description}</p>
        <strong>{item.price}</strong>
        <p>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} />
        </div>
    );
}

export default ItemDetail;

