import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Product_form from "./product_form/product_form";

const ProductPage = props => {
  const dispatch = useDispatch();
  const Product = props;
  const [Edit, setEdit] = useState(false);
  const handleDelete = id => {
    dispatch(Product.deleteProduct(id));
  };
  let edit;
  const handleEdit = () => {
    setEdit(!Edit);
  };
  if (Edit) {
    edit = (
      <div>
        <h1>Edit works</h1>
        <Product_form
          create="false"
          setEdit={setEdit}
          editProduct={Product.editProduct}
          id={Product.id}
          title={Product.title}
          price={Product.price}
          description={Product.description}
          quantity={Product.quantity}
        />
        ;
      </div>
    );
  } else {
    edit = <h1>Edit is false</h1>;
  }
  return (
    <div>
      <h1>Title: {Product.title} </h1>
      <ul>
        <li>Price: {Product.price}</li>
        <li>Description: {Product.description}</li>
        <li>Quantity: {Product.quantity}</li>
        <li>User: {Product.user}</li>
      </ul>
      <button onClick={() => handleDelete(Product.id)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      {edit}
    </div>
  );
};

export default ProductPage;
