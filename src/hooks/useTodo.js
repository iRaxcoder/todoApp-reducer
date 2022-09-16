import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

const init = () => {
  if (localStorage.getItem("todos")) {
    return JSON.parse(localStorage.getItem("todos"));
  }
  return [];
};

export const useTodo = () => {
  const initialState = [];
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleTodo = (todo) => {
    const action = {
      type: "[TODO] Add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDelete = (id) => {
    const action = {
      type: "[TODO] Delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle",
      payload: id,
    };
    dispatch(action);
  };

  const doneTasksSize = () => {
    return todos.filter((todo) => todo.done === true).length;
  };

  const AllIsDone = () => {
    if (todos.length === 0) return false;
    return doneTasksSize() === todos.length;
  };

  return {
    todos,
    handleDelete,
    handleTodo,
    handleToggleTodo,
    doneTasksSize,
    AllIsDone,
  };
};
