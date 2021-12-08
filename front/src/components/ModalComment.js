import React, { useEffect, useRef, useState } from "react";

const ModalComent = ({ show, handleShowModal, image, addComment }) => {
  const ref = useRef(null);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(image._id, comment);
    handleShowModal();
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [show]);

  return (
    <div className="modal d-block" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{image.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleShowModal()}
            ></button>
          </div>
          <div className="modal-body py-1">
            <p>{image.description}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group row ">
              <div style={{ width: "95%", margin: "auto" }}>
                <textarea
                  style={{ resize: "none", outline: "none", border: "none", width: "100%", height: "70px" }}
                  onChange={(e) => setComment(e.target.value)}
                  ref={ref}
                  name="comment"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className={`btn btn-primary ${comment.length < 1 ? "disabled" : ""}`} >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalComent;
