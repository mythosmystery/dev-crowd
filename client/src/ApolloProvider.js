import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache } from 'apollo-client';
import { setContext } from '@apollo/client/link/context';
const cache = new InMemoryCache();
const httpLink = createHttpLink({
   uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('id_token');
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

const client = new ApolloClient({
   cache: cache,
   link: authLink.concat(httpLink),
   url: 'http://localhost:3001/',

   name: 'client',
   version: '1.3',
   queryDeduplication: false,
   defaultOptions: {
      watchQuery: {
         fetchPolicy: 'cache-and-network',
      },
   },
});

export default (
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>
);

// This export may be incorrect ^^^
