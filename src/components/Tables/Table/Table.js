import React from "react";
import style from "./Table.module.css";

const table = props => {
  return (
    <div>
      <table className={style.table}>
        <thead className={style.header}>{props.headers}</thead>
        <tbody>{props.data}</tbody>
      </table>
    </div>
  );
};
export default table;
