import React, { useState } from "react";
import RowOfTable from "./RowOfTable";
import classes from "./List.module.css";

const List = (props) => {
  const [title, setTitle] = useState(props.decks[0].titleOfDeck);

  // finding the selected deck
  const currentDeck = props.decks.find((deck) => {
    return deck.titleOfDeck === title;
  });

  let rows = [];
  for (const key in currentDeck.words) {
    rows.push(
      <RowOfTable
        key={key}
        term={currentDeck.words[key].term}
        definition={currentDeck.words[key].definition}
        isLearned={currentDeck.words[key].isLearned}
      />
    );
  }

  const options = props.decks.map((deck) => (
    <option key={deck.id} value={deck.titleOfDeck}>
      {deck.titleOfDeck}
    </option>
  ));

  const changeDecksHandler = (evt) => {
    setTitle(evt.target.value);
  };

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.section__header}>
          <h2 className={classes.section__title}>Terms in the module</h2>
          <select
            className={classes.select}
            value={title}
            onChange={changeDecksHandler}
          >
            {options}
          </select>
        </div>
        <table className={classes.table}>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <h3>Term</h3>
              </td>
              <td>
                <h3>Definition</h3>
              </td>
              <td>
                <h3>Learned</h3>
              </td>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default List;
