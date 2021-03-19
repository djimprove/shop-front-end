import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import AddProducts from "./AddProducts";
import Products from "./Products";

const products = () => {
  return (
    <div className="">
      <header className="flex w-full justify-end">
        <nav className="flex  space-x-6 items-center shadow px-6 py-3 w-1/2 justify-self-end">
          <Link to="/admin/">Products</Link>
          <Link to="/admin/addproduct?isAdmin=true">Add Product</Link>
        </nav>
      </header>
      <Switch>
        {/* <Route path="/addproduct"></Route> */}
        <Route path="/admin" exact component={Products}></Route>
        <Route path="/admin/addproduct/" component={AddProducts}></Route>
      </Switch>
    </div>
  );
};

export default products;
