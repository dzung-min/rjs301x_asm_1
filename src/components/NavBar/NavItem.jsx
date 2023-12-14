import styles from "./NavItem.module.css";

const NavItem = ({ item, onSelectItem }) => {
  const classes = `${styles.item} ${item.active ? styles.active : ""}`;
  const clickHandler = () => {
    onSelectItem(item.type);
  };
  return (
    <div className={classes} onClick={clickHandler}>
      <i className={`fa ${item.icon}`}></i> {item.type}
    </div>
  );
};

export default NavItem;
