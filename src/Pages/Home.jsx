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
                    return <div key={recipe.recipeName}>
                        <img src={recipe.recipeImg} alt={recipe.recipeName} />
                        <h2>{recipe.recipeName}</h2>
                        <h3>Ingredients</h3>
                        <ul>
                            {
                                recipe.recipeIngredients.map(ingredient => {
                                    return <li>{ingredient.quantity} {ingredient.name}</li>
                                })
                            }
                        </ul>
                        <h3>Tools</h3>
                        <ul>
                            {
                                recipe.recipeTools.map(tool => {
                                    return <li>{tool.size} {tool.name.toLowerCase()}</li>
                                })
                            }
                        </ul>
                        <h3>Steps</h3>
                        <ol>
                            {
                                recipe.recipeSteps.map(step => {
                                    return <li>{step}</li>
                                })
                            }
                        </ol>
                    </div>
                }) 
            }
        </div>
    )
}

export default Home
