import React from "react";
function RecipeView({ recipeData, deleteRecipe }) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

        return (
          <tr>
            <td>{recipeData.name}</td>
            <td>{recipeData.cuisine}</td>
            <td><img src={recipeData.photo} alt="Posted Image" /></td>
            <td className="content_td"><p>{recipeData.ingredients}</p></td>
            <td className="content_td"><p>{recipeData.preparation}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>
        Delete
      </button></td>
        
      </tr>
    );
      }

export default RecipeView;