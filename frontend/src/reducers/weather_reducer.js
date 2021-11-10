import { RECEIVE_WEATHER } from "../actions/weather_action";

const startState = [];

const weatherAPIReducer = (state = startState, action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_WEATHER:
      return [...newState, action.city.data];
    default:
      return state;
  }
};

export default weatherAPIReducer;
