import CartContext from "../store/CartContext.jsx";
import { useContext, useEffect, useState } from "react";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
export default function MealItem({meal})
{
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart()
    {
        cartCtx.addItem(meal)
    }
    return(
            <li key={meal.id} className="meal-item">
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
                <h2>{meal.name}</h2>
                <h1 className="meal-item-price">{currencyFormatter.format(meal.price)}</h1>
                <p className="description">{meal.description}</p>
                <Button onClick={handleAddMealToCart}>Add to Cart</Button>
            </li>
    );
}