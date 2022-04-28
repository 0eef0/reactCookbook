import React, { useState, useEffect } from 'react';
import Recipe from '../Components/Recipe';
import axios from 'axios';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const { data: { recipe } } = await axios.get('https://roldan-personal-recipes.herokuapp.com/api/v1/recipes');
        setRecipes(recipe);
    }

    useEffect(() => {
        getRecipes();
    }, []);

  return (
    <div id='recipes'>
        {
            recipes.map(recipe => {
                return <Recipe recipe={recipe} key={recipe.recipeName} />
            }) 
        }
    </div>
  )
}

export default Recipes