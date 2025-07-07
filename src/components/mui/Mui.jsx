import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

function Mui() {
  const [count, setCount] = useState(0);

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
    </div>
  );
}

export default Mui;
