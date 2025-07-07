import React, { useEffect, useState } from "react";

function Jokes() {
  const [joke, setJoke] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const getDadJoke = () => {
    // https://icanhazdadjoke.com/
    console.log("Fetching the data...");
    fetch("https://sv443.net/jokeapi/v2/joke/Programming").then(async (res) => {
      const response = await res.json();

      if (response.joke) {
        setJoke(response.joke);
      } else {
        setJoke(response.setup + ", " + response.delivery);
      }
    });
  };

  useEffect(() => {
    // my execution comes here
    getDadJoke();
  }, [buttonClicked]);

  return (
    <div style={{ padding: "10px" }}>
      <h1>Programming Jokes</h1>
      <button
        onClick={() => {
          setButtonClicked(!buttonClicked);
        }}
      >
        get anoterh joke
      </button>
      <p>{joke}</p>
    </div>
  );
}

export default Jokes;
