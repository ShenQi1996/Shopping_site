import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchWeather } from "../../actions/weather_action";
const Navbar = props => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.session.isAuthenticated);

  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal(e.target.innerText));
  };

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  };

  let city = "New York";
  const handleWeather = e => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

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
    </div>
  );
};

export default Navbar;
