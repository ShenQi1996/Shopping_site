import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Product_form = props => {
  const userId = useSelector(state => state.session.user.id);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    quantity: 0,
    user: userId,
  });

  const TypeOfForm = props.create;
  const dispatch = useDispatch();
  const handleInput = e => {
    const { name, value } = e.target;
    setProduct(product => ({ ...product, [name]: value }));
  };

  const { title, price, description, quantity } = product;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(props.createProduct(product)).then(
      setProduct({ title: "", price: 0, description: "", quantity: 0 })
    );
  };

  const editSubmit = e => {
    debugger;
    e.preventDefault();
    product.id = props.id;
    dispatch(props.editProduct(product)).then(props.setEdit(false));
  };

  let createForm;
  if (TypeOfForm === "true") {
    createForm = (
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
  } else {
    createForm = (
      <div>
        <h1>edit form</h1>
        <form>
          <label>
            Title:
            <input
              type="test"
              placeholder={props.title}
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
          <button type="submit" onClick={editSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  return <div>{createForm}</div>;
};
export default Product_form;
