import React from "react";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import style from "./Navigation.module.css";
//import SearchForm from "../UI/SearchForm/SearchForm";

const navigation = props => {
  const links = [
    ["Coins", "/"],
    ["Markets", "/markets"],
    ["News", "/news"],
    ["Arbitrage", "/arbitrage"]
  ];

  const navLinks = links.map((val, index) => {
    return (
      <li className={style.nav__link} key={index}>
        <Link to={val[1]}>
          <h4>{val[0]}</h4>
        </Link>
      </li>
    );
  });

  return (
    <nav className={style.nav}>
      <Logo />
      <ul className={style.navList}>{navLinks}</ul>
    </nav>
  );
};
export default navigation;
