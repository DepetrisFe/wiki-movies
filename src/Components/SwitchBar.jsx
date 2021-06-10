import React from "react";
import "./SwitchBar.css";
import Portada from "./Portada";

const SwitchBar = () => {
  const urls = () => {
    const hrm =
      "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=049d63d518130338d64b9940efba8c4f&page=1";
    <Portada url={hrm} />;
  };

  return (
    <div className="mainContainer">
      <div className="switchBar">
        <button className="leftSwitch" onClick={urls()}>
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

export default SwitchBar;
