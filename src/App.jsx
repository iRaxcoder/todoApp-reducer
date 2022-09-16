import { useReducer, useEffect } from "react";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todos,
    handleDelete,
    handleTodo,
    handleToggleTodo,
    doneTasksSize,
    AllIsDone,
  } = useTodo();

  return (
    <div className="App">
      <div
        className="position-sticky top-0 bg-white"
        style={{ zIndex: "10000" }}
      >
        <h1>
          TodoApp{" "}
          {AllIsDone() ? (
            <>
              <span className="badge rounded-pill text-bg-success mb-2 text-center fs-5">
                <i className="bi bi-check-circle-fill"></i>
                {"  "}
                Work done!
                <i className="bi bi-fire"></i>
                {"  "}
              </span>{" "}
            </>
          ) : (
            <>
              <span className="badge rounded-pill text-bg-warning">
                <i className="bi bi-check-circle-fill"></i>
                {"  "}
                {doneTasksSize()}
              </span>{" "}
              <span className="badge rounded-pill text-bg-info">
                <i className="bi bi-asterisk"> </i>
                {"  "}
                {todos.length}
              </span>{" "}
            </>
          )}
        </h1>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12 col-sm-7">
          <TodoAdd onNewTodo={handleTodo} />
        </div>
        <div className="col-md-12 col-sm-7">
          <TodoList
            onToggleTodo={handleToggleTodo}
            list={todos}
            onDeleteTodo={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
