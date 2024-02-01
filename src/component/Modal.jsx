// Modal.jsx

import React from "react";

const Modal = ({ name, imageUrl, url, details,onClose }) => {
  console.log("modal us ");
  
  return (
    <div className="modal" id="myModal" tabIndex="-1" role="dialog" style={{zIndex:"99",position:"absolute"}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={imageUrl} alt={name} />
            <p>Details: {JSON.stringify(details)}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
