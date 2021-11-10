import * as WeatherAPIUtil from "../util/weather_api_util";

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";

const receiveWeather = city => ({
  type: RECEIVE_WEATHER,
  city,
});

export const fetchWeather = city => dispatch => {
  return WeatherAPIUtil.fetchWeather(city)
    .then(res => dispatch(receiveWeather(res)))
    .catch(err => console.log(err));
};
