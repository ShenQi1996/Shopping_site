import { RECEIVE_WEATHER } from "../actions/weather_action";

const startState = [];

const weatherAPIReducer = (state = startState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WEATHER:
      return [action.city.data];
    default:
      return state;
  }
};

export default weatherAPIReducer;
