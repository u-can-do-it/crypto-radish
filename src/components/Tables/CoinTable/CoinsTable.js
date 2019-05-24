import React from "react";
import Table from "../Table/Table";
import { Link } from "react-router-dom";

const coinsTable = props => {
  const coins = setCoins();
  const headers = (
    <tr>
      <th>Name</th>
      <th>Price USD</th>
      <th>Price change</th>
      <th>Volume M USD</th>
      <th>Market Cap %</th>
      <th>Market cap M USD</th>
    </tr>
  );
  function setCoins() {
    const tab = [];

    for (let coin of props.coins) {
      const row = (
        <tr key={coin.id}>
          <td>
            <Link to={`currency/${coin.id}`}>{coin.name}</Link>
          </td>
          <td>{coin.quotes.USD.price.toFixed(2)}</td>
          <td />
          <td>{(coin.quotes.USD.volume_24h / 1000000).toFixed(3)}</td>
          <td>
            {(
              (coin.quotes.USD.market_cap / props.global.market_cap_usd) *
              100
            ).toFixed(3)}
          </td>
          <td>{(coin.quotes.USD.market_cap / 1000000).toFixed(2)}</td>
        </tr>
      );
      tab.push(row);
      if (coin.rank === 100) {
        break;
      }
    }
    return tab;
  }

  return <Table headers={headers} data={coins} />;
};
export default coinsTable;
