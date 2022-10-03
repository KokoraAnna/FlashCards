import React from "react";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.section}>
      <p className={classes.text}>Oopps, something went wrong :(</p>
      <p className={classes.clarification}>The page is under development.</p>
    </div>
  );
};

export default ErrorPage;
