import { useContext, useEffect, useState } from "react";
import { fetchAvailableMeals } from "../http.js";


import MealItem from "./MealItem.jsx";
export default function Products()
{

    const [isFetching, setIsFetching] = useState(false);
    const [availableMeals, setAvailableMeals] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchMeals()
        {
            setIsFetching(true);

            try{
                const meals = await fetchAvailableMeals();
                setAvailableMeals(meals);

            } catch(error)
            {
                setError({message: error.message || 'Could not fetch meals'});
                setIsFetching(false);
            }

            setIsFetching(false);
        }
        fetchMeals();
    }, []);


    return(
        <section>
            {isFetching && <p>Loading meals data</p>}
            {!isFetching && availableMeals.length === 0 && <p>No meals available</p>}
            {!isFetching && availableMeals.length > 0 && (
                <ul id="meals">
                {availableMeals.map((meal) => (
                    <MealItem key={meal.id} meal={meal}/>
                ))}
            </ul>
            )}
        </section>
    );
}