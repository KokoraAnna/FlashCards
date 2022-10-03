import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./StartTest.module.css";

const StartTest = () => {
  const [data, setData] = useState(false);
  const [option, setOption] = useState(false);
  const { isLoading, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    // transform the data from object to array

    const transformData = (dataObj) => {
      const loadedData = [];

      for (const key in dataObj) {
        loadedData.push({
          id: key,
          titleOfDeck: dataObj[key].titleOfDeck,
        });
      }
      setData(loadedData);
    };
    fetchData(
      {
        url: "https://flashcards-f1f10-default-rtdb.europe-west1.firebasedatabase.app/decks.json",
      },
      transformData
    );
  }, [fetchData]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const options = data.map((deck) => (
    <option key={deck.id} value={deck.titleOfDeck}>
      {deck.titleOfDeck}
    </option>
  ));

  const setValueHandler = (evt) => {
    setOption(evt.target.value);
  };

  const link = !option ? `/test/${data[0].titleOfDeck}` : `/test/${option}`;

  return (
    <section className={classes.wrapper}>
      <div className={classes["start-card"]}>
        <h2 className={classes.title}>Test your knowledge!</h2>
        <p>Just choose the collection:</p>
        <select className={classes.select} onChange={setValueHandler}>
          {options}
        </select>
      </div>
      <Link className={classes.button} to={link}>
        Начать
      </Link>
    </section>
  );
};

export default StartTest;
