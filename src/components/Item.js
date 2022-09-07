import ItemCount from "./ItemCount";

const Item = (props) =>{
    return(
        <>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <strong>{props.price}</strong>
        <p>Stock: {props.stock}</p>
        <ItemCount />
        </>
    );
}

export default Item;