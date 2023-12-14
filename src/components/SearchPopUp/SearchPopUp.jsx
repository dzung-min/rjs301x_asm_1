import styles from "./SearchPopUp.module.css";

const SearchPopUp = () => {
  return (
    <div className={styles.popup}>
      <h3>Search</h3>
      <p className={styles.label}>Destination</p>
      <input className={styles["main-input"]} type="text" />
      <p className={styles.label}>Check-in date</p>
      <input
        className={styles["main-input"]}
        type="text"
        value="06/24/2022 to 06/24/2022"
      />
      <p className={styles.label}>Option</p>
      <div className={styles.options}>
        <p className={styles["option-label"]}>Min price per night</p>
        <input className={styles["option-input"]} type="text" />
      </div>
      <div className={styles.options}>
        <p className={styles["option-label"]}>Max price per night</p>
        <input className={styles["option-input"]} type="text" />
      </div>
      <div className={styles.options}>
        <p className={styles["option-label"]}>Adult</p>
        <input className={styles["option-input"]} type="text" value={1} />
      </div>
      <div className={styles.options}>
        <p className={styles["option-label"]}>Children</p>
        <input className={styles["option-input"]} type="text" value={0} />
      </div>
      <div className={styles.options}>
        <p className={styles["option-label"]}>Room</p>
        <input className={styles["option-input"]} type="text" value={1} />
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopUp;
