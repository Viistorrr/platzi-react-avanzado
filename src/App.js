import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import Logo from "./components/Logo";

import { Router } from "@reach/router";

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
        <Detail path="detail/:detailId" />
      </Router>
    </div>
  );
};
