import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from '../util/formatting.js';

export default function Cart()
{

    const {items, addItem, removeItem} = useContext(CartContext);
    const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    console.log(items);
    return(
        <div className="cart">
            {items.length === 0 && <p>No items in cart</p>}
            {items.length > 0 && (
                <>
                <ul>
                    {items.map((item) => {

                        return(
                            <li key={item.id} className="cart-item">
                                <div>
                                    <p>{item.name}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button>
                                        -
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button >
                                        +
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
                </>
            )}
        </div>
    );
}