import styles from "./Pictures.module.css";

const Pictures = ({ value }) => {
  return (
    <div className={styles.container}>
      <span>{value}</span>
    </div>
  );
};

export default Pictures;
