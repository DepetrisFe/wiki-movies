import React from "react";
import "./Switch.css";
//import Portada from "./Portada";

const Switch = () => {
  return (
    <div className="mainContainer">
      <div className="switchBar">
        <button className="leftSwitch" onClick={() => console.log("boton 1")}>
          Highest rated movies
        </button>
        <button className="middleSwitch" onClick={() => console.log("boton 2")}>
          Popular Movies
        </button>
        <button className="rightSwitch" onClick={() => console.log("boton 3")}>
          Popular movies for kids
        </button>
      </div>
    </div>
  );
};

export default Switch;
