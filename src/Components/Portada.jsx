import React from "react";
import usePortal from "react-cool-portal";

import "./Portada.css";

const Portada = (props) => {
  const { Portal, show, hide } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    onShow: (e) => {
      //console.log("el portal se abre");
    },
    onHide: (e) => {
      //console.log("el portal se cierra");
    },
  });

  return (
    <div>
      <div className="containerMovie" onClick={show}>
        <div className="containerImg">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.datos.poster_path}`}
            alt={props.datos.title}
          />
        </div>
        <div className="containerTitle">
          <h2>{props.datos.title}</h2>
          {/* <h3>Lenguaje: {test.original_language}</h3> */}
        </div>
      </div>

      <Portal>
        <div className="modal" tabIndex={-1}>
          <div
            className="modal-dialog"
            role="dialog"
            aria-labelledby="modal-label"
            aria-modal="true"
          >
            <div className="modal-head">
              <div className="movieImg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${props.datos.poster_path}`}
                  alt={props.datos.title}
                />
              </div>
              <div className="titleColumn">
                <h2 id="modal-label" className="modal-title">
                  {props.datos.original_title}
                </h2>
                <p>
                  <b>Release date: </b> {props.datos.release_date}
                  <br />
                  <b>Vote average: </b> {props.datos.vote_average}
                </p>
              </div>
              <div>
                <button
                  className="modal-close"
                  onClick={hide}
                  type="button"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
            </div>
            <div className="modal-body">
              <h3>
                <u>Overview:</u>
              </h3>
              <p>{props.datos.overview}</p>
            </div>
          </div>
        </div>
      </Portal>
    </div>
  );
};

export default Portada;
