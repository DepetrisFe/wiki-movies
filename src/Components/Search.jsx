import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <header>
        <div className="searchContainer">
          <div className="leftSection">
            <p>Wiki Movies</p>
          </div>
          <div className="rightSection">
            <input type="text" placeholder="Search Movies"></input>
          </div>
        </div>
      </header>
    </>
  );
};

export default Search;
