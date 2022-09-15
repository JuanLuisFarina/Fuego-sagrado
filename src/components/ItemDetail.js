import ItemCount from "./ItemCount";


const ItemDetail = (props) =>{
    return(
        <div className="Item">
        <h3>{props.name}</h3>
        <img src={props.img} alt=''/>
        <p>{props.description}</p>
        <strong>{props.price}</strong>
        <p>Stock: {props.stock}</p>
        <ItemCount />
        </div>
    );
}

export default ItemDetail;