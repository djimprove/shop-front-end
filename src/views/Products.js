import React from "react";
import ProductList from "../components/ProductList";

const Product = () => {
  const products = [
    {
      prodId: 1,
      title: "Shooe",
      desc: "This was nice product",
      imgUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      prodId: 2,
      title: "Headphone",
      desc: "sounds cool!!!!!!",
      imgUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return <ProductList products={products}></ProductList>;
};

export default Product;
