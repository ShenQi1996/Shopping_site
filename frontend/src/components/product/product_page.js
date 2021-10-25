import React from "react";
import { useDispatch } from "react-redux";

const ProductPage = props => {
  const dispatch = useDispatch();
  const Product = props;

  const handleDelete = id => {
    dispatch(Product.deleteProduct(id));
  };
  return (
    <div>
      <h1>{Product.title} </h1>
      <ul>
        <li>{Product.price}</li>
        <li>{Product.description}</li>
        <li>{Product.quantity}</li>
        <li>{Product.user}</li>
      </ul>
      <button onClick={() => handleDelete(Product.id)}>Delete</button>
    </div>
  );
};

export default ProductPage;
