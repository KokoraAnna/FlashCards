import { Link } from "react-router-dom";
import React, { useState } from "react";
import classes from "./DeckOfCards.module.css";

const DeckOfCards = (props) => {
  const [hidden, setHidden] = useState(null);

  const closeHandler = (evt) => {
    evt.preventDefault();
    setHidden("none");
  };

  return (
    <li className={classes.deck} style={{ display: hidden }}>
      <Link to={`/decks/${props.titleOfDeck}`} className={classes.a}>
        <h2 className={classes.deck__title}>{props.titleOfDeck}</h2>
        <span className={classes.close} onClick={closeHandler}>
          x
        </span>
        <div className={classes["deck__progress-bar"]}>
          <div
            className={classes.deck__percent}
            style={{ width: props.percent }}
          ></div>
        </div>
        <span>Completed {props.percent}</span>
      </Link>
    </li>
  );
};

export default DeckOfCards;
