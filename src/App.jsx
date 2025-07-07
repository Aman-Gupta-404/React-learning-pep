import { createContext, useState } from "react";
import "./styles.css";

// components import
import ActionComponent from "./components/action/ActionComponent";
import Reaction from "./components/reaction/Reaction";

// create a context
export const TestContext = createContext();

function App() {
  const [input, setInput] = useState("");

  const updateInput = (value) => {
    setInput(value);
  };

  return (
    <TestContext.Provider value={{ updateInputFun: updateInput, input }}>
      <div className={"container-light"}>
        <ActionComponent />
        <Reaction />
      </div>
    </TestContext.Provider>
  );
}

export default App;
