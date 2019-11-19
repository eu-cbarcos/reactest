import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './styles/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeContext from './themeContext';
import {BrowserRouter} from "react-router-dom"
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});
ReactDOM.hydrate( // ya no es render, sino hydratar... rehidratamos
  <ApolloProvider client={client}>
    <BrowserRouter><App /></BrowserRouter>
  </ApolloProvider>
  , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
