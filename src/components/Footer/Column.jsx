import styles from "./Column.module.css";

const Column = ({ data }) => {
  return (
    <div className={styles.column}>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default Column;
