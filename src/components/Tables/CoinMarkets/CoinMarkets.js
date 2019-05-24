import React from "react";
import Table from "../Table/Table";
import { Link } from "react-router-dom";

const coinMarkests = props => {
  const data = getData();
  const headers = (
    <tr>
      <th>Exchange</th>
      <th>Pair</th>
      <th>Volume (24h) M$</th>
      <th>Price $</th>
      <th>Volume (%)</th>
      <th>Updated</th>
    </tr>
  );
  function getData() {
    const tab = [];
    let i = 0;
    console.log(props.markets);
    for (let market of props.markets) {
      const row = (
        <tr key={`${market.exchange_id}_${market.pair}`}>
          <td>
            <a href={market.market_url}>{market.exchange_name}</a>
          </td>
          <td>{market.pair}</td>
          <td>{(market.quotes.USD.volume_24h / 100000).toFixed(3)}</td>
          <td>{market.quotes.USD.price.toFixed(2)}</td>
          <td>{market.adjusted_volume_24h_share.toFixed(2)}</td>
          <td>{market.last_updated}</td>
        </tr>
      );
      tab.push(row);
      if (i === 100) {
        break;
      } else {
        i++;
      }
    }
    return tab;
  }

  return <Table headers={headers} data={data} />;
};
export default coinMarkests;
