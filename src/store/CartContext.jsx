import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const updatedItems = [...state.items];
        
        if(existingCartItemIndex > -1)
        {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return { ...state, items: updatedItems};
    }

    if(action.type ==='REMOVE_ITEM')
    {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const exisitngCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if(exisitngCartItem.quantity === 1)
        {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...exisitngCartItem,
                quantity: exisitngCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {...state, items: updatedItems};
    }

    return state;
}

export function CartContextProvider({children}){

    const [cart, dispatchCartAction] = useReducer(cartReducer, {
        items: []
    });

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };

    function addItem(item)
    {
        dispatchCartAction({ type: 'ADD_ITEM', item});
    }

    function removeItem(id)
    {
        dispatchCartAction({ type: 'REMOVE_ITEM', id});
    }

    console.log(cartContext);
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;