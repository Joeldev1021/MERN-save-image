import { useContext, useEffect, useState } from "react";
import {  useHistory, useParams } from "react-router";
import { GlobalNotesContext } from "../context/provider/GlobalNotesProvider";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";
import Snniper from "./Snniper";


const FormNotes = () => {
  const { addNote, notes, editeNote, errorNoteMessage, isLoadNote } = useContext(GlobalNotesContext);
  const { token,  } = useContext(GlobalUserContext);

  const history = useHistory()
  const params = useParams();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  
  useEffect(() => {
    if (params.id) {
      const note = notes.filter((note) => note._id === params.id);
      setNote(note[0]);
    }
  }, [params.id]);

 


  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (params.id) {
      const newNote = await editeNote(note);
       if(newNote){
        history.push('/notes')
      }
    } else {
     const newNote = await addNote(note, token);
     if(newNote){
       history.push('/notes')
     }
    }
  
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>{params.id ? "Edite Note" : "Create Note"}</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title Note
          </label>
          {errorNoteMessage && (
          <div
            className="alert alert-danger text-center rounded-0"
            role="alert"
          >
            {errorNoteMessage}
          </div>
        )}
          <input
            type="text"
            value={note.title}
            name="title"
            className="form-control"
            id="title"
            placeholder="title note"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description note
          </label>
          <textarea
            value={note.description}
            className="form-control"
            name="description"
            id="description"
            rows="3"
            placeholder="description note"
            onChange={handleChange}
          ></textarea>
          <div className="col-auto mt-2">
            <button type="submit" className="btn btn-primary mb-3">
              {isLoadNote? (
                <Snniper/>
              ): params.id ? "Edite Note" : "Create Note"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormNotes;
