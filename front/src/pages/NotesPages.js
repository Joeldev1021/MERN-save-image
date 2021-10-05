import { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { GlobalNotesContext } from '../context/provider/GlobalNotesProvider';


const Notes = () => {

  const history = useHistory()
  const {notes, deleteNote, editeNote} = useContext(GlobalNotesContext)
 
 const handleDelete =(e, id) => {
    e.preventDefault();
    deleteNote(id)
 }

 const handleEdite=(e, id) => {
   e.preventDefault();
   history.push(`/note/edite/${id}`)
 }

  return (
    <div className="row">
      {notes.map((item) => {
        return (
          <div className="card mt-3 d-grid m-3" style={{ width: "18rem" }} key={item._id}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                  {item.description}
              </p>
              <a href="#!" className="btn btn-danger" onClick={(e)=>handleDelete(e, item._id)}>
                delete
              </a>
              <a href="#!" className="btn btn-primary" onClick={(e)=>handleEdite(e, item._id)}>
                edite
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
