import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex w-full justify-end">
      <nav className="flex  space-x-6 items-center shadow px-6 py-3  justify-self-end">
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/admin/products">
          Admin Product
        </Link>
        <Link className="header-link" to="/products">
          Products
        </Link>
        <Link className="header-link" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
