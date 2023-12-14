import { useState } from "react";

import styles from "./NavBar.module.css";
import NavItem from "./NavItem";

const NavBar = () => {
  const [navItems, setNavItems] = useState(NAV_DATA);

  const selectItemHandler = (itemType) => {
    setNavItems((prevState) => {
      const newState = prevState.map((item) => {
        if (item.type === itemType) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      });
      return newState;
    });
  };

  const itemList = navItems.map((item) => (
    <NavItem key={item.type} onSelectItem={selectItemHandler} item={item} />
  ));

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <div className={styles["nav-header"]}>
          <p>Booking Website</p>
          <div>
            <button type="button">Register</button>
            <button type="button">Log in</button>
          </div>
        </div>
        <div className={styles["item-list"]}>{itemList}</div>
      </div>
    </div>
  );
};

export default NavBar;

const NAV_DATA = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];
