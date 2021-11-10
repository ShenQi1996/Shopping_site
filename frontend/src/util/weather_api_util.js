import axios from "axios";
//const weather = require("../../../config/keys").weather;
export const fetchWeather = city => {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d2fb99022462734675f96fd5c2f1144`,
  });
};

//remenber add https
