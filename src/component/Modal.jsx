// Modal.jsx

import React from "react";

const Modals = ({ name, imageUrl, url, details,onClose }) => {
  console.log("modal us ");
  const paragraph=details.summary.replace(/<p>|<b>|<\/p>|<\/b>/g, '');
  return (
    <div role="dialog" tabindex="-1" style={{position:"absolute",
                                             top:"4em",
                                             bottom:0,
                                             width:"70%",
                                             height:"fit-content",
                                             background:"grey",
                                             padding:"2em",
                                             "border-radius":"10px"}}>
      <div className="modal-dialog " role="dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button type="button" className="close bg-transparent border-0" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-md-5 position-relative">
            <div className="d-flex justify-content-start flex-column">
            <img  src={details?.image?.original} alt={name} style={{maxHeight:"30em",maxWidth:"25em",position:"relative"}} />
            <h2>{name}</h2>
            <span>{paragraph}</span>
            <a href={url}  target="_blank" className="text-decoration-none">
              Visit Site
            </a>
            </div>
           
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

export default Modals;
