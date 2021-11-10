import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserProducts,
  deleteProduct,
  editProduct,
} from "../../actions/product_actions";
import ProductPage from "../product/product_page";
import Product_form from "../product/product_form/product_form";
const UserPage = props => {
  const user = useSelector(state => state.session.user);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProducts(user.id));
  });
  let product = products.map((ele, i) => (
    <ProductPage
      key={i}
      deleteProduct={deleteProduct}
      editProduct={editProduct}
      id={ele._id}
      title={ele.title}
      price={ele.price}
      description={ele.description}
      quantity={ele.quantity}
      user={ele.user}
    />
  ));

  const [create, setCreate] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    setCreate(!create);
  };
  let page;
  if (create === false) {
    page = product;
  } else {
    page = <Product_form create="true" />;
  }
  return (
    <div>
      <h1>User Infro Page</h1>
      <h2>Username: {user.name} </h2>
      <h2>User's email: {user.email}</h2>
      <h2>Create new product</h2>
      <button onClick={handleChange}> Create </button>
      {page}
    </div>
  );
};

export default UserPage;
