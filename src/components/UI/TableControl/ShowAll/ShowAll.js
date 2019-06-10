import React from "react";
import style from "../ControlButton.module.css";

const showAll = props => {
  return (
    <button
      className={style.control__button + " " + style.control__buttonCenter}
      onClick={() => props.control("ALL")}
    >
      Show all
    </button>
  );
};
export default showAll;
