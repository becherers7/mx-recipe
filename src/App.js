import React, { useContext, useState } from "react";
import "./App.css";
import recipeContext from "./context/recipe/recipeContext";
import RecipeList from "./pages/RecipeList";
import Recipe from "./pages/Recipe";

function App() {
  const { recipes, selectedRecipe, selectRecipe } = useContext(recipeContext);
  const [showRecipe, setShow] = useState(false);
  const handleRecipeClick = (index) => {
    setShow(true);
    selectRecipe(recipes[index]);
  };
  return (
    <div className="App">
      <RecipeList
        handleRecipeClick={handleRecipeClick}
        recipes={recipes}
        selectRecipe={selectRecipe}
        setShow={setShow}
      />
      {showRecipe && <Recipe selectedRecipe={selectedRecipe} />}
    </div>
  );
}

export default App;
