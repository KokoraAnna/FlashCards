import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import classes from "./Test.module.css";

const Test = (props) => {
  const [rightAnswer, setRightAnswer] = useState(0);
  const [card, setCard] = useState(0);
  const params = useParams();

  const item = props.dataOfCards.find(
    (item) => item.titleOfDeck === params.deckTitle
  );

  const lengthOfArrayOfWords = Object.keys(item.words).length;

  let arrayOfWords = [];

  for (const key in item.words) {
    arrayOfWords.push({
      key: key,
      term: item.words[key].term,
      definition: item.words[key].definition,
      isLearned: item.words[key].isLearned,
    });
  }

  const shuffledArray = useMemo(() => {
    return [...arrayOfWords].sort(() => Math.random() - 0.5);
  }, [item.words]);

  const checkAnswerHandler = (evt) => {
    evt.preventDefault();
    setCard((prev) => prev + 1);

    if (
      evt.target.id == "correct" &&
      arrayOfWords[card].key === shuffledArray[card].key
    ) {
      setRightAnswer((prev) => prev + 1);
    }

    if (
      evt.target.id == "incorrect" &&
      arrayOfWords[card].key !== shuffledArray[card].key
    ) {
      setRightAnswer((prev) => prev + 1);
    }
  };

  return card > lengthOfArrayOfWords - 1 ? (
    <ResultCard rightAnswers={rightAnswer} allAnswers={lengthOfArrayOfWords} />
  ) : (
    <section>
      <div className={classes.section}>
        <div className={classes.card}>
          <div className={classes.card__wrapper}>
            <div className={classes.card__side}>Choose the correct answer:</div>
          </div>
          <div className={classes.card__term}>{arrayOfWords[card].term}</div>
          <div className={classes.divider}></div>
          <div className={classes.card__def}>
            {shuffledArray[card].definition}
          </div>
        </div>
      </div>
      <div onClick={checkAnswerHandler}>
        <button className={classes["btn-incorrectly"]} id="incorrect">
          Incorrectly
        </button>
        <button className={classes["btn-correctly"]} id="correct">
          Сorrectly
        </button>
      </div>
      <span className={classes.numbers}>
        {`${card + 1}/${lengthOfArrayOfWords}`}
      </span>
    </section>
  );
};

export default Test;
