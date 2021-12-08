import { ActionNotes } from "../actions/ActionNotes";

export default function notesReducer (state, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    // get notes
    case ActionNotes.GET_NOTES_LOAD:
      return {
        ...state,
        isLoadNote: true
      };
    case ActionNotes.GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        isLoadNote: false,
        errorNoteMessage: null
      };
    case ActionNotes.GET_NOTES_ERROR:
      return {
        ...state,
        isLoadNote: false,
        errorNoteMessage: action.payload
      };
    // add notes
    case ActionNotes.ADD_NOTES_LOAD:
      return {
        ...state,
        isLoadNote: true
      };
    case ActionNotes.ADD_NOTES:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        isLoadNote: false,
        errorNoteMessage: null
      };

    case ActionNotes.ADD_NOTES_ERROR:
      return {
        ...state,
        errorNoteMessage: action.payload.message
      };
    // edite
    case ActionNotes.EDITE_NOTES_LOAD:
      return {
        ...state,
        isLoadNote: true

      };
    case ActionNotes.EDITE_NOTES:
      return {
        ...state,
        notes: [...state.notes.map(item => item._id === action.payload._id ? action.payload : item)],
        isLoadNote: false,
        errorNoteMessage: null
      };

    case ActionNotes.EDITE_NOTES_ERROR:
      return {
        ...state,
        isLoadNote: false,
        errorNoteMessage: action.payload
      };
    // delete
    case ActionNotes.DELETE_NOTES_LOAD:
      return {
        ...state,
        isLoadNote: true
      };
    case ActionNotes.DELETE_NOTES:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload),
        isLoadNote: false,
        errorNoteMessage: null
      };

    case ActionNotes.DELETE_NOTES_ERROR:
      return {
        ...state,
        errorNoteMessage: action.payload,
        isLoadNote: false
      };

    default:
      return { massage: "default" };
  }
};
