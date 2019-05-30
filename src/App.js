import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Currency from "./containers/Currency/Currency";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Currency path="/currency/:id" component={Currency} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
