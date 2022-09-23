import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';




const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div>
            <h1>YOUR CART</h1>
            <div>
                <Link to='/'><button>CONTINUE SHOPPING</button></Link>
                {
                    (test.cartList.length > 0)
                    ? <button onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                    : <span>Your cart is empty</span>
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
                            <button onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                            </div>
                        </div>
                        <div>
                            <div>
                            <div>{item.qtyItem} item(s)</div>
                            </div>
                            <div>$ {item.costItem} each</div>
                        </div>
                        </div>
                        )
                        : <h1></h1>
                    }
            </div>
        </div>
    );
}

export default Cart;