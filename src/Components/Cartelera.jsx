import React, { useEffect, useState } from "react";

import Portada from "./Portada";
import "./cartelera.css";

const Cartelera = (props) => {
  //console.log("fill: " + props.fillSearch);

  const [movies, setMovies] = useState([]);

  const baseUrl = "https://api.themoviedb.org/3/discover/";
  const API_KEY = "&api_key=049d63d518130338d64b9940efba8c4f";

  const fetchData = async (pieceUrl) => {
    try {
      const result = await fetch(`${baseUrl + pieceUrl + API_KEY}&page=1`);
      const finalResult = await result.json();
      setMovies(finalResult.results);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData(props.middleUrl);
  }, [props.middleUrl]);

  const filtro = (movie) =>
    movie.title.toLowerCase().includes(props.fillSearch.toLowerCase());

  const filteredMovies = movies.filter((pelicula) => filtro(pelicula));

  return (
    <div>
      <div className="pageMain">
        {filteredMovies.map((test) => (
          <Portada key={test.id} datos={test} />
        ))}
      </div>
    </div>
  );
};

export default Cartelera;
