import React from "react";
import style from "../TableStyle.module.css";

const coinMarkests = props => {
  const data = getData();
  const sortClass = props.direction ? style.sortASC : style.sortDESC;
  const getSortClass = name => {
    if (name === props.sortBy) {
      return sortClass;
    }
  };
  const headers = (
    <tr>
      <th
        className={getSortClass("exchange_name")}
        onClick={() => {
          props.sort("exchange_name");
        }}
      >
        Exchange
      </th>
      <th
        className={getSortClass("pair")}
        onClick={() => {
          props.sort("pair");
        }}
      >
        Pair
      </th>
      <th
        className={getSortClass("quotes.USD.volume_24h")}
        onClick={() => {
          props.sort("quotes.USD.volume_24h");
        }}
      >
        Volume [24h] M$
      </th>
      <th
        className={getSortClass("quotes.USD.price")}
        onClick={() => {
          props.sort("quotes.USD.price");
        }}
      >
        Price [USD]
      </th>
      <th
        className={getSortClass("adjusted_volume_24h_share")}
        onClick={() => {
          props.sort("adjusted_volume_24h_share");
        }}
      >
        Volume [%]
      </th>
      <th
        className={getSortClass("last_updated")}
        onClick={() => {
          props.sort("last_updated");
        }}
      >
        Last update [min]
      </th>
    </tr>
  );
  function getTime(date) {
    let date1 = new Date(date).getTime();
    const minuteinMS = 1000 * 60;
    let date2 = new Date();
    date2 = date2.getTime();
    // console.log(date2 - date1);
    return Math.round((date2 - date1) / minuteinMS);
  }

  function getData() {
    const tab = [];
    let i = 0;

    for (let market of props.markets) {
      const row = (
        <tr key={i}>
          <td>
            <a href={market.market_url}>{market.exchange_name}</a>
          </td>
          <td>{market.pair}</td>
          <td>{(market.quotes.USD.volume_24h / 100000).toFixed(3)}</td>
          <td>{market.quotes.USD.price.toFixed(2)}</td>
          <td>{market.adjusted_volume_24h_share.toFixed(2)}</td>
          <td>{getTime(market.last_updated)}</td>
        </tr>
      );
      tab.push(row);
      // if (i === 100) {
      //   break;
      // }
      i++;
    }
    return tab;
  }

  return (
    <div className={style.tableBox}>
      <table className={style.table}>
        <thead>{headers}</thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};
export default coinMarkests;
