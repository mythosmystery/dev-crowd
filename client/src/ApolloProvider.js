import React from "react";
import App from "./App";
import { ApolloClient, InMemoryCache } from "apollo-client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  url: "http://localhost:3001/",

  name: "client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

// This export may be incorrect ^^^