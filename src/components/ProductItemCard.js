import React from "react";
import { Link } from "react-router-dom";

const product = ({ product }) => {
  return (
    <Link to={`/products/${product.prodId}`}>
      <div className="shadow rounded-lg overflow-hidden ">
        <article>
          <img
            className="h-52 object-cover w-full"
            src={product.imgUrl}
            alt={product.title}
          />
          <div className="px-6 py-2">
            <h3 className="text-2xl bold">{product.title}</h3>
            <p className="my-2">{product.desc}</p>
          </div>
        </article>
      </div>
    </Link>
  );
};

export default product;
