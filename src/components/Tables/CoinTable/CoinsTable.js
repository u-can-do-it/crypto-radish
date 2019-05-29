import React from "react";

import { Link } from "react-router-dom";
import SortButton from "../../UI/Buton/TableSortButton/TableSortButton";
import style from "../TableStyle.module.css";

const coinsTable = props => {
  const coins = setCoins();
  const headers = (
    <tr className={style.table__row}>
      <th className={style.table__button} onClick={()=>props.sort("rank")}>
        #
      </th>
      <th onClick={()=>props.sort("name")} >
      Name
      </th>
      <th  onClick={()=> props.sort("quotes.USD.price")}>
          Price USD
      </th>
      <th  onClick={ ()=>props.sort("quotes.USD.percent_change_24h")}>
          Price change
      </th>
      <th  onClick={()=>props.sort("quotes.USD.volume_24h")}>
          Volume M USD     
      </th>
      <th onClick={()=>props.sort("quotes.USD.market_cap")}>
          Market cap M USD    
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
