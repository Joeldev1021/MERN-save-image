import React, { useEffect, useRef } from "react";

const ModalComent = ({ show, handleShowModal }) => {

  const ref = useRef(null)

  useEffect(() => {
    if(ref.current) {
      ref.current.focus()
    }
  }, [show])
  return (
    <div className={`modal ${show ? "d-block" : ""}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleShowModal()}
            ></button>
          </div>
          <div className="modal-body py-1">
            <p>Modal body text goes here.</p>
          </div>
          <form>
            <div class="form-group row ">
              <div style={{ width: "99%", margin: "auto" }}>
                <textarea
                  style={{ resize: "none", outline: "none",border: "none", width: "100%", height: "70px" }}
                  ref={ref}
                  name="comment"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => handleShowModal()}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalComent;
