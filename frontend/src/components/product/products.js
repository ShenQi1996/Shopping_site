import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  deleteProduct,
} from "../../actions/product_actions";
import Product_form from "./product_form/product_form";
import ProductPage from "./product_page";

const Products = props => {
  const Products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let product = Products.map((ele, i) => (
    <ProductPage
      key={i}
      deleteProduct={deleteProduct}
      id={ele._id}
      title={ele.title}
      price={ele.price}
      description={ele.description}
      quantity={ele.quantity}
      user={ele.user}
    />
  ));

  return (
    <div>
      <h1>Products Page</h1>
      <div>
        <h1>Products </h1>
        {product}
        <div>
          <h1>create your product</h1>
          <Product_form createProduct={createProduct} />
        </div>
      </div>
    </div>
  );
};

export default Products;
