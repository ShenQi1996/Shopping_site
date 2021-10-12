import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchProducts } from "../../actions/product_actions";
const Navbar = props => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.session.isAuthenticated);

  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal(e.target.innerText));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  };

  let signIn;

  if (loggedIn) {
    signIn = (
      <div>
        <button onClick={logoutUser}>Sign Out</button>
      </div>
    );
  } else {
    signIn = (
      <div>
        <a href="/" target="_blank">
          Metailmen
        </a>
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
