import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";
import MainPage from "./main/main_page";
import Modal from "./modal/modal";
import Navbar from "./nav/navbar";
import Products from "./product/products";
import UserPage from "./User/user_page";
const App = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/user" component={UserPage} />
      </Switch>
    </>
  );
};

export default App;
