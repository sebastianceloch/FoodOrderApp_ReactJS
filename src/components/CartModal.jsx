import Cart from "./Cart.jsx";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const CartModal = forwardRef(function Modal({title, actions}, ref){

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open: () => {
                dialog.current.showModal();
            },
        };
    });



return createPortal(
    <dialog ref={dialog} className="modal">
        <h2>{title}</h2>
        <Cart/>
        <form method="dialog">
            {actions}
        </form>
    </dialog>,
    document.getElementById('modal')
    );
});
export default CartModal;