import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalNotesContext } from "../context/provider/GlobalNotesProvider";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

const Notes = () => {
  const history = useHistory();
  const { notes, deleteNote } = useContext(GlobalNotesContext);
  const { token } = useContext(GlobalUserContext);

  const handleEdite = (e, id) => {
    e.preventDefault();
    history.push(`/note/edite/${id}`);
  };

  return (
    <div className="row">
      {notes.length > 0
        ? notes.map((item) => {
          return (
          <div className="card mt-3 d-grid m-3" style={{ width: "18rem" }} key={item._id}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                  {item.description}
              </p>
              <button className="btn btn-danger" onClick={(e) => deleteNote(item._id, token)}>
                delete
              </button>
              <button className="btn btn-primary" onClick={(e) => handleEdite(e, item._id)}>
                edite
              </button>
            </div>
          </div>
          );
        })
        : <h2>not notes</h2>}
    </div>
  );
};

export default Notes;
