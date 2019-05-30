import React from "react";
import icon from "../../../assets/svg/radish.svg";
import { Link } from "react-router-dom";
import style from "./Logo.module.css";

const logo = props => {
  return (
    <Link className={style.logo} to={"/"}>
      <img className={style.logo__icon} src={icon} alt="Logo" />
      <h1 className={style.logo__header}>Crypto-Radish</h1>
    </Link>
  );
};
export default logo;
