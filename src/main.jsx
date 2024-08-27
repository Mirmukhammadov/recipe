import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ToggleContext from "./Context/toggleContext.jsx";
import UseFormContext from "./Context/useFormContext.jsx";
import RecipeContext from "./Context/recipeContext.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ToggleContext>
      <UseFormContext>
        <RecipeContext>
          <App />
        </RecipeContext>
      </UseFormContext>
    </ToggleContext>
  </React.StrictMode>
);
