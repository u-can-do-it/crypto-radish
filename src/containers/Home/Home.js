import React, { Component } from "react";
import Wrap from "../../hoc/Wrapper/Wrapper";
import CoinsTable from "../../components/Tables/CoinTable/CoinsTable";
import axios from "../../axios";
import sortData from "../../utils/SortData";
import Loader from "../../components/UI/Loader/Loader";
import TableTitle from "../../components/UI/TableTitle/TableTitle";
import * as controlTypes from "../../components/UI/TableControl/ControlTypes";

class Home extends Component {
  state = {
    coins: null,
    global: null,
    loading: true,
    sortBy: "rank",
    orderASC: true,
    coinDisplayNumber: 100,
    coinDisplayStartIndex: 0
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
  loadNextData = pressedButton => {
    let index = 0;
    if (this.state.coinDisplayNumber === this.state.coins.length - 1) {
      return;
    }

    switch (pressedButton) {
      case controlTypes.NEXT:
        index = this.state.coinDisplayStartIndex + this.state.coinDisplayNumber;
        if (index >= this.state.coins.length) {
          return;
        }
        this.setState({ coinDisplayStartIndex: index });
        break;
      case controlTypes.PREV:
        index = this.state.coinDisplayStartIndex - this.state.coinDisplayNumber;
        if (index < 0) {
          return;
        }
        this.setState({ coinDisplayStartIndex: index });
        break;
      case controlTypes.ALL:
        this.setState({ coinDisplayNumber: this.state.coins.length - 1 });
        break;
      default:
        throw new Error("Invalid property value only: NEXT / PREV / ALL");
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
          startIndex={this.state.coinDisplayStartIndex}
          control={this.loadNextData}
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
