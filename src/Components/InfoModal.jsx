import React from "react";
import "./InfoModal.css";

const InfoModal = (props) => {
  const cerrarModal = () => {
    props.closeModal();
  };
  return (
    <div tabIndex={-1} className="container">
      <div className="modal-header">
        <h5 id="modal-label" className="modal-title">
          {props.titulo}
        </h5>
        <button
          className="modal-close"
          onClick={() => cerrarModal()}
          type="button"
          aria-label="Close"
        >
          X
        </button>
      </div>
      <div className="modal-body"></div>
    </div>
  );
};

export default InfoModal;
