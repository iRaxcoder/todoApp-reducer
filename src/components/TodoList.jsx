import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  return (
    <>
      <h4>Todos</h4>
      <hr />
      {props.list.length <= 0 && <h5>No todos added yet</h5>}
      <ul className="list-group">
        {props.list.map((todo) => (
          <TodoItem
            onToggleTodo={props.onToggleTodo}
            onDeleteTodo={props.onDeleteTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </>
  );
};
