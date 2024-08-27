import React from "react";

export const FormContext = React.createContext();

function UseFormContext({ children }) {
  const [formData, setFormData] = React.useState({
    name: "name",
    cookTime: "cooktime",
    servings: "1",
    instructions: "2",
    ingredients: [
      {
        name: "3",
        amount: "4",
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
