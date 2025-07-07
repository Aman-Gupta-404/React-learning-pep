import React, { useRef, useState } from "react";

function RefComponent() {
  const myDomRef = useRef(null);

  return (
    <div>
      <h1 ref={myDomRef}>This is my DOM Value</h1>

      <button
        onClick={() => {
          myDomRef.current.innerText = "My Updated Value";
        }}
      >
        Click
      </button>
    </div>
  );
}

export default RefComponent;
