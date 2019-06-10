import React from "react";
import Next from "./Arrow/ArrowNext";
import Prev from "./Arrow/ArrowPrev";
import All from "./ShowAll/ShowAll";
import style from "./ControlPanel.module.css";

const controlPanel = props => {
  return (
    <div className={style.controlPanel}>
      <Prev control={props.control} index={props.startIndex} />

      <All control={props.control} />
      <Next control={props.control} />
    </div>
  );
};
export default controlPanel;
