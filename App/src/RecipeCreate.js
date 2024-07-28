import React, { useState } from "react";

function RecipeCreate({onUpdateRecipe}) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };
  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };
  const handlePreparationChange = (event) => {
    setPreparation(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe={
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation
    };
    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
    onUpdateRecipe(newRecipe);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input id="name" name="name" required={true} onChange={handleNameChange} />
            </td>
            <td><input id="cuisine" name="cuisine" required={true} onChange={handleCuisineChange} />
            </td>
            <td><input id="photo" name="photo" type="url" required={true} onChange={handlePhotoChange}/></td>
            <td><textarea id="ingredients" name="ingredients" rows={3} required={true} onChange={handleIngredientsChange} />
            </td>
            <td><textarea id="preparation" name="preparation" rows={3} required={true} onChange={handlePreparationChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
