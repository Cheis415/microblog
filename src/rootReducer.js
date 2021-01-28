import { ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST } from "./actionTypes";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = {
  [uuid()]: {
    title: "Welcome to microBlog!",
    description: "start blogging",
    body: "blerp",
    comments: []
  }
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, [uuid()]: { ...action.vals, comments: [] } };

    case EDIT_POST:
      return { ...state, [action.id]: { ...action.editedBlog, comments: [...state[action.id].comments] } };

    case REMOVE_POST:
      let stateCopy = { ...state };
      delete stateCopy[action.id];
      return stateCopy;

    case ADD_COMMENT:
      return { ...state, [action.id]: { ...state[action.id], comments: [...state[action.id].comments, action.vals] } };

    case REMOVE_COMMENT:
      let stateCp = { ...state }
      let commentArr = [...stateCp[action.id].comments];
      commentArr.splice(action.index, 1);
      stateCp[action.id].comments = commentArr;
      return stateCp;

    default:
      return state;
  }
}

export default rootReducer;