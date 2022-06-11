import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css'
import Events from './pages/Events'
import Home from './pages/Home'
import Login from './pages/Login'
import MyScores from './pages/MyScores'
import Rates from './pages/Rates'
import Scores from './pages/Scores'
import Nav from './components/Nav'
import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/myscores" element={<MyScores />} />
          <Route  path="/rates" element={<Rates />} />
          <Route  path="/scores" element={<Scores />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
