import React from "react";
import "./SwitchBar.css";

const SwitchBar = (props) => {
  const onClickHandler = (url) => {
    props.test(url);
  };

  return (
    <div className="mainContainer">
      <div className="switchBar">
        <button
          className="leftSwitch"
          onClick={() =>
            onClickHandler(
              "movie?primary_release_date.gte=2020-09-15&primary_release_date.lte=2020-10-22"
            )
          }
        >
          Actually in Theatres
        </button>
        <button
          className="middleSwitch"
          onClick={() => onClickHandler("movie?sort_by=popularity.desc")}
        >
          Popular Movies
        </button>
        <button
          className="rightSwitch"
          onClick={() =>
            onClickHandler("movie?with_genres=18&primary_release_year=2014")
          }
        >
          Best Dramas
        </button>
      </div>
    </div>
  );
};

export default SwitchBar;
