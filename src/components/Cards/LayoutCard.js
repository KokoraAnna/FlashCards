import React from "react";
import { Link } from "react-router-dom";
import classes from "./LayoutCard.module.css";
import back from "../../../assets/back.svg";

const LayoutCard = (props) => {
  return (
    <div className={classes.container}>
      <Link className={classes["btn-back"]} to={"/decks"}>
        <img src={back} alt="button back"></img>
      </Link>
      {props.children}
    </div>
  );
};

export default LayoutCard;
