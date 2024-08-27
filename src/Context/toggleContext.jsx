import React from "react";

export const Toggle = React.createContext();

function ToggleContext({ children }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Toggle.Provider value={{ toggle, setToggle }}>{children}</Toggle.Provider>
  );
}

export default ToggleContext;
