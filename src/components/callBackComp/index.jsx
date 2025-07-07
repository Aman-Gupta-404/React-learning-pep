import React, { useCallback, useState } from "react";

function ButtonComp(props) {
  const { handleIncrease } = props;

  console.log("Hello, child rendered!");

  return <button onClick={handleIncrease}>Increase</button>;
}

const MemoBtnComp = React.memo(ButtonComp);

function CallBackComp() {
  const [count, setCount] = useState(0);
  const [clik, setClikc] = useState(false);

  const increaseCounter = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [clik]);

  return (
    <div>
      <p>Count value is: {count}</p>

      {/* button */}
      {/* <ButtonComp handleIncrease={increaseCounter} /> */}
      <MemoBtnComp handleIncrease={increaseCounter} />

      <button onClick={() => setClikc(!clik)}>click here again</button>
    </div>
  );
}

export default CallBackComp;
