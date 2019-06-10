import React from "react";
import style from "../ControlButton.module.css";
const arrowPrev = props => {
  return (
    <button
      className={style.control__button}
      disabled={props.index === 0}
      onClick={() => props.control("PREV")}
    >
      ← Previous 100
    </button>
  );
};
export default arrowPrev;
