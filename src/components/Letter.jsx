import React, { useEffect, useState } from "react";
import "./styles/Letter.css";

function Letter({ state, letter, timeToWait }) {
  const [guessedState, setState] = useState("");

  let letterStyle = "";
  if (letter !== "") {
    letterStyle = "letter-container-with-word";
  }

  //adds animation after a certain wait time
  useEffect(() => { 
    const timer = setTimeout(() => setState(state), timeToWait);
    return () => clearTimeout(timer);
  }, [state, timeToWait]);

  return (
    <div className={`letter-container ${guessedState || letterStyle}`}>
      <p>{letter}</p>
    </div>
  );
}

export default Letter;
