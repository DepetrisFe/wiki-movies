import React, { useEffect, useState } from "react";

import Portada from "./Portada";
import "./cartelera.css";

const Cartelera = (props) => {
  //console.log que muestra en consola la porcion de url que se recibe
  //console.log("props", props);

  const [movies, setMovies] = useState([]);

  const baseUrl = "http://api.themoviedb.org/3/discover/";
  const API_KEY = "&api_key=049d63d518130338d64b9940efba8c4f";

  const fetchData = async (pito) => {
    try {
      const result = await fetch(`${baseUrl + pito + API_KEY}&page=1`);
      const finalResult = await result.json();
      setMovies(finalResult.results);
    } catch (e) {
      console.log("error", e);
    }
  };
  //movie?sort_by=popularity.desc

  useEffect(() => {
    fetchData(props.middleUrl);
  }, [props.middleUrl]);

  return (
    <div>
      <div className="pageMain">
        {movies.map((test) => (
          <Portada key={test.id} datos={test} />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;
