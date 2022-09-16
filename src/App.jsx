import { useReducer, useEffect } from "react";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const { todos, handleDelete, handleTodo, handleToggleTodo } = useTodo();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    return () => {};
  }, [todos]);

  useEffect(() => {
    if (!localStorage.getItem("tip")) {
      alert("double click - tap on description to mark as done");
      localStorage.setItem("tip", "showed");
    }
  }, []);

  return (
    <div className="App">
      <h1>TodoApp: {todos.length}</h1>
      <hr />

      <div className="row">
        <div className="col-md-5 col-sm-7">
          <TodoAdd onNewTodo={handleTodo} />
        </div>
        <div className="col-md-7 col-sm-7">
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
