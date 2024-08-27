import React from "react";

import Button from "../button/button.jsx";

import { FormContext } from "../../Context/useFormContext.jsx";
import { RecipeData } from "../../Context/recipeContext.jsx";
import { Toggle } from "../../Context/toggleContext.jsx";
import { Edit } from "../../Context/editContext.jsx";

import "./recipe.css";

function Recipe() {
  const { formData, setFormData } = React.useContext(FormContext);
  const { recipe, setRecipe } = React.useContext(RecipeData);
  const { toggle, setToggle } = React.useContext(Toggle);
  const { edit, setEdit } = React.useContext(Edit);

  function deleteRecipe(e) {
    setRecipe((prev) => {
      const newRecipe = prev.filter((_, i) => i !== e);
      localStorage.setItem("recipe", JSON.stringify(newRecipe));
      return newRecipe;
    });
  }

  function editRecipe(e) {
    console.log(recipe[e]);
    setFormData(recipe[e]);
    setToggle(true);
    setEdit(e);
  }

  return (
    <div className={`recipe `}>
      <ul>
        {recipe.map((item, index) => {
          return (
            <li key={index}>
              <div className="recipe-top">
                <h1>{item.recipeName}</h1>
                <div className="recipe-top-btn">
                  <Button
                    type="primary"
                    text="Edit"
                    onClick={() => editRecipe(index)}
                  />
                  <Button
                    type="secondary"
                    text="Delete"
                    onClick={() => deleteRecipe(index)}
                  />
                </div>
              </div>

              <p>
                Cooktime: <span>{item.cookTime}</span>
              </p>
              <p>
                Servings: <span>{item.servings}</span>
              </p>
              <p>
                Instructions: <span>{item.instructions}</span>
              </p>
              <p>
                Ingredients:
                <ul className="ingredients-list">
                  {item.ingredients.map((ingredient, i) => (
                    <li key={i}>
                      {ingredient.name} {ingredient.amount}
                    </li>
                  ))}
                </ul>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipe;
