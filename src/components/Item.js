const Item = (props) =>{
    return(
        <>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <strong>{props.price}</strong>
        </>
    );
}

export default Item;