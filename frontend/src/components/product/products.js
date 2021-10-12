import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  deleteProduct,
} from "../../actions/product_actions";
import Product_form from "./product_form/product_form";
const Products = props => {
  const Products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   setProduct(product => ({ ...product, [name]: value }));
  // };

  // const { title, price, description, quantity } = product;

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setProduct(product => ({ ...product, user: "615f87558ceea804088f0d9d" }));
  //   dispatch(createProduct(product));
  // };

  const handleDelet = ele => {
    dispatch(deleteProduct(ele));
  };

  return (
    <div>
      <h1>Products Page</h1>
      <div>
        <h1>Products </h1>
        {Products.map(ele => (
          <div>
            {ele.title}
            <button onClick={() => handleDelet(ele._id)}>Delete</button>
          </div>
        ))}

        <div>
          <h1>create your product</h1>
          <Product_form createProduct={createProduct} />
        </div>
      </div>
    </div>
  );
};

export default Products;
