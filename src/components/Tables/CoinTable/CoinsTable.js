import React, { Component } from "react";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import SortButton from "../../UI/Buton/TableSortButton/TableSortButton";
import style from "./CoinsTable.module.css";

class coinsTable extends Component {
  state = {
    coinsData: [],
    headers: [
      "#",
      "Name",
      "Price USD",
      "Price change %",
      "Volume M USD",
      "Market cap %",
      "Marketcap M USD"
    ]
  };
  componentDidMount() {
    const coinsData = [];

    for (let coin of this.props.coins) {
      const data = {
        rank: coin.rank,
        name: coin.name,
        price: coin.quotes.USD.price.toFixed(2),
        percentChange: coin.quotes.USD.percent_change_24h,
        volume24h: (coin.quotes.USD.volume_24h / 100000).toFixed(3),
        marketCapContribution: (
          (coin.quotes.USD.market_cap / this.props.global.market_cap_usd) *
          100
        ).toFixed(3),
        marketCapUSD: (coin.quotes.USD.market_cap / 1000000).toFixed(2)
      };
      coinsData.push(data);
    }
    console.log(coinsData);
  }

  coins = this.setCoins();
  headers = (
    <tr className={style.table__row}>
      <th
        className={style.table__button}
        onClick={() => this.props.sort("rank")}
      >
        #
      </th>
      <th>
        <SortButton name={"Name"} sort={() => this.props.sort("name")} />
      </th>
      <th>
        <SortButton
          name={"Price USD"}
          sort={() => this.props.sort("quotes.USD.price")}
        />
      </th>
      <th>
        <SortButton
          name={"Price change"}
          sort={() => this.props.sort("quotes.USD.percent_change_24h")}
        />
      </th>
      <th>
        <SortButton
          name={"Volume M USD"}
          sort={() => this.props.sort("quotes.USD.volume_24h")}
        />
      </th>
      <th>
        <SortButton
          name={"Market Cap %"}
          sort={() => this.props.sort("quotes.USD.volume_24h")}
        />
      </th>
      <th>
        <SortButton
          name={"Market cap M USD"}
          sort={() => this.props.sort("quotes.USD.market_cap")}
        />
      </th>
    </tr>
  );
  setCoins() {
    const tab = [];

    for (let coin of this.props.coins) {
      const row = (
        <tr key={coin.id}>
          <td>{coin.rank}</td>
          <td>
            <Link to={`currency/${coin.id}`}>{coin.name}</Link>
          </td>
          <td>{coin.quotes.USD.price.toFixed(2)}</td>
          <td>{coin.quotes.USD.percent_change_24h}%</td>
          <td>{(coin.quotes.USD.volume_24h / 100000).toFixed(3)}</td>
          <td>
            {(
              (coin.quotes.USD.market_cap / this.props.global.market_cap_usd) *
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
  render() {
    return (
      <Table className={style.table} headers={this.headers} data={this.coins} />
    );
  }
}
export default coinsTable;
