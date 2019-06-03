import React from "react";
import style from "./SerchButton.module.css";
import icon from "../../../../assets/svg/searcher.svg";

const searchBtn = props => {
  return (
    <button btnType="Success" className={style.searchBtn}>
      <svg class="search__icon">
        <use href={icon} />
      </svg>
    </button>
  );
};
export default searchBtn;
