import { createContext, useContext, useEffect, useReducer } from "react";
import { apiAddNotes, apiDeleteNotes, apiEditeNotes, apiGetNotes } from "../../api/noteApi";
import { ActionNotes } from "../actions/ActionNotes";
import notesReducer from "../reducer/notesReducer";
import { GlobalUserContext } from "./GobalUserProvider";

export const GlobalNotesContext = createContext();

const initialValues = {
  notes: [],
  isLoadNote: false,
  errorNoteMessage: null
};

const GlobalNotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialValues);

  const { token, isLogined } = useContext(GlobalUserContext);

  const getNotes = async () => {
    dispatch({ type: ActionNotes.GET_NOTES_LOAD });
    try {
      const res = await apiGetNotes(token);
      dispatch({
        type: ActionNotes.GET_NOTES,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ActionNotes.GET_NOTES_ERROR,
        payload: error.response.message
      });
    }
  };

  const addNote = async (newNote, token) => {
    dispatch({ type: ActionNotes.ADD_NOTES_LOAD });
    try {
      const note = await apiAddNotes(newNote, token);
      dispatch({
        type: ActionNotes.ADD_NOTES,
        payload: note.data
      });
      return note;
    } catch (error) {
      if (error.response.status === 500) {
        dispatch({
          type: ActionNotes.ADD_NOTES_ERROR,
          payload: { message: "not authorize" }
        });
      }
    }
  };

  const editeNote = async (note) => {
    dispatch({ type: ActionNotes.EDITE_NOTES_LOAD });
    try {
      const noteUpdate = await apiEditeNotes(note, token);
      dispatch({
        type: ActionNotes.EDITE_NOTES,
        payload: note
      });
      return noteUpdate;
    } catch (error) {
      console.log(error.response.massage);
      dispatch({
        type: ActionNotes.EDITE_NOTES_ERROR,
        payload: error.response.message
      });
    }
  };

  const deleteNote = async (id, token) => {
    try {
      const note = await apiDeleteNotes(id, token);
      console.log(note);
      dispatch({
        type: ActionNotes.DELETE_NOTES,
        payload: id
      });
    } catch (error) {
      console.log(error.response.message);
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
        deleteNote
      }}
    >
      {children}
    </GlobalNotesContext.Provider>
  );
};

export default GlobalNotesProvider;
