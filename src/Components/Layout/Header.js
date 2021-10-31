import { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chetan Dhaba</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="This is the image full of tasty dishes" />
      </div>
    </Fragment>
  );
};
export default Header;
