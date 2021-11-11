import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchWeather } from "../../actions/weather_action";
const Navbar = props => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.session.isAuthenticated);
  const weather = useSelector(state => state.weather);
  const [weatherBtm, setWeatherBtm] = useState(false);
  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal(e.target.innerText));
  };

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  };

  let city = "New York";
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);

  const handleWeather = e => {
    e.preventDefault();
    setWeatherBtm(!weatherBtm);
  };
  let weatherInf;
  if (weatherBtm === true) {
    weatherInf = (
      <div>
        <h1>City Name : {weather[0].name}</h1>
        <h2>Weather:</h2>
        <h2>{weather[0].weather[0].main}</h2>
        <h2>{weather[0].weather[0].description}</h2>
        <h2>Temperature: {weather[0].main.temp}</h2>
        <h2>Temperature feeks like: {weather[0].main.feels_like}</h2>
        <h2>Humidity: {weather[0].main.humidity}</h2>
        <h2>Wind Speed: {weather[0].wind.speed}</h2>
      </div>
    );
  } else {
    weatherInf = <div>Click the Weather button</div>;
  }
  let signIn;

  if (loggedIn) {
    signIn = (
      <div>
        <div>
          <a href="/">SellALL</a>
        </div>
        <NavLink to="/products" activeClassName="">
          Products
        </NavLink>
        <NavLink to="/user" activeClassName="">
          Profile
        </NavLink>
        <button onClick={handleWeather}>Weahter</button>
        <button onClick={logoutUser}>Sign Out</button>
      </div>
    );
  } else {
    signIn = (
      <div>
        <div>
          <a href="/">SellALL</a>
        </div>
        <button onClick={handleWeather}>Weahter</button>
        <button onClick={handleModal}>Sign In</button>
        <button onClick={handleModal}>Sign Up</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Nav Bar</h1>
      {signIn}
      {weatherInf}
    </div>
  );
};

export default Navbar;
