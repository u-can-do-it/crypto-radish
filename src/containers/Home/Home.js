import React, { Component } from "react";
import Wrap from "../../hoc/Wrapper/Wrapper";
import CoinsTable from "../../components/Tables/CoinTable/CoinsTable";
import axios from "../../axios";

class Home extends Component {
  state = {
    coins: null,
    global: null,
    loading: true
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
      list = <CoinsTable coins={this.state.coins} global={this.state.global} />;
    }

    return <Wrap>{list}</Wrap>;
  }
}
export default Home;
