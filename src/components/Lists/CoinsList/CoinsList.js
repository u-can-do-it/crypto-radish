import React from "react";
import style from "./CoinsList.module.css";

const coinsList = props => {
  const coins = setCoins();

  function setCoins() {
    const tab = [];
    console.log(props.coin);
    let asd = props.dupa;
    console.log(asd);
    // for (let coin of props.coins) {
    //   const row = (
    //     <tr>
    //       <td>{coin.name}</td>
    //     </tr>
    //   );
    //   tab.push(row);
    // }

    // return tab;
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
        <tbody>{coins}</tbody>
      </table>
    </div>
  );
};
export default coinsList;
