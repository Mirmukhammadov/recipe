import React from "react";

export const RecipeData = React.createContext();

function RecipeContext({ children }) {
  const [recipe, setRecipe] = React.useState(
    JSON.parse(localStorage.getItem("recipe")) || []
  );
  return (
    <div>
      <RecipeData.Provider value={{ recipe, setRecipe }}>
        {children}
      </RecipeData.Provider>
    </div>
  );
}

export default RecipeContext;
