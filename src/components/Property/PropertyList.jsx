import Property from "./Property";
import styles from "./PropertyList.module.css";

const PROPERTY_TYPE = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const PropertyList = () => {
  return (
    <div className={styles.container}>
      <h3>Browse by property type</h3>
      <div className={styles.list}>
        {PROPERTY_TYPE.map((type) => (
          <Property key={type.name} type={type} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
