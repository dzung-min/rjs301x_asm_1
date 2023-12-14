import styles from "./CityCard.module.css";

const CityCard = ({ city }) => {
  return (
    <div className={styles.card}>
      <img src={city.image} alt={city.name} />
      <div>
        <p className={styles["city-name"]}>{city.name}</p>
        <p className={styles["city-subtext"]}>{city.subText}</p>
      </div>
    </div>
  );
};

export default CityCard;
