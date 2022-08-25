import '../App.css'; 
import CartWidget from './CartWidget';

const Navbar = () =>{
    return (
        <div>
        <header>
        <h1>Fuego Sagrado</h1>
        </header>
        <nav>
            <a href="#">Catalogo</a>
            <a href="#">
                <CartWidget />
            </a>
        </nav>
        </div>
    );
}

export default Navbar;