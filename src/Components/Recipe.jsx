import React from 'react'

const Recipe = ({recipe}) => {
  return (
        <div className="recipe">
            <img src={recipe.recipeImg} alt={recipe.recipeName} />
            <h2>{recipe.recipeName}</h2>
            {/* <h3>Ingredients</h3>
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
            </ol> */}
        </div>
  )
}

export default Recipe