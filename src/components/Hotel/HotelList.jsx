import Hotel from "./Hotel";
import styles from "./HotelList.module.css";

const HOTEL_LIST = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const HotelList = () => {
  return (
    <div className={styles.container}>
      <h3>Home guests love</h3>
      <div className={styles.list}>
        {HOTEL_LIST.map((hotel) => (
          <Hotel key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
