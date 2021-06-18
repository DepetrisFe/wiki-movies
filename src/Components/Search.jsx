import React from "react";
import "./Search.css";

const Search = (props) => {
  const onFillSearch = (part) => {
    props.fill(part);
  };

  return (
    <>
      <header>
        <div className="searchContainer">
          <div className="leftSection">
            <img
              src="https://i.ibb.co/80h8BWN/Wiki-Movies.png"
              alt="Logo"
            ></img>
          </div>
          <div className="rightSection">
            <input
              type="search"
              placeholder="Search movies or series!"
              onChange={(event) => {
                onFillSearch(event.target.value);
              }}
            ></input>
          </div>
        </div>
      </header>
    </>
  );
};

export default Search;
