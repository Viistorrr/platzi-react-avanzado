import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { NavBar } from "./components/NavBar";
import Logo from "./components/Logo";

import { Router } from "@reach/router";

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/favs" />
              <NotRegisterUser path="/user" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </div>
  );
};
