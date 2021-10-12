import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../actions/product_actions";

const Product_form = props => {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    quantity: 0,
    user: "",
  });

  const dispatch = useDispatch();
  const handleInput = e => {
    const { name, value } = e.target;
    setProduct(product => ({ ...product, [name]: value }));
  };

  const { title, price, description, quantity } = product;
  const handleSubmit = e => {
    e.preventDefault();
    setProduct(product => ({ ...product, user: "615f87558ceea804088f0d9d" }));
    dispatch(createProduct(product));
  };

  return (
    <div>
      <h1>create form</h1>

      <form>
        <label>
          Title:
          <input
            type="test"
            placeholder="Title"
            value={title}
            onChange={handleInput}
            name="title"
          />
        </label>
        <label>
          price:
          <input
            type="number"
            placeholder="0"
            value={price}
            onChange={handleInput}
            name="price"
          />
        </label>
        <label>
          Description:
          <input
            type="test"
            placeholder="description"
            value={description}
            onChange={handleInput}
            name="description"
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            placeholder="0"
            value={quantity}
            onChange={handleInput}
            name="quantity"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Product_form;
