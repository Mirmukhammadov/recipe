import React from "react";
import "./forma.css";
import { useForm, useFieldArray } from "react-hook-form";
import Input from "../input/input";
import Button from "../button/button";
import { FormContext } from "../../Context/useFormContext.jsx";
import { RecipeData } from "../../Context/recipeContext.jsx";
import { Toggle } from "../../Context/toggleContext.jsx";
import { Edit } from "../../Context/editContext.jsx";

function Forma() {
  const { toggle, setToggle } = React.useContext(Toggle);
  const { formData, setFormData } = React.useContext(FormContext);
  const { recipe, setRecipe } = React.useContext(RecipeData);
  const { edit, setEdit } = React.useContext(Edit);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: [{ name: "", amount: "" }],
    },
  });

  React.useEffect(() => {
    if (formData) {
      for (const [key, value] of Object.entries(formData)) {
        setValue(key, value);
      }
    }
  }, [formData, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      const formattedData = {
        ...data,
        ingredients: data.ingredients,
      };

      setFormData(formattedData);

      setRecipe((prev) => {
        let updatedRecipes;
        if (edit !== null) {
          updatedRecipes = [...prev];
          updatedRecipes[edit] = formattedData;
        } else {
          updatedRecipes = [...prev, formattedData];
        }
        localStorage.setItem("recipe", JSON.stringify(updatedRecipes));
        return updatedRecipes;
      });

      setEdit(null);
      setFormData(null);
      reset();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  function handleX() {
    setToggle(false);
    reset();
  }

  return (
    <div className="form-div" onKeyDown={handleKeyDown}>
      <div>
        <Button className="form-btn" text="X" onClick={handleX} />
      </div>
      <form className={`forma`} onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          type="text"
          text="Name"
          control={control}
          name="recipeName"
          rules={{ required: true }}
        />
        <Input
          id="cook-time"
          type="text"
          text="Cook Time"
          control={control}
          name="cookTime"
          rules={{ required: true }}
        />
        <Input
          id="servings"
          type="text"
          text="Servings"
          control={control}
          name="servings"
          rules={{ required: true }}
        />
        <div className="forma-div">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            cols={50}
            rows={8}
            {...control.register("instructions", {
              required: true,
            })}
          />
        </div>

        <div className="form-btm">
          <h2>Ingredients</h2>
          {fields.map((item, index) => (
            <div className="forma-div forma-div-btn" key={item.id}>
              <Input
                id={`ingredient-name-${index}`}
                type="text"
                text="Name"
                secondary="secondary"
                control={control}
                name={`ingredients[${index}].name`}
                rules={{ required: true }}
              />
              <Input
                id={`ingredient-amount-${index}`}
                type="text"
                text="Amount"
                secondary="secondary"
                control={control}
                name={`ingredients[${index}].amount`}
                rules={{ required: true }}
              />
              <div>
                <Button
                  type="secondary"
                  text="X"
                  onClick={() => remove(index)}
                />
              </div>
            </div>
          ))}
          <div>
            <Button
              type="primary"
              text="Add Ingredient"
              onClick={() => append({ name: "", amount: "" })}
            />
          </div>
        </div>

        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
}

export default Forma;
