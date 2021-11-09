import * as ProductAPIUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_USER_PRODUCTS = "RECEIVE_USER_PRODUCCTS";
export const RECEIVE_NEW_PRODUCT = "RECEIVE_NEW_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products,
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product,
});

const receiveUserProducts = products => ({
  type: RECEIVE_USER_PRODUCTS,
  products,
});

const receiveNewProduct = product => ({
  type: RECEIVE_NEW_PRODUCT,
  product,
});

const removeProduct = productId => ({
  type: DELETE_PRODUCT,
  productId,
});

const changeProduct = productId => ({
  type: EDIT_PRODUCT,
  productId,
});

export const fetchProducts = () => dispatch => {
  return ProductAPIUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)))
    .catch(err => console.log(err));
};

export const fetchProduct = productId => dispatch => {
  return ProductAPIUtil.fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)))
    .catch(err => console.log(err));
};

export const fetchUserProducts = userId => dispatch =>
  ProductAPIUtil.fetchUserProducts(userId)
    .then(products => dispatch(receiveUserProducts(products)))
    .catch(err => console.log(err));

export const createProduct = data => dispatch => {
  return ProductAPIUtil.createProduct(data)
    .then(product => dispatch(receiveNewProduct(product)))
    .catch(err => console.log(err));
};

export const deleteProduct = productId => dispatch => {
  return ProductAPIUtil.deleteProduct(productId)
    .then(productId => dispatch(removeProduct(productId)))
    .catch(err => console.log(err));
};

export const editProduct = productId => dispatch => {
  return ProductAPIUtil.editProduct(productId)
    .then(product => dispatch(changeProduct(product)))
    .catch(err => console.log(err));
};
