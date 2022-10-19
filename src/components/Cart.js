import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';


import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import {db} from '../Utils/firebaseConfig';


const Cart = () => {
    const test = useContext(CartContext);

  const createOrder = () => {
    const itemsForDB = test.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.costItem
    }));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Pulga Rodriguez",
        email: "PulgaR@gmail.com",
        phone: "123456789"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };

    console.log(order);

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    createOrderInFirestore()
      .then(result => alert('Orden creada. Toma nota del ID de tu orden.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));

    test.removeList();

  }

    return (
        <div className='cartcontext'>
            <h1>Carrito</h1>
            <div className='cart'>
                {
                    (test.cartList.length > 0)
                    ?<button onClick={test.removeList}>Borrar todo</button>
                    : <span>El carrito esta vacio</span>
                }
                <Link to='/'><button>Ir al catalogo</button></Link> 
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
                        <div>$ {test.calcTotalPerItem(item.idItem)} valor total</div>
                        </div>
                        )
                        : <h1></h1>
                    }
            </div>
            <h3>Total: $ {test.calcSubTotal()} </h3>
            <button onClick={createOrder}>Finalizar compra</button>
        </div>
    );
}

export default Cart;