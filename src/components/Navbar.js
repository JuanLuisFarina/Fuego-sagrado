import { Link } from 'react-router-dom';
import '../App.css'; 
import CartWidget from './CartWidget';

const Navbar = () =>{
    return (
        <div className='header'>
        <header>
            <h1>
                <Link to={`/`}>Fuego Sagrado</Link>
            </h1>
        </header>
        <nav> 
            <Link to={`/category/indumentaria`}> Indumentaria </Link>
            <Link to={`/category/accesorios`}> Accesorios </Link>
            <Link to={`/category/utensilios`}> Utensilios  </Link>
            <Link to={"/Cart"}> <CartWidget /> </Link>
        </nav>
        <hr />
        </div>
    );
}

export default Navbar;