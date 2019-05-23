import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Currency from "./containers/Currency/Currency";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Currency path="/currency/:id" component={Currency} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
