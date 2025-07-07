import React, { useContext } from "react";
import { TestContext } from "../../App";

export default function ActionComponent() {
  const contextData = useContext(TestContext);
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      Action
      <input
        type="text"
        placeholder="add name"
        onChange={(e) => {
          contextData.updateInputFun(e.target.value);
        }}
      />
      <button>Update</button>
    </div>
  );
}
