import { Link } from 'react-router-dom';

const Item = ({name, img, price, id}) =>{
    return(
        <div className="Item">
        <h3>{name}</h3>
        <img src={img} alt=''/>
        <strong>{price}</strong>
        <button><Link to={`/item/${id}`}>Detalles</Link></button>
        </div>
    );
}

export default Item;