import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Checkout from "./components/checkout/checkout";
import Canceled from "./components/checkout/stripe-checkout/canceled";
import Success from "./components/checkout/stripe-checkout/success";
import HomePage from "./components/home-page";
import NotFound from "./components/not-found";
import CartPage from "./components/pages/cart-page/cart-page";
import Shop from "./components/pages/shop/shop";
import singleProduct from "./components/single-product/single-product";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/product/:id" component={singleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/success" component={Success} />
        <Route path="/canceled" component={Canceled} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
