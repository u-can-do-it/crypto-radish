import React from "react";
import style from "./CoinsList.module.css";

const coinsList = props => {
  const coins = setCoins();

  function setCoins() {
    const tab = [];
    if (props.coins) {
      for (let coin of props.coins) {
        tab.push(coin);
      }
    } else {
      return "loading";
    }
    return tab;
  }

  return (
    <div className={style.list}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Price change</th>
            <th>volume</th>
            <th>Market Cap %</th>
            <th>Market cap</th>
          </tr>
        </thead>
        {coins}
      </table>
    </div>
  );
};
export default coinsList;
