import React, { useReducer, useState } from "react";
import recipeData from "../../configs/recipeData";
import recipeContext from "./recipeContext";
import { emptyRecipe } from "../../configs/emptyRecipe";
import recipeReducer from "./recipeReducer";

const RecipeState = (props) => {
  const [state, setState] = useState([recipeData()]);
  const [selectedRecipe, dispatch] = useReducer(recipeReducer, emptyRecipe);

  const handleNewRecipe = (data) => {
    const copyState = [...state];
    copyState.push(data);
    setState(copyState);
    resetSelectedRecipe();
  };

  const handleRecipeChange = (event) =>
    dispatch({ type: "updateField", payload: event.target });

  const handleNewIngredient = (ingredients) =>
    dispatch({ type: "addIngredient", payload: ingredients });

  const handleNewStep = (steps) =>
    dispatch({ type: "addStep", payload: steps });

  const resetSelectedRecipe = () =>
    dispatch({ type: "reset", payload: emptyRecipe });

  const selectRecipe = (recipe) =>
    dispatch({ type: "selectRecipe", payload: recipe });

  return (
    <recipeContext.Provider
      value={{
        decrementServing: () => dispatch({ type: "decrementServing" }),
        handleNewIngredient,
        handleNewStep,
        handleNewRecipe,
        handleRecipeChange,
        incrementServing: () => dispatch({ type: "incrementServing" }),
        recipes: state,
        resetSelectedRecipe,
        selectedRecipe: selectedRecipe,
        selectRecipe,
      }}
    >
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeState;
