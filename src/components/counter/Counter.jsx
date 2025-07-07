import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

function Counter(props) {
  const { count, setCount } = props;

  const [input, setInput] = useState("Aman");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>count: {count}</p>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Counter;
