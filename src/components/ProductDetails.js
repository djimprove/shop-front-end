import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = ({ prodId }) => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    setProduct(() => ({
      prodId: 1,
      title: "Shooe",
      desc: "This was nice product",
      imgUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }));
    return () => {};
  }, []);
  return (
    <div>
      <div>
        Product Id:{params.prodId}:isAdmin:{params.isAdmin ? "true" : "false"}
      </div>
      <div className=" max-w-full ">
        <article className="shadow rounded-lg rounded overflow-x-hidden ">
          <img
            className="w-full h-96"
            src={product.imgUrl}
            alt={product.title}
          />
          <div className="px-6 py-10">
            <h3 className="text-2xl bold">{product.title}</h3>
            <p className="my-2">{product.desc}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetails;
