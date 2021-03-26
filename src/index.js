import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RecipeState from "./context/recipe/RecipeState";

ReactDOM.render(
  <RecipeState>
    <App />
  </RecipeState>,
  document.getElementById("root")
);
