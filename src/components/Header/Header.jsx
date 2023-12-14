import { useState } from "react";
import { DateRange } from "react-date-range";

import styles from "./Header.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
  // State for selected date range
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // State for keeping track of the visiblity of date range modal
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(false);

  const dateRangePopUp = isDateRangeVisible ? (
    <DateRange
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      className={styles.date}
      minDate={new Date()}
      onChange={(item) => {
        setRange([item.selection]);
      }}
      ranges={range}
    />
  ) : null;

  // Derived value for displaying when the range of date is selected
  const placeholderStartDate = `${
    range[0].startDate.getMonth() + 1
  }/${range[0].startDate.getDate()}/${range[0].startDate.getFullYear()}`;

  const placeholderEndDate = `${
    range[0].endDate.getMonth() + 1
  }/${range[0].endDate.getDate()}/${range[0].endDate.getFullYear()}`;

  return (
    <div className={styles.wraper}>
      {/* Date range modal */}
      {/* The default style will be broken if we put this component inside of div.header */}
      {dateRangePopUp}
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.action}>
            <h2>A lifetime of discounts? It's Genius.</h2>
            <p>
              Get rewarded for your travels - unlock instant saving of 10% or
              more with a free account
            </p>
            <button>Sign in / Register</button>
          </div>
          <div className={styles.search}>
            <div className={styles.inputs}>
              {/* Have to use Unicode for Font Awesome icons in order to display them in input's placeholder */}
              {/* In html, use "&#x<code>". In JavaScript string, use "\u<code>" */}
              <input
                type="text"
                placeholder="&#xf236;    Where are you going?"
                readOnly
              />
              <input
                className={styles["date-input"]}
                type="text"
                placeholder={`\uf073    ${placeholderStartDate} to ${placeholderEndDate}`}
                onClick={() => setIsDateRangeVisible((prevState) => !prevState)}
                readOnly
              />
              <input
                type="text"
                placeholder="&#xf183;    1 adult &middot; 0 children &middot; 1 room"
                readOnly
              />
            </div>
            <div className={styles.button}>
              <button onClick={() => window.location.replace("/search")}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
