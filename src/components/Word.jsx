import React from "react";
import Letter from "./Letter";
import "./styles/Letter.css";


function Word({ guessed, actualWord, guessedWord }) {
  let states = ["", "", "", "", ""];
  const determineState = () => {
    const actualLetters = actualWord.split("");

    guessedWord.forEach((guessedLetter, i) => {
      if (actualLetters[i] === guessedLetter) {
        states[i] = "letter-guessed-correct";
      } else if (actualLetters.includes(guessedLetter)) {
        states[i] = "letter-guessed-wrongplace";
      } else {
        states[i] = "letter-guessed-incorrect";
      }
    });
  };

  if (guessed) {
    determineState();
  }

  return (
    <div className="letters-container">
      <Letter state={states[0]} letter={guessedWord[0]} timeToWait={200} />
      <Letter state={states[1]} letter={guessedWord[1]} timeToWait={500} />
      <Letter state={states[2]} letter={guessedWord[2]} timeToWait={800} />
      <Letter state={states[3]} letter={guessedWord[3]} timeToWait={1200} />
      <Letter state={states[4]} letter={guessedWord[4]} timeToWait={1500} />
    </div>
  );
}

export default Word;
