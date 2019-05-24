import React, { Component } from "react";
import axios from "../../axios";
import CoinMarkets from "../../components/Tables/CoinMarkets/CoinMarkets";
import Wrap from "../../hoc/Wrapper/Wrapper";
class Currency extends Component {
  state = {
    markets: null
  };

  componentDidMount() {
    axios
      .get(`coins/${this.props.computedMatch.params.id}/markets`)
      .then(resp => this.setState({ markets: resp.data }));
  }
  sortMarkets() {}

  render() {
    let markets = <p>loading</p>;
    if (this.state.markets) {
      markets = <CoinMarkets markets={this.state.markets} />;
    }

    return <Wrap> {markets}</Wrap>;
  }
}
export default Currency;
