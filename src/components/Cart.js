import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';




const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div className='cartcontext'>
            <h1>Carrito</h1>
            <div>
            <Link to='/'><button>Ir al catalogo</button></Link> 
                {
                    (test.cartList.length > 0)
                    ?<button onClick={test.removeList}>Borrar todo</button>
                    : <span>El carrito esta vacio</span>
                }
            </div>
            <div>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <div key={item.idItem}>
                        <div>
                            <img src={item.imgItem} />
                            <div>
                            <span>
                                <b>Product:</b> {item.nameItem}
                            </span>
                            <button onClick={() => test.deleteItem(item.idItem)}>Borrar</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{item.qtyItem} item(s)</div>
                            </div>
                                <div>$ {item.costItem} C/U</div>
                        </div>
                        <div>$ {test.calcTotalPerItem(item.idItem)}</div>
                        </div>
                        )
                        : <h1></h1>
                    }
            </div>
            <h3>Total: $ {test.calcSubTotal()} </h3>
        </div>
    );
}

export default Cart;