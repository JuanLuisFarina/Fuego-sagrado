

const Item = (props) =>{
    return(
        <div className="Item">
        <h3>{props.name}</h3>
        <img src={props.img} alt=''/>
        <strong>{props.price}</strong>
        </div>
    );
}

export default Item;