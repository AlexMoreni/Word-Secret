import { useState, useRef, useEffect } from "react";
import Pictures from "../pictures/Pictures";
import styles from "./Game.module.css";

const Game = ({
  theme,
  word,
  attempts,
  calcAttempts,
  handleWord,
  points,
  handlePoint,
}) => {
  const [componentes, setComponentes] = useState([]);
  const componentesArray = [];

  const renderizarComponentes = () => {
    for (let i = 0; i < word.length; i++) {
      componentesArray.push(<Pictures key={i} value={componentes[i]} />);
    }
    return componentesArray;
  };

  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLetter("");
    letterInputRef.current.focus();
  };

  const [letter, setLetter] = useState("");
  const [wrongWords, setWrongWords] = useState([]);

  useEffect(() => {
    if (componentes.join("") === word.toLowerCase()) {
      handlePoint();
      setWrongWords("");
      setComponentes([]);
      handleWord();
    }
  }, [componentes, word, handleWord]);

  const verifyLetter = () => {
    const pickedWord = word.toLowerCase().split("");
    const validationLetter = letter.toLowerCase();
    const verify = pickedWord.includes(validationLetter);

    if (verify) {
      const componentsCopy = [...componentes];
      const indexes = [];

      for (let i = 0; i < pickedWord.length; ++i) {
        if (pickedWord[i] == validationLetter) {
          indexes.push(i);
        }
      }

      indexes.forEach((index) => {
        componentsCopy[index] = validationLetter;
      });

      setComponentes(componentsCopy);
    } else {
      setWrongWords(wrongWords + validationLetter + ", ");
      calcAttempts();
    }
  };

  return (
    <div>
      <p>Pontuação: {points}</p>
      <h1>Adivinhe a Palavra</h1>
      <p>
        Dica:<span className={styles.tips}> {theme}</span>
      </p>
      <p>Tentativas: {attempts} </p>
      <div className={styles.rowComponents}>{renderizarComponentes()}</div>
      <p>Tente adivnhar uma letra da palavra:</p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputValue}
          type="text"
          maxLength="1"
          required
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}
        />
        <button onClick={verifyLetter}>Jogar</button>
      </form>
      <p>Letras já utilizadas:</p>
      <span className={styles.error}>{wrongWords}</span>
    </div>
  );
};

export default Game;
