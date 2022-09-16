import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex align-items-start justify-content-between ">
      <span
        style={{
          cursor: "pointer",
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          maxWidth: "250px",
        }}
        onDoubleClick={() => onToggleTodo(todo.id)}
        className={`align-self-center text-break ${
          todo.done && "text-decoration-line-through"
        }`}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger " onClick={() => onDeleteTodo(todo.id)}>
        <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  );
};
