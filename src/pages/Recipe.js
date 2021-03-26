import React from "react";
import RecipeMeta from "../Components/RecipeMeta";
import RecipeIngredients from "../Components/RecipeIngredients";
import RecipeSteps from "../Components/RecipeSteps";

export default function Recipe({ selectedRecipe }) {
  return (
    <div className="App">
      <RecipeMeta
        title={selectedRecipe.title}
        time={selectedRecipe.timeToMake}
        servings={selectedRecipe.servings}
      />
      <RecipeIngredients ingredients={selectedRecipe.ingredients} />
      <RecipeSteps steps={selectedRecipe.steps} />
    </div>
  );
}
