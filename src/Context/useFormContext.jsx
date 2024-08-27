import React from "react";

export const FormContext = React.createContext();

function UseFormContext({ children }) {
  const [formData, setFormData] = React.useState({
    name: "",
    cookTime: "",
    servings: "",
    instructions: "",
    ingredients: [
      {
        name: "",
        amount: "",
      },
    ],
  });
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export default UseFormContext;
