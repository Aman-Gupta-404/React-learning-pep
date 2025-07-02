import { useState } from "react";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="container">
      <div className="form">
        <input
          placeholder="Add todo"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />

        <button
          onClick={(e) => {
            // setTodo((prev) => [...prev, input]);
            setTodo((prev) => {
              return [...prev, input];
            });
          }}
        >
          + Add
        </button>
      </div>

      {/* All my todos comes here */}
      <div className="my-todos">
        <ul>
          {todo.map((item, i) => {
            return (
              <li key={i}>
                {item}
                <button
                  onClick={() => {
                    console.log(i);
                    setTodo((prev) => {
                      const filteredArr = prev.filter((item, idx) => idx !== i);
                      return filteredArr;
                    });
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
