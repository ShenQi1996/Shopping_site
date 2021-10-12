import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import Product_form from "./product_form/product_form";

const Products = props => {
  const dispatch = useDispatch();

  let Products = useSelector(state => state.products);


  useEffect(() => {
    dispatch(fetchProducts())
  },[]);
  let info;
  if (Products.length == 0) {
    info = <div></div>;
  } else {
    info = Products.map(ele => (
      <li key={ele._id}>
        {" "}
        <div>
          <h1>{ele.title}</h1>
          <h2>{ele.price}</h2>
          <h2>{ele.quantity}</h2>
          <p>{ele.description}</p>
          <h3>{ele.user}</h3>
        </div>
      </li>
    ));
  }
  console.log(Products);
  return (
    <div>
      <h1>Products Page</h1>
      <div>
          <h1>Products </h1>
        <ul>{info}</ul>

        <h1>
            create your product
        </h1>
        <Product_form />
      </div>
    </div>
  );
};

export default Products;
