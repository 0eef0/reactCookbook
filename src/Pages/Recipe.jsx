import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Recipe = ({setPath}) => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");

    const [recipe, setRecipe] = useState();

    const getRecipe = async () => {
        const { data: {recipe} } = await axios.get(`https://roldan-personal-recipes.herokuapp.com/api/v1/recipes/${id}`);
        await setPath(recipe.recipeName);
        setRecipe(recipe);
    }

    useEffect(() => {
        getRecipe();
    }, []);

    if(recipe) {
        return (
            <div id="indRecipe">
                <div id="leftHalf">
                    <img src={recipe.recipeImg} alt={recipe.recipeName} />
                    <div id="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            {
                                recipe.recipeIngredients.map(ingredient => {
                                    return <li key={ingredient.name}>{ ingredient.quantity } { ingredient.name }</li>
                                })
                            }
                        </ul>
                    </div>
                    <div id="tools">
                        <h3>Tools</h3>
                        <ul>
                            {
                                recipe.recipeTools.map(tool => {
                                    return <li key={tool.name}>{ tool.size } { tool.name }</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div id="rightHalf">
                    <div id="steps">
                        <h3>Steps</h3>
                        <ol>
                            {
                                recipe.recipeSteps.map(step => {
                                    return <li key={step}>{ step }</li>
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe