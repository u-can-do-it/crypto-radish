import React from "react";
import gif from "../../../assets/img/working_doge.gif";
import Header from "../TableTitle/TableTitle";
import style from "./UnderConstruction.module.css";
const underConstruction = props => {
  return (
    <div>
      <Header>Page under construction</Header>
      <figure className={style.ucImage}>
        <img src={gif} alt="dogecoin mining" />
      </figure>
    </div>
  );
};
export default underConstruction;
