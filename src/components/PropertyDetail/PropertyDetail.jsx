import styles from "./PropertyDetail.module.css";

const DETAILS = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const PropertyDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles["detail-header"]}>
        <div>
          <h2>{DETAILS.name}</h2>
          <p className={styles.location}>
            <i className="fa fa-map-marker"></i>
            <span>{DETAILS.address}</span>
          </p>
          <p className={styles.distance}>{DETAILS.distance}</p>
          <p className={styles.price}>{DETAILS.price}</p>
        </div>
        <button>Reserve or Book Now!</button>
      </div>
      <div className={styles.photos}>
        {DETAILS.photos.map((photo) => (
          <div
            className={styles.photo}
            key={photo}
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
        ))}
      </div>
      <div className={styles["more-detail"]}>
        <div>
          <div className={styles.title}>{DETAILS.title}</div>
          <div className={styles.description}>{DETAILS.description}</div>
        </div>
        <div className={styles.summary}>
          <div className={styles["summary-title"]}>
            Perfect for a 9-night stay!
          </div>
          <div>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </div>
          <div className={styles["summary-price"]}>
            <span>${DETAILS.nine_night_price}</span> (9 nights)
          </div>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
