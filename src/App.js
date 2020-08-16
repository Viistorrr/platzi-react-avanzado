import React, { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { NavBar } from "./components/NavBar";
import Logo from "./components/Logo";
import { NotFound } from "./pages/NotFound";

import { Router, Redirect } from "@reach/router";
import { Context } from "./Context";

export const App = () => {
  //const urlParams = new window.URLSearchParams(window.location.search);
  //const detailId = urlParams.get("detail");
  const { isAuth } = useContext(Context);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </div>
  );
};
