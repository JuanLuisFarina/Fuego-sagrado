import { NavLink } from 'react-router-dom';
import '../App.css'; 
import CartWidget from './CartWidget';

const Navbar = () =>{
    return (
        <div>
        <header>
            <h1><link to='/'>Fuego Sagrado</link></h1>
        </header>
        <nav> 
            <a><link to='/'> Catalogo </link></a>
            <a href="#">
                <CartWidget />
            </a>
        </nav>
        </div>
    );
}

export default Navbar;