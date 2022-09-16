import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = (props) => {
  const { formState, description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    const todo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    props?.onNewTodo(todo);
    onResetForm();
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="d-flex gap-1 mb-2 justify-content-between"
      >
        <input
          className="form-control"
          type="text"
          placeholder="Todo on mind¿?"
          value={description}
          name={"description"}
          onChange={onInputChange}
        />
        <button className="mt-2 mb-3 btn btn-primary">
          <i className="bi bi-plus-circle-fill"></i>
        </button>
      </form>
    </>
  );
};
