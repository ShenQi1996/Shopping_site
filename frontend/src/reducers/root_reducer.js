import { combineReducers } from "redux";
import sessionAPIReducer from "./session_api_reducer";
import uiReducer from "./ui_reducer";
import sessionError from "./errors_reducer";
import productsAPIReducer from "./product_api_reducer";
import weatherAPIReducer from "./weather_reducer";

const RootReducer = combineReducers({
  session: sessionAPIReducer,
  ui: uiReducer,
  sessionError: sessionError,
  products: productsAPIReducer,
  weather: weatherAPIReducer,
});

export default RootReducer;
