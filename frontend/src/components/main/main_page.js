import React from "react";
import { useDispatch } from "react-redux";

const MainPage = props => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>SellALL</h1>
      <footer>Copyright &copy; 2021 Sam Qi</footer>
    </div>
  );
};

export default MainPage;
