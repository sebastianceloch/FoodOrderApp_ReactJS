import { useContext, useRef } from 'react';
import LogoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import CartModal from './CartModal.jsx';

export default function Header()
{
    const cartCtx = useContext(CartContext);
    const modal = useRef();

    function handleOpenCart()
    {
        modal.current.open();
    }

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    let modalActions = <button className='button'>Close</button>;

    if(totalCartItems > 0)
    {
        modalActions = (
            <>
            <div>
                <button className='button'>Close</button>
                <button className='button'>Checkout</button>
            </div>
            </>
        )
    }

    return(
        <>
        <CartModal ref={modal} title="Cart" actions={modalActions}/>
        <header id="main-header">
        <div id="title">
            <img src={LogoImg} alt="Just a logo"/>
            <h1>REACTFOOD</h1>
        </div>
        <Button textOnly onClick={handleOpenCart}>Cart ({totalCartItems})</Button>
        </header>
        </>
    );

}