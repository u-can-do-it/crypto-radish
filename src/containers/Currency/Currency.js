import React, { Component } from "react";
import axios from "../../axios";

class Currency extends Component {
  state = {
    markets: null
  };

  componentDidMount() {
    axios
      .get(`coins/${this.props.computedMatch.params.id}/markets`)
      .then(resp => this.setState({ markets: resp.data }))
      .then(() => console.log(this.state.markets));
  }
  sortMarkets() {}
  render() {
    return <p> I'm currency</p>;
  }
}
export default Currency;
