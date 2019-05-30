import React from "react";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

const navigation = props => {
  return (
    <nav className={style.nav}>
      <Logo />
      <div className={style.navList}>
        <Link className={style.nav__link} to={"/"}>
          <h4>Coins</h4>
        </Link>
        <Link className={style.nav__link} to={"/markets"}>
          <h4>Markets</h4>
        </Link>
        <Link className={style.nav__link} to={"/news"}>
          <h4>News</h4>
        </Link>
        <Link className={style.nav__link} to={"/arbitrage"}>
          <h4>Arbitrage</h4>
        </Link>
      </div>
    </nav>
  );
};
export default navigation;
