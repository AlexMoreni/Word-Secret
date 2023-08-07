import { Link } from "react-router-dom";
import styles from "./Start.module.css";

const Start = ({ handleName, handleWord }) => {
  return (
    <div className={styles.container}>
      <h1>Secret Word</h1>
      <input
        placeholder="Digite seu nome"
        required
        onChange={(e) => handleName(e.target.value)}
      />
      <button onClick={handleWord}>
        <Link to="/game">Começar</Link>
      </button>
    </div>
  );
};

export default Start;
