import React, { Fragment, useContext, useState } from "react";
import recipeContext from "../context/recipe/recipeContext";
import CreateRecipe from "./CreateRecipe";

export default function RecipeList({ handleRecipeClick, recipes, setShow }) {
  const [formVisibility, setFormVisibility] = useState(false);
  const { resetSelectedRecipe } = useContext(recipeContext);

  const handleNewRecipe = () => {
    setShow(false);
    setFormVisibility(true);
    resetSelectedRecipe();
  };
  return (
    <>
      {formVisibility ? (
        <CreateRecipe setFormVisibility={setFormVisibility} />
      ) : (
        <>
          <h2>Choose a recipe!</h2>
          <button onClick={() => handleNewRecipe()}>Create new recipe</button>
          {recipes.map((recipe, index) => (
            <Fragment key={recipe.title}>
              <h4 onClick={() => handleRecipeClick(index)}>{recipe.title}</h4>
            </Fragment>
          ))}
        </>
      )}
    </>
  );
}
