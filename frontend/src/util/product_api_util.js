import axios from "axios";

export const fetchProducts = () => {
  return axios.get("/api/products/allProducts");
};

export const fetchProduct = productId => {
  return axios.get(`/api/products/${productId}`);
};

export const fetchUserProducts = userId => {
  return axios.get(`/api/products/user/${userId}`);
};

export const createProduct = data => {
  return axios.post("/api/products/add", data);
};

export const deleteProduct = productId => {
  return axios.delete(`/api/products/${productId}`);
};

export const editProduct = product => {
  return axios.patch(`/api/products/update/${product._id}`, product);
};
