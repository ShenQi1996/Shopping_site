import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_USER_PRODUCTS,
  RECEIVE_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "../actions/product_actions";

const startState = [
  {
    title: "",
    price: 0,
    description: "",
    quantity: 0,
    user: "",
  },
];

const productsAPIReducer = (state = startState, action) => {
  Object.freeze(state);
  let newState = { ...state };
  debugger;
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.data;
    case RECEIVE_PRODUCT:
      newState = action.product.data;
      return newState;
    case RECEIVE_NEW_PRODUCT:
      return (newState = { ...state, [action.product]: action.product });
    default:
      return state;
  }
};

export default productsAPIReducer;
