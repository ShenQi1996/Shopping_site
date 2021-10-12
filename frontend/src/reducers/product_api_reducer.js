import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_USER_PRODUCTS,
  RECEIVE_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../actions/product_actions";

const startState = [];

const productsAPIReducer = (state = startState, action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.data;
    case RECEIVE_PRODUCT:
      newState = action.product.data;
      return newState;
    case RECEIVE_NEW_PRODUCT:
      return [...newState, action.product.data];
    case DELETE_PRODUCT:
      const filtered = newState.filter(
        product => product._id === action.productId.data
      );
      for (let i = 0; i < filtered.length; i++) {
        if (newState[i]._id === filtered[i]._id) {
          delete newState[i];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default productsAPIReducer;
