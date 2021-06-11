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
              "movie?primary_release_year=2010&sort_by=vote_average.desc"
            )
          }
        >
          Highest rated movies
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
            onClickHandler(
              "movie/?certification_country=US&certification=R&sort_by=vote_average.desc"
            )
          }
        >
          Popular movies for kids
        </button>
      </div>
    </div>
  );
};

export default SwitchBar;
