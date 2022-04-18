import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const { data: { recipe } } = await axios.get('https://roldan-personal-recipes.herokuapp.com/api/v1/recipes');
        setRecipes(recipe);
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div>
            {
                recipes.map(recipe => {
                    return <p key={recipe.recipeName}>{ recipe.recipeName }</p>
                }) 
            }
        </div>
    )
}

export default Home
