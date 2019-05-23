import React, { Component } from "react";
import Wrap from "../../hoc/Wrapper/Wrapper";
import CoinsList from "../../components/Lists/CoinsList/CoinsList";
import axios from "../../axios";

class Home extends Component {
  state = {
    data: "",
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: true });
    console.log("loading");
    axios
      .get("tickers")
      .then(resp => {
        console.log(resp);
        this.storeData(resp.data);
      })
      .then(() => {
        console.log("loading end");
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  storeData = dataArray => {
    const sortedData = dataArray
      .filter(coin => {
        return coin.rank > 0;
      })
      .sort((a, b) => a.rank - b.rank);

    this.setState({ data: sortedData });
  };

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
    let list = null;
    if (this.loading) {
      list = <p>loading</p>;
    } else {
      list = <CoinsList coins={this.state.data} dupa={this.state.loading} />;
    }

    return (
      <Wrap>
        <CoinsList coins={this.state.data} dupa={"dupa"} />
      </Wrap>
    );
  }
}
export default Home;
