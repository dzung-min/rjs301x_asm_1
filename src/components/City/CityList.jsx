import CityCard from "./CityCard";
import styles from "./CityList.module.css";

const CITIES = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const CityList = () => {
  return (
    <div className={styles.container}>
      {CITIES.map((city) => (
        <CityCard key={city.name} city={city} />
      ))}
    </div>
  );
};

export default CityList;
