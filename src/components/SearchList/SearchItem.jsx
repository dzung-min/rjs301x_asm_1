import styles from "./SearchItem.module.css";

const SearchItem = ({
  name,
  distance,
  tag,
  type,
  description,
  free_cancel,
  price,
  rate,
  rate_text,
  image_url,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles["img_container"]}
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div className={styles.details}>
        <div>
          <div
            className={styles.name}
            onClick={() => window.location.replace("/detail")}
          >
            {name}
          </div>
          <div>{distance} from center</div>
          <div className={styles.tag}>{tag}</div>
          <div className={styles.description}>{description}</div>
          <div>{type}</div>
          {free_cancel && (
            <div className={styles.cancellation}>
              <div>Free cancellation</div>
              <div>You can cancel later, so lock this great price today</div>
            </div>
          )}
        </div>
        <div>
          <div className={styles.rating}>
            <div className={styles["rate-text"]}>{rate_text}</div>
            <div className={styles.rate}>{rate}</div>
          </div>
          <div className={styles.price}>${price}</div>
          <div className={styles.note}>Includes taxes and fees</div>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
