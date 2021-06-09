import React, { useEffect, useState } from "react";
import usePortal from "react-cool-portal";
import "./Portada.css";

const Portada = () => {
  const { Portal, show, hide } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    onShow: (e) => {
      mensaje();
    },
    onHide: (e) => {
      console.log("el portal se cierra");
    },
  });

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

  const mensaje = () => {
    console.log("el portal se abre");
  };

  return (
    <div>
      <div className="pageBackground">
        {movies.map((test) => (
          <div key={test.id} className="containerMovie" onClick={show}>
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
      <Portal>
        <div className="modal" tabIndex={-1}>
          <div
            className="modal-dialog"
            role="dialog"
            aria-labelledby="modal-label"
            aria-modal="true"
          >
            <div className="modal-header">
              <h5 id="modal-label" className="modal-title">
                Modal title
              </h5>
              <button
                className="modal-close"
                onClick={hide}
                type="button"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default Portada;
