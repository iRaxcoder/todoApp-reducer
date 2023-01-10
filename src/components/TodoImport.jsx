import { useRef } from "react";
import { getTodosFromExcel } from "../utils/getTodosFromExcel";

export const TodoImport = ({ onNewTodo }) => {
  const inputRef = useRef();

  const setTodosFromExcel = async ({ target }) => {
    await getTodosFromExcel(target.files[0], (data) => {
      onNewTodo(data);
    });
  };

  return (
    <>
      <input
        accept=".xlsx,.xls"
        ref={inputRef}
        type="file"
        onChange={setTodosFromExcel}
        style={{ display: "none" }}
      ></input>
      <button
        onClick={() => inputRef.current.click()}
        className="btn btn-success d-flex justify-content-end"
      >
        <i className="bi bi-file-earmark-spreadsheet"></i>
      </button>
    </>
  );
};
