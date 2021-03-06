import React, { Component } from "react";
import axios from "../../axios";
import CoinMarkets from "../../components/Tables/CoinMarkets/CoinMarkets";
import Wrap from "../../hoc/Wrapper/Wrapper";
import Loader from "../../components/UI/Loader/Loader";
import sortData from "../../utils/SortData";
import TableTitle from "../../components/UI/TableTitle/TableTitle";

class Currency extends Component {
  state = {
    markets: null,
    sortBy: "quotes.USD.volume_24h",
    orderASC: false
  };

  componentDidMount() {
    axios
      .get(`coins/${this.props.computedMatch.params.id}/markets`)
      .then(resp => this.setState({ markets: resp.data }));
  }
  sortMarketsHandler = sortBy => {
    const arr = [...this.state.markets];
    let direction = false;
    if (this.state.sortBy === sortBy && this.state.orderASC === false) {
      arr.reverse();
      this.setState({ markets: arr });

      direction = !this.state.orderASC;
      this.setState({ orderASC: direction });
      return;
    } else {
      const newData = sortData(arr, sortBy, direction);

      this.setState({ sortBy: sortBy });
      this.setState({ orderASC: direction });
      this.setState({ markets: newData });
    }
  };

  render() {
    let header = "";
    let markets = <Loader />;
    if (this.state.markets) {
      header = `${this.state.markets[0].base_currency_name} markets`;
      markets = (
        <CoinMarkets
          markets={this.state.markets}
          sort={this.sortMarketsHandler}
          sortBy={this.state.sortBy}
          direction={this.state.orderASC}
        />
      );
    }

    return (
      <Wrap>
        <TableTitle>{header}</TableTitle>
        {markets}
      </Wrap>
    );
  }
}
export default Currency;
