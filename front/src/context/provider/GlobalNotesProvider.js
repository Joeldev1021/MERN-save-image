import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import { ActionNotes } from "../actions/ActionNotes";
import notesReducer from "../reducer/notesReducer";
import { GlobalUserContext } from "./GobalUserProvider";

export const GlobalNotesContext = createContext();

const initialValues = {
  notes: [],
  userId: null,
  errorNoteMessage: null,
};

const GlobalNotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialValues);

  const history = useHistory();
  const { token, isLogined } = useContext(GlobalUserContext);

  const getNotes = async () => {
    const res = await axios({
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      url: "http://localhost:4000/note",
    });
    dispatch({
      type: ActionNotes.GET_NOTES,
      payload: res.data,
    });
  };

  const addNote = async (newNote, token) => {
    try {
      const note = await axios({
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        data: {
          title: newNote.title,
          description: newNote.description,
        },
        url: "http://localhost:4000/note/add",
      });

      dispatch({
        type: ActionNotes.ADD_NOTES,
        payload: note.data,
      });
      history.push("/notes");
    } catch (error) {
      if (error.response.status === 500) {
        dispatch({
          type: ActionNotes.ADD_NOTES_ERROR,
          payload: { message: "not authorize" },
        });
      }
    }
  };

  const editeNote = async (note) => {
  try {
    const noteUpdate = await axios({
      method: "PUT",
      headers: {Authorization:token},
      data: {
        title: note.title,
        description: note.description,
      },
      url: `http://localhost:4000/note/edite/${note._id}`,
    });
    dispatch({
      type: ActionNotes.EDITE_NOTES,
      payload: note,
    });
    
  } catch (error) {
    console.log(error.response.massage)
  }
  };

  const deleteNote = async (id, token) => {
    try {
      const note = await await axios({
        method: "DELETE",
        headers: { Authorization: token },
        url: `http://localhost:4000/note/delete/${id}`,
      });
      console.log(note);
      dispatch({
        type: ActionNotes.DELETE_NOTES,
        payload: id,
      });
    } catch (error) {
      console.log(error.response.message)
    }
  };

  useEffect(() => {
    getNotes();
  }, [isLogined]);

  return (
    <GlobalNotesContext.Provider
      value={{
        ...state,
        addNote,
        editeNote,
        deleteNote,
      }}
    >
      {children}
    </GlobalNotesContext.Provider>
  );
};

export default GlobalNotesProvider;
