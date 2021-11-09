import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  createProduct,
  deleteProduct,
  editProduct,
} from "../../actions/product_actions";
import Product_form from "./product_form/product_form";
import ProductPage from "./product_page";

const Products = props => {
  const signIn = useSelector(state => state.session.isAuthenticated);
  const Products = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let product = Products.map((ele, i) => (
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
  let CreateForm;

  if (signIn) {
    CreateForm = (
      <div>
        <h1>Don't have a product yet? </h1>
        <Product_form createProduct={createProduct} create="true" />;
      </div>
    );
  } else {
    CreateForm = <h1>SignIn to create your own Product</h1>;
  }

  return (
    <div>
      <h1>Products Page</h1>
      <div>
        <h1>Products </h1>
        {product}
        {CreateForm}
      </div>
    </div>
  );
};

export default Products;
