import React from "react";
import style from "./Table.module.css";

const table = props => {
  return (
    <div className={style.table}>
      <table>
        <thead>{props.headers}</thead>
        <tbody>{props.data}</tbody>
      </table>
    </div>
  );
};
export default table;
