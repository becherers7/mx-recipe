import React, { useContext, useState } from "react";
import recipeContext from "../context/recipe/recipeContext";
import "../App.css";

export default function AddRecipeStep() {
  const { selectedRecipe, handleNewStep } = useContext(recipeContext);
  const [state, setState] = useState("");
  const handleChange = (event) => setState(event.target.value);
  const addStep = () => {
    const copySelectedRecipe = { ...selectedRecipe };
    copySelectedRecipe.steps.push(state);
    handleNewStep(copySelectedRecipe.steps);
    setState("");
  };

  return (
    <>
      <label>Recipe steps</label>
      <input onChange={handleChange} name="step" value={state} />
      <br />
      <br />
      <button disabled={!state.length ? true : false} onClick={addStep}>
        Add step
      </button>
      <div className="scroll-y">
        {selectedRecipe.steps.map((step, i) => (
          <>
            <label>Step {i + 1}</label>
            <ul>{step}</ul>
          </>
        ))}
      </div>
    </>
  );
}
