import React from "react";
import style from "./TableTitle.module.css";

const title = props => {
  return (
    <div className={style.title}>
      <h2>{props.children}</h2>
    </div>
  );
};
export default title;
