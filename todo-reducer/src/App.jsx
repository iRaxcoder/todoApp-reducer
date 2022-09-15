import { useReducer } from "react";
import "./App.css";
import { todoReducer } from "./reducers/todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del corazón",
    done: false,
  },
];

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <h1>TodoApp</h1>
      <hr />

      <div className="row">
        <div className="col-md-5 col-sm-7">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Something in mind?"
            />
            <button className="mt-2 mb-3 btn btn-primary outline">Add</button>
          </form>
        </div>
        <div className="col-md-7 col-sm-7">
          <h4>Todo list</h4>
          <ul>
            {initialState.map((todo) => (
              <li key={todo.id}>{todo.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
