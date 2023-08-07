//Bibli
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

//Componentnes
import Start from "./components/Start/Start";
import Game from "./components/Game/Game";
import End from "./components/End/End";

//Css
import "./App.css";

//Palavras
import { wordsList } from "./components/data/WordList";

function App() {
  const [name, setName] = useState();

  const handleName = (e) => {
    setName(e);
  };

  //--------------------------------------------------------

  //Sorteando alguma palavra
  const [word, setWord] = useState();
  const [theme, setTheme] = useState();

  const handleword = () => {
    const categoria = Math.floor(Math.random() * 16);
    const number = Math.floor(Math.random() * 5);

    if (categoria === 0) {
      setWord(wordsList.carro[number]);
      setTheme("Carro");
    } else if (categoria === 1) {
      setWord(wordsList.fruta[number]);
      setTheme("Fruta");
    } else if (categoria === 2) {
      setWord(wordsList.corpo[number]);
      setTheme("Corpo");
    } else if (categoria === 3) {
      setWord(wordsList.computador[number]);
      setTheme("Computador");
    } else if (categoria === 4) {
      setWord(wordsList.cores[number]);
      setTheme("Cores");
    } else if (categoria === 5) {
      setWord(wordsList.alimento[number]);
      setTheme("Alimento");
    } else if (categoria === 6) {
      setWord(wordsList.animais[number]);
      setTheme("Animais");
    } else if (categoria === 7) {
      setWord(wordsList.celebridades[number]);
      setTheme("Celebridades");
    } else if (categoria === 8) {
      setWord(wordsList.esportes[number]);
      setTheme("Esportes");
    } else if (categoria === 9) {
      setWord(wordsList.marcas[number]);
      setTheme("Marcas");
    } else if (categoria === 10) {
      setWord(wordsList.transportes[number]);
      setTheme("Meios de transporte");
    } else if (categoria === 11) {
      setWord(wordsList.objetos[number]);
      setTheme("Objetos");
    } else if (categoria === 12) {
      setWord(wordsList.nomes[number]);
      setTheme("Nome");
    } else if (categoria === 13) {
      setWord(wordsList.profissao[number]);
      setTheme("Profissão");
    } else if (categoria === 14) {
      setWord(wordsList.sorvete[number]);
      setTheme("Sorvete");
    } else if (categoria === 15) {
      setWord(wordsList.bebidas[number]);
      setTheme("Bebidas");
    }
  };

  useEffect(() => {
    handleword();
  }, [theme]);

  //Tentativas

  const [attempts, setAttempts] = useState(3);

  const calcAttempts = () => {
    setAttempts(attempts - 1);

    if (attempts < 2) {
      setAttempts("Acabou as suas tentativas");
      openModal();
    }
  };

  //Perdeu?
  const [isLost, setIsLost] = useState(false);

  const openModal = () => {
    setIsLost(true);
  };

  const closeModal = () => {
    setIsLost(false);
  };
  //Pontos

  const [points, setPoints] = useState(0);

  const handlePoint = () => {
    setPoints(points + 50);
    setAttempts(3);
  };

  return (
    <div className="App">
      <Router>
        <End
          isLost={isLost}
          closeModal={closeModal}
          name={name}
          points={points}
          word={word}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Start handleName={handleName} handleword={handleword} />}
          ></Route>
          <Route
            path="/game"
            element={
              <Game
                theme={theme}
                word={word}
                attempts={attempts}
                calcAttempts={calcAttempts}
                handleWord={handleword}
                points={points}
                handlePoint={handlePoint}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
