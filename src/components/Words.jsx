import React, { useState } from "react";
import Word from "./Word";
import "./styles/Letter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Words extends React.Component {
  state = {
    word: "APPLE",
    guessedWords: [
      { id: 0, letters: Array(5).fill(""), curIndex: 0, guessed: false },
      { id: 1, letters: Array(5).fill(""), curIndex: 0, guessed: false },
      { id: 2, letters: Array(5).fill(""), curIndex: 0, guessed: false },
      { id: 3, letters: Array(5).fill(""), curIndex: 0, guessed: false },
      { id: 4, letters: Array(5).fill(""), curIndex: 0, guessed: false },
      { id: 5, letters: Array(5).fill(""), curIndex: 0, guessed: false },
    ],
    curTry: 0,
    won: false,
  };

  notify = (message, close) =>
    toast(message, {
      position: "top-center",
      autoClose: close ? close || 3000 : 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  handleKeyPress = ({ keyCode, key, altKey, ctrlKey }) => {
    if (altKey || ctrlKey || this.state.won) return;
    let targetWord = { ...this.state.guessedWords[this.state.curTry] };
    const deleteFunction = () => {
      if (targetWord.curIndex > 0) {
        targetWord.letters[targetWord.curIndex - 1] = "";
        targetWord.curIndex--;
      }
    };
    const addLetterFunction = () => {
      if (targetWord.curIndex < 5) {
        targetWord.letters[targetWord.curIndex] = key.toUpperCase();
        targetWord.curIndex++;
      }
    };
    const enterFunction = () => {
      const curWord = targetWord.letters.join("");
      if (curWord === this.state.word.toUpperCase()) {
        targetWord.guessed = true;
        this.setState({ won: true });
        this.notify("You won", false);
      } else {
        if (targetWord.curIndex === 5) {
          if (this.state.curTry === 6) {
            this.notify(this.state.word);
          } else {
            targetWord.guessed = true;
            this.setState({ curTry: this.state.curTry + 1 });
            this.notify("invalid word");
          }
        } else {
          this.notify("Not Enough Letters");
        }
      }
    };

    const aKeyCode = 65,
      zKeyCode = 90,
      deleteKeyCode = 8,
      enterKeyCode = 13;
    if (keyCode === deleteKeyCode) {
      deleteFunction();
    } else if (keyCode >= aKeyCode && keyCode <= zKeyCode) {
      addLetterFunction();
    } else if (keyCode === enterKeyCode) {
      enterFunction();
    }

    const guessedWords = this.state.guessedWords.map((word) => {
      if (word.id === targetWord.id) return targetWord;
      else return word;
    });
    this.setState({ guessedWords });
  };

  componentDidMount() {
    this.mainGame.focus();
  }

  render() {
    return (
      <div
        className="words-container"
        tabIndex={0}
        autoFocus
        ref={(game) => {
          this.mainGame = game;
        }}
        onKeyDown={(event) => {
          this.handleKeyPress(event);
        }}
      >
        {this.state.guessedWords.map((word) => (
          <Word
            key={word.id}
            guessed={word.guessed}
            actualWord={this.state.word}
            guessedWord={word.letters}
          />
        ))}
      </div>
    );
  }
}

export default Words;
