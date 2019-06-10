import React from "react";
import style from "../ControlButton.module.css";

const arrowNext = props => {
  return (
    <button
      className={style.control__button}
      onClick={() => props.control("NEXT")}
    >
      Next 100 →
    </button>
  );
};
export default arrowNext;
