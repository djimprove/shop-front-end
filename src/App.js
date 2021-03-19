import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppHeader from "./AppHeader";
import About from "./views/About";
import Home from "./views/Home";
import Product from "./views/Products";
import Admin from "./views/admin/Admin";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <AppHeader className=""></AppHeader>

        <div className="sm:mt-10 md:mt-4">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>

            <Route path="/admin/" component={Admin}></Route>
            <Route path="/products" exact component={Product}></Route>
            <Route
              path="/products/:prodId/:isAdmin?"
              component={ProductDetails}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
