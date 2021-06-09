import React, { useEffect, useState } from "react";
//importo el componente modal
import InfoModal from "./InfoModal";
import useFixedModal from "./hooks/useFixedModal";
import "./Portada.css";

const Portada = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const result = await fetch(
        "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=049d63d518130338d64b9940efba8c4f&page=1"
      );
      const finalResult = await result.json();
      setMovies(finalResult.results);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [
    FixedInfoModalPortal,
    isInfoModalVisible,
    showInfoModal,
    hideInfoModal,
  ] = useFixedModal();

  return (
    <>
      <div className="pageBackground">
        {movies.map((test) => (
          <div key={test.id} className="containerMovie" onClick={showInfoModal}>
            <div className="containerImg">
              <img
                src={`https://image.tmdb.org/t/p/w500${test.poster_path}`}
                alt={test.title}
              />
            </div>
            <div className="containerTitle">
              <h2>{test.title}</h2>
              {/* <h3>Lenguaje: {test.original_language}</h3> */}
            </div>
          </div>
        ))}
      </div>
      {isInfoModalVisible && (
        <FixedInfoModalPortal>
          <InfoModal titulo={test.title} />
        </FixedInfoModalPortal>
      )}
    </>
  );
};

export default Portada;
