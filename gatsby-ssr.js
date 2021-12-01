import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import "./styles.css";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Page: relayStylePagination(),
      },
    },
  },
});

const client = new ApolloClient({
  cache: cache,
  uri: "https://graphql.anilist.co",
});

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
