import React from "react";
import Wrap from "../../hoc/Wrapper/Wrapper";
import Nav from "../../components/Navigation/Navigation";
import style from "./Layout.module.css";
const layout = props => {
  return (
    <Wrap>
      <Nav />
      <main className={style.layout}>{props.children}</main>
    </Wrap>
  );
};
export default layout;
