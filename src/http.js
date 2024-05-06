export async function fetchAvailableMeals(){
    const response = await fetch('http://localhost:3000/meals');
    const meals = await response.json();
    if(!response.ok)
    {
        throw new Error('Failed to fetch meals');
    }

    return meals;
}

export async function updateUserMeals()
{
    
}

export async function fetchUserMeals()
{

}