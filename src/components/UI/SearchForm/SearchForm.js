import React from "react";
import Button from "../Buton/SearchButton/SearchButton";
import style from "./SearchForm.module.css";

const search = props => {
  return (
    <form className={style.search}>
      <input type="text" name="coin-name" value="Search" />
      <Button />
    </form>
  );
};
export default search;
