import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({recipe}) => {
  return (
        <div className="recipe">
            <img src={recipe.recipeImg} alt={recipe.recipeName} />
            <h3>{recipe.recipeName}</h3>
            <Link to={`/recipe?id=${recipe._id}`}>View Recipe</Link>
        </div>
  )
}

export default Recipe