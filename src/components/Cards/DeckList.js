import React from "react";
import classes from "./DeckList.module.css";
import DeckOfCards from "./DeckOfCards";

const DeckList = (props) => {
  const deck = props.cards.map((card) => {
    let numberOfLearnedTerms = 0;
    const lengthOfArrayTerms = Object.keys(card.words).length;

    for (const key in card.words) {
      if (card.words[key].isLearned == "yes") {
        numberOfLearnedTerms += 1;
      }
    }

    // find the percentage of words learned
    const percent = Math.floor(
      (100 * numberOfLearnedTerms) / lengthOfArrayTerms
    );

    return (
      <DeckOfCards
        key={card.id}
        id={card.id}
        titleOfDeck={card.titleOfDeck}
        percent={`${percent}%`}
      />
    );
  });

  return (
    <>
      <ul className={classes.list}>{deck}</ul>
    </>
  );
};

export default DeckList;
