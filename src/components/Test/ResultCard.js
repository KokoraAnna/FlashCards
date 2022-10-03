import React from "react";
import classes from "./ResultCard.module.css";

const ResultCard = (props) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes["result-card"]}>
        <h2 className={classes.title}>Result:</h2>
        <p>{`Your grade is ${props.rightAnswers}/${props.allAnswers}`}</p>
      </div>
    </section>
  );
};

export default ResultCard;
