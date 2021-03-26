export default (state, action) => {
  switch (action.type) {
    case "addIngredient": {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case "addStep": {
      return {
        ...state,
        steps: action.payload,
      };
    }
    case "selectRecipe": {
      return action.payload;
    }
    case "decrementServing":
      return {
        ...state,
        servings: state.servings - 1,
      };
    case "incrementServing":
      return {
        ...state,
        servings: state.servings + 1,
      };
    case "reset": {
      return action.payload;
    }
    case "updateField": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
};
