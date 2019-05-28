import React, { Component } from "react";
import Wrap from "../../hoc/Wrapper/Wrapper";
import CoinsTable from "../../components/Tables/CoinTable/CoinsTable";
import axios from "../../axios";
import sortData from "../../utils/SortData";

const sorting = {
  direction: {
    asc: "ASC",
    desc: "DESC"
  },
  by: {
    rank: "coin.rank",
    name: "coin.name",
    price: "coin.quotes.USD.price",
    volume_24h: "coin.quotes.USD.volume_24h",
    market_cap: "coin.quotes.USD.market_cap"
  }
};
const display = {
  all: "ALL",
  part: 100
};
class Home extends Component {
  state = {
    coins: null,
    global: null,
    loading: true,
    sortBy: "coin.rank",
    sortDirection: "ASC",
    coinDisplayNumber: 100
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("tickers/")
      .then(resp => {
        console.log(resp);
        this.storeData(resp.data);
      })
      .catch(err => console.log(err));

    axios
      .get("global")
      .then(resp => {
        this.setState({ global: resp.data });
        //  console.log(resp);
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  storeData = dataArray => {
    const sortedData = dataArray
      .filter(coin => {
        return coin.rank > 0;
      })
      .sort((a, b) => a.rank - b.rank);

    this.setState({ coins: sortedData });
  };

  sortHandler = sortBy => {
    const arr = [...this.state.coins];
    const sortDirection = this.state.sortDirection === "ASC" ? "DESC" : "ASC";
    const newData = sortData(arr, sortBy, sortDirection);
    console.log(sortDirection);
    this.setState({ sortBy: sortBy });
    this.setState({ sortDirection: sortDirection });
    this.setState({ coins: newData });
    // console.log(newData);
  };

  componentDidUpdate() {}
  // addPriceData = (number = 10) => {
  //   const coins = JSON.parse(JSON.stringify(this.state.data));

  //   for (let coin of coins) {
  //     axios
  //       .get(`coins/${coin.id}/markets`)
  //       .then(resp => {
  //         const pricing = resp.data.filter(resp.data.quotes.USD.volume_24h);
  //         coin["pricing"] = resp.data;
  //       })
  //       .then(() => {})
  //       .catch(err => console.log(err));
  //     if (coin.rank === number) {
  //       break;
  //     }
  //   }
  //   this.setState({ data: coins });
  // };

  render() {
    let list = <p>loading</p>;
    if (this.state.coins && this.state.global) {
      list = (
        <CoinsTable
          coins={this.state.coins}
          global={this.state.global}
          sort={this.sortHandler}
          direction={this.sortDirection}
          sortBy={this.sortBy}
        />
      );
    }

    return <Wrap>{list}</Wrap>;
  }
}
export default Home;
