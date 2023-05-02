import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="py-3">
        <Switch>
          <Route path="/product/:id" exact>
            <ProductScreen />
          </Route>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
