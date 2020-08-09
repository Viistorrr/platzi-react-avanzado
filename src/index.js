import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { App } from "./App";

const client = new ApolloClient({
  //permitira hacer queries directamente en el puerto de graphql
  uri: "https://petgram-server-alpha.now.sh/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
