import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import Logo from "./components/Logo";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? <PhotoCardWithQuery id={detailId} /> : <Home />}
    </div>
  );
};
