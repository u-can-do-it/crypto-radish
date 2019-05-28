import React from "react";
import style from "./TableSortButton.module.css";

const tableButton = props => {
  return (
    <button className={style.button} onClick={props.sort}>
      {props.name}
    </button>
  );
};
export default tableButton;
