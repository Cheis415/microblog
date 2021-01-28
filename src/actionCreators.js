import { ADD_COMMENT, ADD_POST, EDIT_POST, REMOVE_COMMENT, REMOVE_POST } from "./actionTypes";

export function addPost(vals) {
  return {
    type: ADD_POST,
    vals
  };
}

export function editPost(editedBlog, id) {
  return {
    type: EDIT_POST,
    editedBlog,
    id
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}

export function addComment(vals, id) {
  return {
    type: ADD_COMMENT,
    vals,
    id
  };
}

export function removeComment(index, id) {
  return {
    type: REMOVE_COMMENT,
    index,
    id
  };
}