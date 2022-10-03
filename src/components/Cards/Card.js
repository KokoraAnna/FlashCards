import { useParams } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Card.module.css";
import edit from "../../../assets/edit.svg";

const Card = (props) => {
  const [flip, setFlip] = useState(false);
  const [card, setCard] = useState(1);
  const params = useParams();

  // finding the selected deck
  const item = props.dataOfCards.find(
    (item) => item.titleOfDeck === params.deckTitle
  );

  const arrayOfKeysOfWords = Object.keys(item.words);

  const disabledNext = card < arrayOfKeysOfWords.length;
  const disabledBack = card == 1;

  const isFlipHandler = () => {
    setFlip(!flip);
  };

  const nextCardHandler = (evt) => {
    evt.preventDefault();
    setCard((prev) => prev + 1);
  };

  const backCardHandler = () => {
    setCard((prev) => prev - 1);
  };

  return (
    <section>
      <div className={classes.section}>
        <button
          className={classes["btn-back"]}
          onClick={backCardHandler}
          disabled={disabledBack}
        >
          &#8249;
        </button>
        <div className={classes.card} onClick={isFlipHandler}>
          <div className={classes.card__wrapper}>
            <div className={classes.card__side}>
              {!flip ? "Term" : "Definition"}
            </div>
            <button className={classes["btn-edit"]} style={{ display: "none" }}>
              <img src={edit} alt="button edit" />
            </button>
          </div>
          <div
            className={`${classes.card__name} ${
              flip ? classes.flip : classes.flip1
            }`}
          >
            {!flip
              ? item.words[`w${card}`].term
              : item.words[`w${card}`].definition}
          </div>
        </div>
        <button
          className={classes["btn-next"]}
          onClick={nextCardHandler}
          disabled={!disabledNext}
        >
          &#8250;
        </button>
      </div>
      <button className={classes["btn-show"]} onClick={isFlipHandler}>
        Show answer
      </button>
      <span className={classes.numbers}>
        {`${card}/${arrayOfKeysOfWords.length}`}
      </span>
    </section>
  );
};

export default Card;
