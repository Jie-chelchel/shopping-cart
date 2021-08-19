import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import SingleItem from "./components/SingleItem";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products/:id">
          <SingleItem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
