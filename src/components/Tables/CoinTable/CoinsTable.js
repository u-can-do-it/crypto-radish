import React from "react";

import { Link } from "react-router-dom";
import SortButton from "../../UI/Buton/TableSortButton/TableSortButton";
import style from "./CoinsTable.module.css";

const coinsTable = props => {
  const coins = setCoins();
  const headers = (
    <tr className={style.table__row}>
      <th className={style.table__button} onClick={() => props.sort("rank")}>
        #
      </th>
      <th>
        <SortButton name={"Name"} sort={() => props.sort("name")} />
      </th>
      <th>
        <SortButton
          name={"Price USD"}
          sort={() => props.sort("quotes.USD.price")}
        />
      </th>
      <th>
        <SortButton
          name={"Price change"}
          sort={() => props.sort("quotes.USD.percent_change_24h")}
        />
      </th>
      <th>
        <SortButton
          name={"Volume M USD"}
          sort={() => props.sort("quotes.USD.volume_24h")}
        />
      </th>

      <th>
        <SortButton
          name={"Market cap M USD"}
          sort={() => props.sort("quotes.USD.market_cap")}
        />
      </th>
    </tr>
  );
  function setCoins() {
    const tab = [];
    let index = 0;
    for (let coin of props.coins) {
      const row = (
        <tr key={coin.id}>
          <td>{coin.rank}</td>
          <td>
            <Link to={`currency/${coin.id}`}>{coin.name}</Link>
          </td>
          <td>{coin.quotes.USD.price.toFixed(2)}</td>
          <td>{coin.quotes.USD.percent_change_24h}%</td>
          <td>{(coin.quotes.USD.volume_24h / 100000).toFixed(3)}</td>

          <td>{(coin.quotes.USD.market_cap / 1000000).toFixed(2)}</td>
        </tr>
      );
      index++;
      tab.push(row);
      if (props.toDisplay < index) {
        break;
      }
    }
    return tab;
  }

  return (
    <table>
      <thead>{headers}</thead>
      <tbody>{coins}</tbody>
    </table>
  );
};
export default coinsTable;
