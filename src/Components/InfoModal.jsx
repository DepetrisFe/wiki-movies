import React from "react";
import usePortal from "react-cool-portal";
import "./InfoModal.css";

const InfoModal = () => {
  const { Portal, isShow, show, hide, toggle } = usePortal({
    defaultShow: false,
    onShow: (e) => {},
    onHide: (e) => {},
  });

  return (
    <div>
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

export default InfoModal;
