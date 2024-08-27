import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

import Button from "./components/button/button.jsx";
import Forma from "./components/forma/forma.jsx";
import Recipe from "./components/recipe/recipe.jsx";
import { Toggle } from "./Context/toggleContext.jsx";

function App() {
  const { toggle, setToggle } = React.useContext(Toggle);
  console.log(toggle, "toggle||");
  return (
    <div className="main">
      <div className="main-left">
        <Recipe />
        <div className="main-btn">
          <Button
            type="primary"
            text="Add Recipe"
            onClick={() => setToggle(true)}
          />
        </div>
      </div>
      <span className="line"></span>
      <div className={`main-right ${toggle ? "show" : "hide"}`}>
        <Forma />
      </div>
    </div>
  );
}

export default App;
