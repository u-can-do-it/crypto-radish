import React from "react";
import Next from "./Arrow/ArrowNext";
import Prev from "./Arrow/ArrowPrev";
import All from "./ShowAll/ShowAll";

const controlPanel = props => {
  return (
    <div>
      <Prev />
      <All />
      <Next />
    </div>
  );
};
export default controlPanel;
