import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../../assets/free_icon_1.svg";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img className={classes.logo__img} src={logo} alt="Logo" />
          <p className={classes.title}>FlashCards</p>
        </div>
        <nav className={classes.nav}>
          <ul className={classes.nav__list}>
            <li className={classes.nav__item}>
              <NavLink to="/decks" className={classes.a}>
                Decks
              </NavLink>
            </li>
            <li className={classes.nav__item}>
              <NavLink to="/start" className={classes.a}>
                Tests
              </NavLink>
            </li>
            <li className={`${classes.nav__item} ${classes.divider}`}>
              <NavLink to="/list" className={classes.a}>
                List
              </NavLink>
            </li>
            <li className={classes.nav__item}>
              <NavLink to="/error" className={classes.a}>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
