import React from "react";
import { useParams } from "react-router";

const AddProducts = () => {
  const { isAdmin, isEdit } = useParams();
  return (
    <div>
      <form>
        <ul>
          <li>
            <label htmlFor="imgUrl"></label>
            <input type="text" name="imgUrl" id="imgUrl" />
          </li>
          <li>
            <label htmlFor="title"></label>
            <input type="text" name="title" id="title" />
          </li>
          <li>
            <label htmlFor="desc"></label>
            <input type="text" name="desc" id="desc" />
          </li>
          {isAdmin ? <button type="submit">Add Product</button> : null}
          {isAdmin && isEdit ? (
            <button type="submit">Update Product</button>
          ) : null}
        </ul>
      </form>
    </div>
  );
};

export default AddProducts;
