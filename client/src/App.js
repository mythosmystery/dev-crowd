import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Container } from 'react-bootstrap';
import Auth from './utils/auth';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile';
import Newsfeed from './pages/Newsfeed';

const httpLink = createHttpLink({
   uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('id_token');
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : ''
      }
   };
});

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache()
});

function App() {
   const homePage = Auth.loggedIn() ? Newsfeed : Home;
   return (
      <ApolloProvider client={client}>
         <Router>
            <Navbar authRoute='/profile' />
            <Container fluid>
               <Route exact path='/' component={homePage} />
               <Route exact path='/profile' component={Profile} />
            </Container>
            <Footer />
         </Router>
      </ApolloProvider>
   );
}

export default App;
