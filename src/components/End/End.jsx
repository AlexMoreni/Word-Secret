import styles from "./End.module.css";
import { AiFillAlert } from "react-icons/ai";
import { Link } from "react-router-dom";

const End = ({ isLost, closeModal, name, points, word }) => {
  if (!isLost) return null;

  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className={styles.modal}>
        <AiFillAlert />
        <h1>Game over!</h1>
        <div className={styles.congratulations}>
          <p>Parabens por chegar ate aqui, {name}!</p>
          <p>A palavra era: {word}</p>
          <p>Você conseguiu: {points} pontos</p>
        </div>
        <button onClick={(closeModal, handleReload)}>
          <Link to="/">Voltar</Link>
        </button>
      </div>
    </div>
  );
};

export default End;
