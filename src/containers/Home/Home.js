import React, { Component } from "react";
import Wrap from "../../hoc/Wrapper/Wrapper";
import CoinsTable from "../../components/Tables/CoinTable/CoinsTable";
import axios from "../../axios";
import sortData from "../../utils/SortData";
import Loader from "../../components/UI/Loader/Loader";
import TableTitle from "../../components/UI/TableTitle/TableTitle";

class Home extends Component {
  state = {
    coins: null,
    global: null,
    loading: true,
    sortBy: "rank",
    orderASC: true,
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
    let direction = true;
    if (this.state.sortBy === sortBy && this.state.orderASC === true) {
      arr.reverse();
      this.setState({ coins: arr });

      direction = !this.state.orderASC;
      this.setState({ orderASC: direction });
      return;
    } else {
      const newData = sortData(arr, sortBy, direction);

      this.setState({ sortBy: sortBy });
      this.setState({ orderASC: direction });
      this.setState({ coins: newData });
    }
  };

  render() {
    let list = <Loader />;
    if (this.state.coins && this.state.global) {
      list = (
        <CoinsTable
          coins={this.state.coins}
          global={this.state.global}
          sort={this.sortHandler}
          direction={this.state.orderASC}
          sortBy={this.state.sortBy}
          toDisplay={this.state.coinDisplayNumber}
        />
      );
    }

    return (
      <Wrap>
        <TableTitle>Top 100 currencies</TableTitle>
        {list}
      </Wrap>
    );
  }
}
export default Home;
