import { ActionNotes } from "../actions/ActionNotes";

export default function likeReducer(state, action) {
    console.log("state", state);
    console.log("action", action);
  switch (action.type) {
   
    default:
      return { massage: "default" };
  }
};
