import { ADD,
    DELETE,
     EDIT,
      COMPLETE
     } from "./types";

export function addTodo(input) {
  return {
    type: ADD,
    payload: input
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE,
    payload: id
  };
}

export function completeTodo(id){
  return {
    type: COMPLETE,
    payload: id
  };
}

export function editTodo(editTask,id){
  return{
    type:EDIT,
    payload:{editTask,id}
  };
}
