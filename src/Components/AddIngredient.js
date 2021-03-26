import React, { useContext, useState } from "react";
import recipeContext from "../context/recipe/recipeContext";
import formValidation from "../utils/formValidation";

const initialIngredient = {
  name: "",
  amount: 0,
  measure: "",
};
export default function AddIngredient() {
  const { selectedRecipe, handleNewIngredient } = useContext(recipeContext);
  const [state, setState] = useState(initialIngredient);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const addIngredient = () => {
    const copySelectedRecipe = { ...selectedRecipe };
    copySelectedRecipe.ingredients.push(state);
    handleNewIngredient(copySelectedRecipe.ingredients);
    setState(initialIngredient);
  };

  return (
    <>
      <label>Name</label>
      <br />
      <input name={"name"} onChange={handleChange} value={state.name} />
      <br />
      <label>Amount</label>
      <br />
      <input
        name={"amount"}
        onChange={handleChange}
        type="number"
        value={state.amount}
      />
      <br />
      <label>Measure</label>
      <br />
      <input name={"measure"} onChange={handleChange} value={state.measure} />
      <br />
      <br />
      <button disabled={formValidation(state)} onClick={() => addIngredient()}>
        Add ingredient
      </button>
      {selectedRecipe.ingredients.map((ingredient, i) => (
        <>
          <label>Ingredient {i + 1}</label>
          {Object.keys(ingredient).map((key) => (
            <ul>
              {key}: {ingredient[key]}
            </ul>
          ))}
        </>
      ))}
    </>
  );
}
