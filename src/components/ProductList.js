import React from "react";
import ProductItemCard from "./ProductItemCard";

const ProductList = ({ products }) => {
  const productList = products.map((product) => {
    return (
      <ProductItemCard product={product} key={product.prodId}></ProductItemCard>
    );
  });
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">{productList}</div>
    </div>
  );
};

export default ProductList;
