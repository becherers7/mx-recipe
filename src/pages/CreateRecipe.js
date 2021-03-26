import React, { useContext } from "react";
import "../App.css";
import recipeContext from "../context/recipe/recipeContext";
import formValidation from "../utils/formValidation";
import AddIngredient from "../Components/AddIngredient";
import AddRecipeStep from "../Components/AddRecipeStep";

export default function CreateRecipe({ setFormVisibility }) {
  const {
    resetSelectedRecipe,
    handleNewRecipe,
    handleRecipeChange,
    selectedRecipe,
  } = useContext(recipeContext);
  const { servings, timeToMake, title } = selectedRecipe;

  const handleCancel = () => {
    setFormVisibility(false);
    resetSelectedRecipe();
  };

  const handleSave = (data) => {
    setFormVisibility(false);
    handleNewRecipe(data);
  };

  return (
    <>
      <h2>Create new recipe!</h2>
      <div className="flex-container">
        <div>
          <h4>General Details</h4>
          <label>Title</label>
          <br />
          <input name={"title"} onChange={handleRecipeChange} value={title} />
          <br />
          <label>Time to make</label>
          <br />
          <input
            name={"timeToMake"}
            onChange={handleRecipeChange}
            value={timeToMake}
          />
          <br />
          <label>Servings</label>
          <br />
          <input
            name={"servings"}
            onChange={handleRecipeChange}
            value={servings}
          />
          <br />
          <br />
          <button
            style={{ marginRight: "10px" }}
            disabled={formValidation(selectedRecipe)}
            onClick={() => handleSave(selectedRecipe)}
          >
            Save
          </button>
          <button onClick={() => handleCancel()}>Cancel</button>
        </div>
        <div>
          <h4>Recipe ingredients</h4>

          <AddIngredient />

          <br />
        </div>
        <div>
          <h4>Recipe steps</h4>

          <AddRecipeStep />
          <br />
        </div>
      </div>
      <br />
    </>
  );
}
