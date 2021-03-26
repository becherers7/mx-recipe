import React, { useContext } from "react";
import recipeContext from "../context/recipe/recipeContext";

function RecipeMeta(props) {
  const { decrementServing, incrementServing } = useContext(recipeContext);
  return (
    <div className="recipe-meta">
      <h1>{props.title}</h1>
      <div>
        <p>Time: {props.time}</p>
        <p>Servings: {props.servings}</p>
        <button onClick={() => decrementServing()}>Decrease</button>
        <button onClick={incrementServing}>Increase</button>
      </div>
    </div>
  );
}

export default RecipeMeta;
