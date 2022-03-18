import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Footer from "./components/layout/Footer";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="max-w-screen-xl m-auto overflow-x-hidden">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>

        <Route path="/products/:productId">
          <ProductPage />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
