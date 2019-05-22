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

    axios
      .get("tickers")
      .then(resp => {
        console.log(resp);
        this.storeData(resp.data);
      })
      .then(() => console.log(this.state.data))
      .catch(err => console.log(err));

    this.setState({ loading: false });
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
    return (
      <Wrap>
        <CoinsList coins={this.props.data} />
      </Wrap>
    );
  }
}
export default Home;
