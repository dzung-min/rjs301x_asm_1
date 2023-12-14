import styles from "./Property.module.css";

const Property = ({ type }) => {
  return (
    <div className={styles.card}>
      <img src={type.image} alt={type.name} />
      <p className={styles.name}>{type.name}</p>
      <p className={styles.count}>{type.count} hotels</p>
    </div>
  );
};

export default Property;
