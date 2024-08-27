import React from "react";

export const Edit = React.createContext();

function EditContext({ children }) {
  const [edit, setEdit] = React.useState(null);
  return <Edit.Provider value={{ edit, setEdit }}>{children}</Edit.Provider>;
}

export default EditContext;
