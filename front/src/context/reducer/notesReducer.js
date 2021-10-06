import { ActionNotes } from "../actions/ActionNotes";

export default function notesReducer(state, action) {
    console.log("state", state);
    console.log("action", action);
  switch (action.type) {
    case ActionNotes.GET_NOTES:
      return { 
          ...state, 
          notes: action.payload
          };

    case ActionNotes.ADD_NOTES:
      return { 
          ...state,
          notes: [...state.notes, action.payload]
      };

    case ActionNotes.ADD_NOTES_ERROR: 
    return {
      ...state,
      errorNoteMessage: action.payload.message
    }

    case ActionNotes.DELETE_NOTES:
      return { 
          ...state, notes: state.notes.filter(note=> note._id !== action.payload)
       };

    case ActionNotes.EDITE_NOTES:
      return { 
          ...state, 
          notes: [ ...state.notes.map(item=> item._id === action.payload._id ? action.payload : item)]
       };

    default:
      return { massage: "default" };
  }
};
