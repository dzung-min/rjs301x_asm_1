import styles from "./Hotel.module.css";

const Hotel = ({ hotel }) => {
  return (
    <div className={styles.card}>
      <img src={hotel.image_url} alt={hotel.name} />
      <p
        className={styles.name}
        onClick={() => window.location.replace("/detail")}
      >
        {hotel.name}
      </p>
      <p className={styles.city}>{hotel.city}</p>
      <p className={styles.price}>Starting from ${hotel.price}</p>
      <div className={styles.rating}>
        <p className={styles.rate}>{hotel.rate}</p>
        <p className={styles.type}>{hotel.type}</p>
      </div>
    </div>
  );
};

export default Hotel;
